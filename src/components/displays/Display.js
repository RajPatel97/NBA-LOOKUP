
import PlayerDisplay from "./PlayerDisplay";
import GameDisplay from "./GameDisplay";
import TeamDisplay from "./TeamDisplay";


const Display = (props) => {

    const currentButton = props.currentButton;
    const searchInput = props.searchInput;


    //renders the correct component for the type of data
    const getDataRender =()=>{
        if (currentButton === 'player'){
          return <PlayerDisplay searchInput = {searchInput}/>
        }
        else if (currentButton ==='team'){
          return <TeamDisplay searchInput = {searchInput}/>
        }
        else{
          return <GameDisplay searchInput = {searchInput}/>
        }
      }

    return ( 
        <div className="display-wrapper">
        {getDataRender()}

        </div>
     );

}
 
export default Display;