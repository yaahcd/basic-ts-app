import { ChangeEvent } from "react";
import "./searchBox.styles.css";

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox({
  placeholder,
  onChangeHandler,
}: SearchBoxProps) {
  return (
    <div className="search-box-container">
    <div className="large-btn-container">
    <div className="blue-btn">
      <div className="inner-blue-btn"></div>
    </div>
    </div>
    <input
      className="search-box"
      type="search"
      placeholder={`${placeholder}`}
      onChange={onChangeHandler}
    />
    <div className="small-btn-container">
      <div className="red-btn"></div>
      <div className="yellow-btn"></div>
      <div className="green-btn"></div>
    </div>
    </div>
  );
}
