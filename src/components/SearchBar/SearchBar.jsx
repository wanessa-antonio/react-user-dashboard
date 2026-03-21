import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-input"
      placeholder="Buscar usuário..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;