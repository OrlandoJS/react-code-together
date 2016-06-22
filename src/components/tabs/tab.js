import React from 'react';

class Tab extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedTab: 0
    }
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs__labels">
          {
            this.props.children.map((pane, index) => {
                const activeClass = (index === this.state.selectedTab) ? 'active' : '';
                return (<li key={index}>
                          <a href="#" className={activeClass} onClick={this.handleTabChange.bind(this, index)}>{pane.props.label}</a>
                        </li>)
            })
          }
        </ul>
        <div className="tabs__content">
            {this.props.children[this.state.selectedTab]}
        </div>

      </div>
    );
  }

  handleTabChange(index, evt) {
    evt.preventDefault();

    this.setState({
      selectedTab: index
    });
  }

}

Tab.propTypes = {
  children: React.PropTypes.array.isRequired
}
export default Tab;
