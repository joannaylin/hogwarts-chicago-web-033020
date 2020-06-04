import React, { Component } from "react";

class Pig extends Component {
  constructor() {
    super();
    this.state = {
      moreInfo: false,
    };
  }

  imgUrl = (name) => {
    const img = name.toLowerCase().replace(/ /g, "_");
    const imgUrl = require(`../hog-imgs/${img}.jpg`);
    return imgUrl;
  };

  handleInfoClick = () => {
    this.setState((prevState) => ({
      moreInfo: !prevState.moreInfo,
    }));
  };

  showMoreInfo = (greased, medal, weight) => {
    if (this.state.moreInfo) {
      return (
        <div>
          <strong>
            <p>{greased ? "Greased" : "Nongreased"}</p>
          </strong>
          <p>
            Highest medal achieved: <strong>{medal}</strong>
          </p>
          <p>
            Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door
            Refrigerator with Thru-the-Door Ice and Water:{" "}
            <strong>{weight}</strong>
          </p>
        </div>
      );
    }
  };


  render() {
    const { name, specialty, greased, weight } = this.props.pigObj;
    const medal = this.props.pigObj["highest medal achieved"];

    return (
      <div className="ui card pigTile">
        <img src={this.imgUrl(name)} alt="piggy pic"></img>
        <h3>{name}</h3>
        <p>Specialty: {specialty}</p>
        {this.showMoreInfo(greased, medal, weight)}
        <button onClick={this.handleInfoClick} className="ui button">
          More Info
        </button>
        <button onClick={() => this.props.handleHiddenPig(this.props.pigObj)} className="ui button">
          Hide Me{" "}
          <span role="img" aria-label="pig">
            🐽
          </span>
        </button>
      </div>
    );
  }
}

export default Pig;
