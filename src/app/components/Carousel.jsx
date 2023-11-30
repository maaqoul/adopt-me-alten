import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://placehold.co/600x400"],
  };

  handleNextClick = (event) => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />

        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              key={image + index}
              src={image}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
              onClick={this.handleNextClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
