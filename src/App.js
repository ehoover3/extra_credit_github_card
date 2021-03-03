import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";

const { useState } = React;

function App() {
  // STATE VARIABLES
  let [user, setUser] = useState({});
  let [active, setActive] = useState(false);

  const handleToggle = (e) => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }

    // create a fetch
    fetch(`https://api.github.com/users/ehoover3`)
      .then((response) => response.json())
      .then((jsonObject) => {
        // Update state with fetch result
        setUser(jsonObject);
        console.log(user);
      });
  };

  switch (active) {
    case false:
      return (
        <div>
          <Button onClick={handleToggle}>Toggle User</Button>
        </div>
      );
      break;
    case true:
      return (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
              <Card.Title>Eric Hoover</Card.Title>
              <Card.Text>
                <div>Login: {user.login}</div>
                <div>HTML URL: {user.html_url}</div>
                <div>Public Repos: {user.public_repos}</div>
              </Card.Text>
              <Button onClick={handleToggle}>Toggle User</Button>
            </Card.Body>
          </Card>
        </div>
      );
      break;
    default:
      return null;
  }
}

export default App;

// Follow the PR workflow to submit this project
// After you initialize your project with create-react-app
// create a dev branch to work from
// You will also need to create a new repository on github
// Push it to github and create a pull request from your dev branch and submit the link to the pull request.
