import { ChangeEvent} from "react";
import "./searchBox.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) {
  return (
    <input
      className={`searchBox ${className}`}
      type="search"
      placeholder={`${placeholder}`}
      onChange={onChangeHandler}
    ></input>
  );
}
 