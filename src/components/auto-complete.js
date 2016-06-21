import React from 'react';

/**
 * 1. Placing the input
 * 2. Displaying the libraries
 * 3. Filtering the libraries
 */

const libraries = [
  { name: 'React', url: 'http://facebook.github.io/react/'},
  { name: 'AngularJS', url: 'https://angularjs.org/'},
  { name: 'Backbone.js', url: 'http://backbonejs.org/'},
  { name: 'jQuery', url: 'http://jquery.com/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Mootools', url: 'http://mootools.net/'},
  { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'http://momentjs.com/'},
  { name: 'Express', url: 'http://expressjs.com/'},
  { name: 'Koa', url: 'http://koajs.com/'},
];

class AutoComplete extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: ''
    }

  }
  render() {

    let filteredLibraries = libraries;

    if (this.state.searchText) {
      const regex = new RegExp(this.state.searchText, 'i');
      filteredLibraries = libraries.filter(library => regex.test(library.name))
    }

    return (
      <div className="autocomplete">
        <input type="text" placeholder="Filter your libraries here" onChange={this.handleFilterText.bind(this)} />

        {this.state.searchText?
          `Results for: ${this.state.searchText}, we found ${filteredLibraries.length} results` :
          null
        }

        <ul>
          {filteredLibraries.map(library => (
            <li key={library.name}>
              {library.name}
              <a href={library.url} target="_blank">{library.url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleFilterText(evt) {

    this.setState({
      searchText: evt.target.value
    })

  }
}

export default AutoComplete;
