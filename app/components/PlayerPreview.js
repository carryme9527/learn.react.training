var React = require('react');
var PropTypes = require('prop-types');

class PlayerPreview extends React.Component {
  render() {
    return (
      <div>
        <div className='column'>
          <img
            className='avatar'
            src={this.props.avatar}
            alt={'Avatar for ' + this.props.username}
          />
          <h2 className='username'>@{this.props.username}</h2>
          {this.props.children}
        </div>
      </div>
    )
  }
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = PlayerPreview;
