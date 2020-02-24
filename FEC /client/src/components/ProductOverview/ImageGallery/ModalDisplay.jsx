/* eslint-disable no-shadow */
import React from 'react';
import RightArrow from './DefaultView/rightArrow.jsx';
import LeftArrow from './DefaultView/leftArrow.jsx';
import DisplayExpanded from './DisplayExpanded.jsx';

class ModalDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: '',
      currentIndex: '',
      currentImage: '',
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {
    const { gallery } = this.props;
    const { currentImage } = this.props;
    const { currentIndex } = this.props;
    this.setState({
      photos: gallery,
      currentIndex,
      currentImage,
    });
  }

  goToPreviousSlide() {
    const { currentIndex } = this.props;
    if (currentIndex !== 0) {
      this.setState(
        (prevState) => ({
          currentIndex: prevState.currentIndex - 1,
        }),
        function() {
          const { photos } = this.state;
          const { currentIndex } = this.state;
          this.setState({
            currentImage: photos[currentIndex].url,
          });
        },
      );
    }
  }

  goToNextSlide() {
    const { currentIndex } = this.props;
    const { photos } = this.state;
    if (currentIndex === photos.length - 1) {
      this.setState({
        currentIndex: 0,
      });
    }
    this.setState(
      (prevState) => ({
        currentIndex: prevState.currentIndex + 1,
      }),
      function() {
        const { photos } = this.state;
        const { currentIndex } = this.state;
        this.setState({
          currentImage: photos[currentIndex].url,
        });
      },
    );
  }

  render() {
    const { currentImage } = this.state;
    const { currentIndex } = this.state;
    const { photos } = this.state;
    return (
      <div className="DefaultView">
        <div className="slideWrap">
          <DisplayExpanded currentImage={currentImage} />
        </div>
        {currentIndex !== 0 && (
          <LeftArrow goToPreviousSlide={this.goToPreviousSlide} />
        )}
        {currentIndex !== photos.length - 1 && (
          <RightArrow goToNextSlide={this.goToNextSlide} />
        )}
      </div>
    );
  }
}

export default ModalDisplay;
