/* eslint-disable  */
import React from 'react';
import CircleImage from './CircleImage.jsx';

import './styleSelector.scss';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: '',
      selected: '',
      checkedCircle: 0,
    };
    this.updateStyle = this.updateStyle.bind(this);
    this.indicateSelected = this.indicateSelected.bind(this);
  }

  componentDidMount() {
    const { styles } = this.props;
    this.setState({
      images: styles,
      selected: styles[0].name,
    });
  }

  updateStyle(e, styleImage) {
    const { styles } = this.props;
    const { changeStyle } = this.props;
    e.preventDefault();
    for (let i = 0; i < styles.length; i += 1) {
      if (styles[i].photos[0].url === styleImage) {
        changeStyle(styles[i]);

        this.setState({
          selected: styles[i].name,
        });
      }
    }
  }

  indicateSelected(num) {
    this.setState({
      checkedCircle: num,
    });
  }

  render() {
    const { checkedCircle, selected, images } = this.state;
    const { changeStyle, changeImage, styles } = this.props;
    if (images) {
      return (
        <div className="styleSelectorContainer">
          <div className="styleSelectorText">
            <strong>Style > </strong>
            {`  ${selected}`}
          </div>
          <br />
          <div className="smallImages">
            {styles.map((element, i) => {
              // if (element.photos.url) {
              return (
                <CircleImage
                  indicateSelected={this.indicateSelected}
                  checkedCircle={checkedCircle}
                  changeImage={changeImage}
                  updateStyle={this.updateStyle}
                  changeStyle={changeStyle}
                  updateSelected={this.updateSelected}
                  image={element.photos[0].url}
                  key={element.photos[0].url}
                  index={i}
                />
              );
              // }
            })}
          </div>
        </div>
      );
    }
    return null;
  }
}

export default StyleSelector;
