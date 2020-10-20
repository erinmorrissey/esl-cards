import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Card from "./Card";
import SearchBox from "./SearchBox";
import "../styles/App.css";

const MAX_CARDS = 20;
const URL = `https://api.elderscrollslegends.io/v1/cards?page=1&pageSize=${MAX_CARDS}`;

class App extends React.Component {
  state = {
    cards: [],
    hasError: false,
    hasMoreItems: true,
    nextPage: null,
    searchTerm: "",
  };

  handleChange = (value) => {
    this.setState({ searchTerm: value.toLowerCase() });
  };

  handleError = () => {
    this.setState({ hasError: true });
  };

  loadCards = () => {
    const { cards, nextPage } = this.state;
    const url = nextPage ? nextPage : URL;

    fetch(url)
      .then((response) => {
        if (!response.ok) return this.handleError();
        return response.json();
      })
      .then((data) => {
        if (data._links.next) {
          this.setState({
            cards: [...cards, ...data.cards],
            nextPage: data._links.next,
          });
        } else {
          this.setState({
            cards: [...cards, ...data.cards],
            nextPage: null,
            hasMoreItems: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.handleError();
      });
  };

  renderError = () => {
    return (
      <div className="error">
        Oops! Something seems to have gone wrong...{" "}
        <span>Please try again later.</span>
      </div>
    );
  };

  render() {
    const { cards, hasError, hasMoreItems, searchTerm } = this.state;
    const showInfiniteScroll = searchTerm === "";

    const scrollCards = cards.map((card) => (
      <Card props={card} key={card.id} />
    ));
    const filteredCards = cards
      .filter((card) => card.name.toLowerCase().includes(searchTerm))
      .map((card) => <Card props={card} key={card.id} />);

    return (
      <div className="app">
        <SearchBox handleChange={this.handleChange} />
        {hasError && this.renderError()}
        {!hasError && showInfiniteScroll ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadCards}
            hasMore={hasMoreItems}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <div className="card-container">{scrollCards}</div>
          </InfiniteScroll>
        ) : (
          <div className="card-container">{filteredCards}</div>
        )}
      </div>
    );
  }
}

export default App;
