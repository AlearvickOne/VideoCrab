import { Link } from "react-router-dom";
import { Search } from "../Search/Search";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1 className="title-header">VIDEO CRAB</h1>
      </Link>
      <Search />
    </header>
  );
};
