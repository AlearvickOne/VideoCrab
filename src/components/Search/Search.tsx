import SearchIcon from "@mui/icons-material/Search";
import "./search.scss";

export const Search = () => {
  return (
    <form className="form">
      <div className="search-input flex-center">
        <SearchIcon className="search-icon" />
        <input type="text" name="searc" value="" placeholder="Search" />
        <button type="button">Seach</button>
      </div>
    </form>
  );
};
