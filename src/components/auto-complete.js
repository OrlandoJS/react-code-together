import React from 'react';

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
  render() {
    return (
      <div className="autocomplete">
        Hello world
      </div>
    );
  }
}

export default AutoComplete;
