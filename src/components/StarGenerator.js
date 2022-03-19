import React, { Component } from "react";

class StarGenerator extends Component {
  state = {};
  render() {
    return (
      <>
        <>
          {Array(Math.floor(this.props.rate))
            .fill()
            .map((_, i) => (
              <div key={i} className="starContainer">
                <img className="stars" src={this.props.fullStarSrcPath} />
              </div>
            ))}
        </>
        <>
          {Array(this.props.maxRate - Math.floor(this.props.rate))
            .fill()
            .map((_, i) => (
              <div key={i} className="starContainer">
                <img className="stars" src={this.props.emptyStarSrcPath} />
              </div>
            ))}
        </>
      </>
    );
  }
}

export default StarGenerator;
