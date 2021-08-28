const SearchBar = () => {

    return (  
        <div className="search-wrapper">
        <form className='form' id='addItemForm'>
        <input
          type='text'
          className='input'
          id='addInput'
          placeholder='NBA LOOKUP'
        />
        <button className='btn' >
          Search
        </button>
      </form>
        </div>
    );
}
 
export default SearchBar;