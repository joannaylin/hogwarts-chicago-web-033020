import React, { Component } from 'react'
import HiddenPig from "./HiddenPig.js"

class HiddenPigContainer extends Component {
  render() {
    const hiddenPiggies = this.props.hiddenPigs.map(pig=> {
      return <HiddenPig pigObj={pig} key={pig.name} />
    })

    return (
      <div className="ui three cards">
        {hiddenPiggies}
      </div>
    );
  }
}

export default HiddenPigContainer