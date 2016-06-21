import React from 'react';

/*
DONE 1. display libraries on screen
DONE 2. add filter field on top
DONE 3. do filtering when user types something

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

    this.handleFilter = this.handleFilter.bind(this);
  }

  render() {

    let filteredLibraries = libraries;

    if (this.state.searchText) {
      const regex = new RegExp(this.state.searchText, 'i');
      filteredLibraries = libraries.filter(function(library) {
        return regex.test(library.name);
      })
    }



    return (
      <div className="autocomplete">
        <input type="text" placeholder="Filter libraries here" onChange={this.handleFilter} />

        {
          this.state.searchText?
            <div>Results for: {this.state.searchText}, we found {filteredLibraries.length} results.</div>
            : null
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

  handleFilter(evt) {
    this.setState({
      searchText: evt.target.value
    })
  }
}

export default AutoComplete;
