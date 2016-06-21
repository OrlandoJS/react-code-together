// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

// Import dependencies like this:
import AutoComplete from './components/auto-complete';
import Tab from './components/tabs/tab';
import TabPane from './components/tabs/tab-pane';
import {libraries} from './lib/mocks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Tab>
          <TabPane label="React">Content for React</TabPane>
          <TabPane label="Angular">Content for Angular</TabPane>
          <TabPane label="Ember">Content for Ember</TabPane>
        </Tab>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
