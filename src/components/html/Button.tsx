// type ButtonProps = {
//   variant: "primary" | "secondary";
// };
// export const CustomButton = ({ variant }: ButtonProps) => {
//   return <button>Label</button>;
// };

// type ButtonProps = {
//   variant: "primary" | "secondary";
//   children:string
// } & React.ComponentProps<"button">;

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
