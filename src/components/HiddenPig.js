import React from "react";

const GIF_URL =
  "http://api.giphy.com/v1/gifs/random?tag=bacon-sausage-pork&rating=g&api_key=y7uQOLStw37upyo5FpJwhOTaPPaqS6vU";

class HiddenPig extends React.Component {
  state = {
    img: "",
  };

  fetchGIF = () => {
    fetch(GIF_URL)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          img: json.data.image_original_url,
        })
      );
  };

  componentDidMount() {
    this.fetchGIF();
  }

  render() {
    const { img } = this.state;
    return (
      <div className="ui centered fluid card">
        <div className="image">
          <img onClick={this.fetchGIF} src={img} alt="bacon" />
        </div>
        <p className="header">RIP {this.props.pigObj.name}</p>
      </div>
    );
  }
}

export default HiddenPig;
