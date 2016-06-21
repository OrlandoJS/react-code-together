// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import AutoComplete from './components/auto-complete';

class App extends React.Component {
  render() {
    return (
      <div>
        <AutoComplete />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
