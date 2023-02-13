import React from "react";
import ReactCardFlip from "react-card-flip";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedFrontToBack="1"
          flipSpeedBackToFront="1"
          containerClassName="hover:cursor-pointer"
        >
          <div
            className="h-96 w-96 rounded-xl bg-slate-200 shadow-xl"
            onClick={this.handleClick}
          >
            FRONT
          </div>

          <div
            className="h-96 w-96 rounded-xl bg-blue-300 shadow-xl"
            onClick={this.handleClick}
          >
            BACK
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;
