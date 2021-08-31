
import PlayerDisplay from "./PlayerDisplay";
import GameDisplay from "./GameDisplay";
import TeamDisplay from "./TeamDisplay";


const Display = (props) => {

    const currentButton = props.currentButton;
    const searchInput = props.searchInput;

    //add all props for all 3 displays here and pass them into the appropriate component depending on the current button 
    //get the information from the searchbar fom the app component


    const getDataRender =()=>{
        if (currentButton === 'player'){
          return <PlayerDisplay/>
        }
        else if (currentButton ==='team'){
          return <TeamDisplay/>
        }
        else{
          return <GameDisplay/>
        }
      }

    return ( 
        <div className="display-wrapper">
        {getDataRender()}
        {console.log(searchInput)}

        </div>
     );

}
 
export default Display;