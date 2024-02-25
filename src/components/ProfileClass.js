import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create a State in classComponent
    this.state = {
      count: 1,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Constructor");
  }

   componentDidMount() {
    // const data = await fetch("https://api.github.com/users/akshaymarch7");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });

    // setInterval(()=>{
    //     console.log("Namste React op")
    // },1000)

    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Profile ClassBased Component</h1>
        <img
          style={{ height: "200px", width: "200px" }}
          src={this.state.userInfo.avatar_url}
        />
        <h3>Name : {this.state.userInfo.name}</h3>
        <h3>Location : {this.state.userInfo.location}</h3>

        {/* <button
          onClick={() => {
            // We do not mutate state directly
            //never do this.state = something
            this.setState({ count: 2, count2: 3 });
          }}
        >
          Increment
        </button> */}
      </div>
    );
  }
}

export default Profile;
