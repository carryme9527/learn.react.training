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
          <button
            className='reset'
            onClick={this.props.onReset.bind(null, this.props.id)}>
              Reset
          </button>
        </div>
      </div>
    )
  }
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

module.exports = PlayerPreview;
