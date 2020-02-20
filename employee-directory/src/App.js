import React from "react";
import "./App.css";
import Employee from "./components/EmployeeCard/index.jsx";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      {this.state.friends.map(friend => (
        <Employee
          removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </Wrapper>
  );
}

export default App;
