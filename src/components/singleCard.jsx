import React, { Component } from "react";
import Pagination from "./pagination";
import "../styles/singleCard.css";

class SingleCard extends Component {
  state = {
    cards: [
      {
        artist: "",
        cmc: null,
        colorIdentity: "",
        colors: [],
        imageUrl: null,
        id: "",
        manaCost: "",
        name: "",
        originalText: "",
        originalType: "",
        power: null,
        rarity: "",
        subtypes: [],
        toughness: null,
        type: "",
      },
    ],
    pageSize: 1,
    currentPage: 1,
  };

  async componentDidMount() {
    await fetch("https://api.magicthegathering.io/v1/cards?pageSize=5")
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data.cards }));
  }

  handlePageChangeNext = (currentPage) => {
    this.setState({ currentPage: currentPage + 1 });
  };

  handlePageChangePrevious = (currentPage) => {
    this.setState({ currentPage: currentPage - 1 });
  };

  render() {
    const cards = [...this.state.cards];
    const { pageSize, currentPage } = this.state;

    const startIndex = (currentPage - 1) * pageSize;

    const cardsToDisplay = cards.splice(startIndex, 1);

    console.log(cardsToDisplay);

    return (
      <div>
        {cardsToDisplay.map((card) => (
          <div key={card.id}>
            <div className="container">
              <div className="inner">
                <div>
                  <h1>{card.name}</h1>
                </div>
                <div className="inner">
                  <img src={card.imageUrl} alt="" />
                </div>{" "}
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <td className="label">Artist:</td>
                  <td className="content">{card.artist}</td>
                </tr>
                <tr>
                  <td className="label">Colors: </td>
                  {card.colors.map((color) => (
                    <td key={color} className="content">
                      {color}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="label">Color Identity:</td>
                  <td className="content">{card.colorIdentity}</td>
                </tr>
                <tr>
                  <td className="label">Mana Cost: </td>
                  <td className="content">{card.manaCost}</td>
                </tr>
                <tr>
                  <td className="label">CMC: </td>
                  <td className="content">{card.cmc}</td>
                </tr>
                {card.power && (
                  <tr>
                    <td className="label">Power: </td>
                    <td className="content">{card.power}</td>
                  </tr>
                )}

                {card.toughness && (
                  <tr>
                    <td className="label">Toughness: </td>
                    <td className="content">{card.toughness}</td>
                  </tr>
                )}

                <tr>
                  <td className="label">Type: </td>
                  <td className="content">{card.type}</td>
                </tr>
                <tr>
                  <td className="label">Rarity: </td>
                  <td className="content">{card.rarity}</td>
                </tr>
                <tr>
                  <td className="label">Text: </td>
                  <td className="content description">{card.originalText}</td>
                </tr>
              </tbody>
            </table>
            <Pagination
              itemsCount={cards.length + 1}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageNext={this.handlePageChangeNext}
              onPagePrevious={this.handlePageChangePrevious}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default SingleCard;
