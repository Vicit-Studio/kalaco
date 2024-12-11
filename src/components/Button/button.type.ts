export interface TypeButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withIcon: boolean;
  styles: "brand" | "light" | "dark";
}
