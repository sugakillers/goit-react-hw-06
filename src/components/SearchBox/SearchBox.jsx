
import css from "./SearchBox.module.css"
const SearchBox = ({ filter, onFilter }) => {
return (
    <div className={css.searchBoxDiv}>
    <label htmlFor="searchBox">Find contacts by name</label>
    <input className={css.searchInput} value={filter} onChange={(e) => onFilter(e.target.value)}type="text" id="searchBox" />
    </div>
)
}

export default SearchBox