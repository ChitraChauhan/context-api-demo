import { createContext } from "react";

const UserContext = createContext({
  username: "johndoe",
  firstName: "John",
  lastName: "Doe"
});
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
