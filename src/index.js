// Import NPM dependencies like this:
import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
import './styles/main.scss';

/*
1. TabPane should return the real content
2. Display label props on the Tab Component
3. We should have an active css class
4. Click on the tab we display the right content
5. PropTypes validation
 */


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
          {
            libraries.map(library => (
                            <TabPane label={library.name} key={library.name}>
                              Website for {library.name} is: <a href={library.url} target="_blank">{library.url}</a>
                              <AutoComplete />
                            </TabPane>
                            )
                          )
          }
        </Tab>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
