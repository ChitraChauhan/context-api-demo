import React, { Component } from "react";
import { UserProvider, UserConsumer } from "./context";

const User = () => (
  <div>
    <UserProfile />
  </div>
);

const UserProfile = props => (
  <UserConsumer>
    {({ state }) => {
      return (
        <div>
          <h2>Profile Page of {state.username}</h2>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
);

const UserDetails = () => (
  <div>
    <UserConsumer>
      {({ state, actions }) => {
        return (
          <div>
            <div>
              <p>Userame: {state.username}</p>
              <p>First Name: {state.firstName}</p>
              <p>Last Name: {state.lastName}</p>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  value={state.firstName}
                  onChange={actions.handleFirstNameChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={state.lastName}
                  onChange={actions.handleLastNameChange}
                />
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  </div>
);

export default class App extends Component {
  state = {
    user: {
      username: "jioke",
      firstName: "Kingsley",
      lastName: "Silas"
    }
  };

  render() {
    return (
      <div>
        <UserProvider
          value={{
            state: this.state.user,
            actions: {
              handleFirstNameChange: event => {
                const value = event.target.value;
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    firstName: value
                  }
                }));
              },

              handleLastNameChange: event => {
                const value = event.target.value;
                this.setState(prevState => ({
                  user: {
                    ...prevState.user,
                    lastName: value
                  }
                }));
              }
            }
          }}
        >
          <User />
        </UserProvider>
      </div>
    );
  }
}
