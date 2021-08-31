const SearchBar = (props) => {

  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;

  const handleSubmit = (event)=>{
    event.preventDefault();
    setSearchInput(event.target[0].value)
    console.log(event.target[0].value)//for dbugging
  }

  

    return (  
        <div className="search-wrapper">
        <form className='form' id='addItemForm' onSubmit ={handleSubmit}>
        <input
          type='text'
          className='input'
          id='addInput'
          placeholder='NBA LOOKUP'
          
        />
        <button className='btn'>
          Search
        </button>
      </form>
        </div>
    );
}
 
export default SearchBar;