import React from 'react';
 
class LoadPics extends React.Component {
  renderImage(imageUrl) {
    return (
      <div className="columns is-6">
        <img src={imageUrl} />
      </div>
    );
  }
 
  render() {
    return (
        <div className="columns is-gapless is-multiline is-mobile">
        <div className="columns is-6">
        <div className="section">
       {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
       </div>
        </div>
        </div>
      
    );
  }
}
LoadPics.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
export default LoadPics;

