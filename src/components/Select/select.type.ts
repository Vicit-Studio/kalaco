export interface TypeSelect
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  full?: boolean;
  error?: boolean;
  placeholder?: string;
  arrayItems: { textItem: string; valueItem: string }[];
}
