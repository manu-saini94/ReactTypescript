import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonsProps } from "./components/Person.types";
import { PersonList, PersonsListProps } from "./components/PersonList";
import DomRef from "./components/ref/DomRef";
import { Status, StatusProps } from "./components/Status";

function App() {
  let obj: PersonsProps = { name: { first: "Ajay", last: "Kumar" } };
  let arr: PersonsListProps["names"] = [{ first: "Arun", last: "Kumar" }];
  let status: StatusProps["status"] = "loading";
  return (
    <div className="App">
      <Greet name="Amit" messageCount={20} isLoggedIn={true} />
      <Person name={obj.name} />
      <PersonList names={arr} />
      <Status status={status} />
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>Oscar goes to Tom Hardy!</Heading>
      </Oscar>
      <Greet name="Optional props example name Atul" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, " ", id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Box />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
    </div>
  );
}

export default App;
