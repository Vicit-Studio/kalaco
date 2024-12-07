export interface TypeButton extends React.HTMLAttributes<HTMLButtonElement> {
  withIcon: boolean;
  styles: "brand" | "light" | "dark";
}
