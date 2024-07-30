import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonsProps } from "./components/Person.types";
import { PersonList, PersonsListProps } from "./components/PersonList";
import { Text } from "./components/polymorphic/Text";
import DomRef from "./components/ref/DomRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Status, StatusProps } from "./components/Status";
import { Toast } from "./components/templateliterals/Toast";

function App() {
  type MyItem = {
    id: number;
    name: string;
  };

  const items: MyItem[] = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];

  const handleClick = (item: MyItem) => {
    console.log(item);
  };

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
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={items}
        onClick={handleClick}
        renderItem={(item) => <span>{item.name}</span>}
      />
      <RandomNumber value={10} isPositive />

      <Toast position="left-center" />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        {/* <div>Primary Button</div> */}
        Primary Button
      </CustomButton>

      <div>
        <Text as="h1" size="lg">
          Heading
        </Text>
        <Text as="p" size="md">
          Paragraph
        </Text>
        <Text as="label" size="sm" color="secondary">
          Label
        </Text>
      </div>
    </div>
  );
}

export default App;
