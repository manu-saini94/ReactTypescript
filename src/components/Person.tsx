import { PersonsProps } from "./Person.types";

export const Person = (props: PersonsProps) => {
  return (
    <div>
      <h2>
        {props.name.first}
        {props.name.last}
      </h2>
    </div>
  );
};
