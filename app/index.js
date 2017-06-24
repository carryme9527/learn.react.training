var React = require('react');
var ReactDOM = require('react-dom');
// require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        Hello React Training!
      </div>
    )
  }
}

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

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Badge
      name='Tyler McGinnis'
      username='tylermcginnis'
      img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
    />
    <Users list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Mikenzi', friend: false },
      { name: 'Dan', friend: false }
    ]} />
  </div>,
  document.getElementById('app')
);
