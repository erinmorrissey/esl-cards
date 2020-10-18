import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./App.css";

const MAX_CARDS = 20;
const URL = `https://api.elderscrollslegends.io/v1/cards?page=1&pageSize=${MAX_CARDS}`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      hasMoreItems: true,
      nextPage: null,
    };
    this.loadCards = this.loadCards.bind(this);
  }

  loadCards() {
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
  }

  render() {
    const cards = this.state.cards.map((card) => {
      return <p>{card.name}</p>;
    });

    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
