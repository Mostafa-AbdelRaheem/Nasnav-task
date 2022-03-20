import React, { Component } from "react";
import "../styles/components/starGenerator.scss";

class StarGenerator extends Component {
  state = {};
  render() {
    return (
      <div className="starsMainContainer">
        {Array(Math.floor(this.props.rate))
          .fill()
          .map((_, i) => (
            <div key={i} className="starContainer">
              <img
                className="stars"
                src={this.props.fullStarSrcPath}
                alt="full star for ratting"
              />
            </div>
          ))}

        {Array(this.props.maxRate - Math.floor(this.props.rate))
          .fill()
          .map((_, i) => (
            <div key={i} className="starContainer">
              <img
                className="stars"
                src={this.props.emptyStarSrcPath}
                alt="empty star for ratting"
              />
            </div>
          ))}
      </div>
    );
  }
}

export default StarGenerator;
