import { getImages } from '../model/requests';

function Search({ name, value, onSearch }) {
  let timer;
  const search = async function (e) {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        const images = await getImages(e.target.value);
        onSearch(images);
      } catch (error) {
        console.error(error);
      }
    }, 500);
  };
  return (
    <label className="search-box" htmlFor={name}>
      <span className="material-icons" style={{ color: '#BDBDBD' }}>
        search
      </span>
      <input
        onChange={search}
        name={name}
        className="search-box__search"
        autoComplete="off"
        placeholder="Search by name"
      />
    </label>
  );
}
export default Search;
