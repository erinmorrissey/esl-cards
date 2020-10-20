import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Card from "./Card";
import SearchBox from "./SearchBox";
import "./App.css";

const MAX_CARDS = 20;
const URL = `https://api.elderscrollslegends.io/v1/cards?page=1&pageSize=${MAX_CARDS}`;

class App extends React.Component {
  state = {
    cards: [],
    hasMoreItems: true,
    nextPage: null,
    searchTerm: "",
  };

  handleChange = (value) => {
    this.setState({ searchTerm: value.toLowerCase() });
  };

  loadCards = () => {
    const { cards, nextPage } = this.state;
    const url = nextPage ? nextPage : URL;

    fetch(url)
      .then((response) => response.json())
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
      });
  };

  render() {
    const { cards, hasMoreItems, searchTerm } = this.state;
    const showScroll = searchTerm === "";

    const scrollCards = cards.map((card) => (
      <Card props={card} key={card.id} />
    ));
    const filteredCards = cards
      .filter((card) => card.name.toLowerCase().includes(searchTerm))
      .map((card) => <Card props={card} key={card.id} />);

    return (
      <div className="app">
        <SearchBox handleChange={this.handleChange} />
        {showScroll ? (
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
