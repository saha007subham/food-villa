import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 0,
    };
    console.log("Constructoir");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Profile class component</h1>
        <h2>Name : {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        >
          count
        </button>
      </div>
    );
  }
}

export default Profile;
