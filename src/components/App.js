import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "./PigContainer.js";
import Filter from "./Filter.js";
import HiddenPigContainer from "./HiddenPigContainer.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      pigs: hogs,
      greased: false,
      sortBy: "",
      hiddenPigs: [],
      hidden: false
    };
  }

  handleToggleGreased = () => {
    this.setState((prevState) => ({
      greased: !prevState.greased,
    }));
  };

  handleSelectChange = (event) => {
    this.setState({
      sortBy: event.target.value,
    });
  };

  handleHiddenPig = (hiddenPig) => {
    const { pigs, hiddenPigs } = this.state;
    const updatedPigs = pigs.filter(pig=> pig.name !== hiddenPig.name)

    this.setState({
      pigs: updatedPigs,
      hiddenPigs: [...hiddenPigs, hiddenPig]
    })
  }

  toggleHiddenPigs = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  filterGreased = () => {
    if (this.state.greased) {
      return this.state.pigs.filter((pig) => pig.greased);
    } else {
      return this.state.pigs;
    }
  };


  handleShowHogs = () => {
    const showHogs = this.filterGreased();
    
    switch (this.state.sortBy) {
      case "name":
        return showHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name));
      case "weight":
        return showHogs.sort((hog1, hog2) => hog1.weight - hog2.weight);
      default:
        return showHogs;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          handleToggleGreased={this.handleToggleGreased}
          handleSelectChange={this.handleSelectChange}
          toggleHiddenPigs = {this.toggleHiddenPigs}
        />
        { this.state.hidden && this.state.hiddenPigs.length ? <HiddenPigContainer hiddenPigs={this.state.hiddenPigs}/> : null}
        <PigContainer pigs={this.handleShowHogs()} handleHiddenPig = {this.handleHiddenPig}/>
      </div>
    );
  }
}

export default App;
