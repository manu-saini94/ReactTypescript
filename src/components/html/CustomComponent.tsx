// Assumption greet componenet is a third party library component and we cannot access its props.
// Extracting a component's props
import { Greet } from "../Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
