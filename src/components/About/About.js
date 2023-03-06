import { Link, Outlet } from "react-router-dom";
import Profile from "../ProfileClass/ProfileClass";
import ProfileFunctionalComponent from "../Profile/Profile";
import { Component } from "react";
import UserContext from "../../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Constructoir");
  }

  componentDidMount() {
    // Best place to make API call
    console.log("componet did mount...");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h3 className="font-bold text-red-600">{user.name}</h3>
          )}
        </UserContext.Consumer>
        <p>
          You know those times when you try to get a cab and the app says 5
          minutes, so you go ahead and book one, just for it to say, “Oh yeah
          no, it's really 30 minutes.” Yeah it's a hard problem.
        </p>

        {/* <Outlet />
        <Link to="profile">
          <Profile />
        </Link> */}

        <ProfileFunctionalComponent name="Subham" />
        <Profile name="Subham Class" />
      </div>
    );
  }
}

export default About;
