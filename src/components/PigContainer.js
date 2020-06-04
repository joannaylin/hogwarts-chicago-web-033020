import React, { Component } from "react";
import Pig from './Pig.js'

class PigContainer extends Component {

  render() {
    const piggies = this.props.pigs.map(pig=> {
      return <Pig pigObj={pig} key={pig.name} handleHiddenPig={this.props.handleHiddenPig}/>
    })

    return (
      <div className="ui three cards">
        {piggies}
      </div>
    );
  }
}

export default PigContainer;
