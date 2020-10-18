import React from "react";
import InfiniteScroll from "react-infinite-scroller";
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
    const cards = this.state.cards.map((card) => {
      return <p className="card">{card.name}</p>;
    });

    const showScroll = this.state.searchTerm === "";

    return (
      <div className="App">
        <SearchBox handleChange={this.handleChange} />
        {showScroll && (
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadCards}
            hasMore={this.state.hasMoreItems}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {cards}
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

export default App;
