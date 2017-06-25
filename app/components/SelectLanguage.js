var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

// class SelectLanguage extends React.Component {
//   render() {
//     var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
//     return (
//       <ul className='languages'>
//         {languages.map(function (lang) {
//           return (
//             <li
//               style={lang === this.props.selectedLanguage ? { color: '#d0021b'} : null}
//               onClick={this.props.onSelect.bind(null, lang)}
//               key={lang}>
//               {lang}
//             </li>
//           )
//         }, this)}
//       </ul>
//     )
//   }
// }

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

module.exports = SelectLanguage;
