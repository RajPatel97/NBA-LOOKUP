
import Navbar from "./components/Navbar";
import SimpleCard from "./components/SimpleCard";
import Buttons from "./components/Buttons";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Display from "./components/Display";


function App() {

  const [currentButton, setCurrentButton] = useState('');
  const [searchInput, setSearchInput] = useState('kanye');


  return (
    <div className="App">
    <Navbar/>
    <SimpleCard/>
    <Buttons currentButton = {currentButton} setCurrentButton = {setCurrentButton}/>
    <SearchBar searchInput ={searchInput} setSearchInput={setSearchInput} />
    <Display currentButton = {currentButton}/>
    {console.log(searchInput)}

    
    </div>
  );
}

export default App;
