import React from 'react';

class Tab extends React.Component {

  render() {
    return (
      <div className="tabs">
        {this.props.children}
      </div>
    );
  }

}

export default Tab;
