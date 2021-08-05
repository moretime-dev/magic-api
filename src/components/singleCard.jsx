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
  };

  async componentDidMount() {
    await fetch("https://api.magicthegathering.io/v1/cards")
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data.cards }));
  }

  handlePageChange = () => {
    console.log("TEST");
  };

  render() {
    const cards = this.state.cards;

    return (
      <div>
        <div className="container">
          <div className="inner">
            {console.log(cards[0])}
            <div>
              <h1>{cards[0].name}</h1>
            </div>
            <div className="inner">
              <img src={cards[0].imageUrl} alt="" />
            </div>{" "}
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td className="label">Artist:</td>
              <td className="content">{cards[0].artist}</td>
            </tr>
            <tr>
              <td className="label">Colors: </td>
              {cards[0].colors.map((color) => (
                <td key={color} className="content">
                  {color}
                </td>
              ))}
            </tr>
            <tr>
              <td className="label">Color Identity:</td>
              <td className="content">{cards[0].colorIdentity}</td>
            </tr>
            <tr>
              <td className="label">Mana Cost: </td>
              <td className="content">{cards[0].manaCost}</td>
            </tr>
            <tr>
              <td className="label">CMC: </td>
              <td className="content">{cards[0].cmc}</td>
            </tr>
            <tr>
              <td className="label">Power: </td>
              <td className="content">{cards[0].power}</td>
            </tr>
            <tr>
              <td className="label">Toughness: </td>
              <td className="content">{cards[0].toughness}</td>
            </tr>
            <tr>
              <td className="label">Type: </td>
              <td className="content">{cards[0].type}</td>
            </tr>
            <tr>
              <td className="label">Rarity: </td>
              <td className="content">{cards[0].rarity}</td>
            </tr>
            <tr>
              <td className="label">Text: </td>
              <td className="content description">{cards[0].originalText}</td>
            </tr>
          </tbody>
        </table>
        <Pagination
          itemsCount={cards.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default SingleCard;
