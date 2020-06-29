import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // imageUrl: "http://picsum.photos/200",
  };

  styles = {
    fontSize: 15,
    fontWeight: "Bold",
  };

  // constructor() {
  //   super();

  //   this.handleIncremet = this.handleIncremet.bind(this);
  // }
  render() {
    // return (  );
    // React.createElement(h1)
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        {/* <span>{this.state.count}</span> -> commented*/}
        {/* <img src={this.state.imageUrl} alt="randomPic"></img> -> commented**/}
        {/* <span>{this.formatCounter()}</span> */}

        <span style={this.styles} className={classes}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.handleIncremet}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </React.Fragment>
    );
  }
  //uses constructor
  // handleIncremet() {
  //   console.log("increament clicked", this);
  //   // this.state.count++;
  // }
  //using arrow functions
  handleIncremet = () => {
    console.log("increament clicked", this);
    //this will not work
    // this.state.count++;

    this.setState({ count: this.state.count + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    //object destructring
    const { count } = this.state;
    // return count === 0 ? "<h1>Zero</h1>" : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
