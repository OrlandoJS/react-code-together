import React from 'react';

class TabPane extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

TabPane.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired
}

export default TabPane;
