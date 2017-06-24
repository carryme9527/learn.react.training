var React = require('react');
var PropTypes = require('prop-types');

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function (user) {
      return user.friend === true;
    });
    var nonFriends = this.props.list.filter(function (user) {
      return user.friend !== true;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function (user) {
            return (
              <li keye={user.name}>
                {user.name}
              </li>
            )
          })}
        </ul>
        <hr />
        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map(function (user) {
            return (
              <li keye={user.name}>
                {user.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  // list: PropTypes.arrayOf(PropTypes.object)
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
}

module.exports = Users;

/*
<Users list={[
  { name: 'Tyler', friend: true },
  { name: 'Ryan', friend: true },
  { name: 'Michael', friend: false },
  { name: 'Jessica', friend: true },
  { name: 'Mikenzi', friend: false },
  { name: 'Dan', friend: false }
]} />
*/
