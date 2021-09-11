import { useEffect } from "react";
import { useState } from "react";

const TeamDisplay = (props) => {
    const searchInput = props.searchInput;
    const [teams, setTeams] = useState(null)

    useEffect(()=>{
        let url = 'https://www.balldontlie.io/api/v1/teams'
        fetch(url)
        .then(res => {
            if (!res.ok){
                throw Error("Could now get the data");
            }
            return res.json();
        })
        .then(data => {
            setTeams(data.data);
        })
        .catch(err=>{
            console.log(err.message);
        })

    },[searchInput])
    
    return ( 
        <div className="teamDisplay-wrapper">
        {console.log(teams)}
        {teams && teams.map((tms)=>(
            <div className="list-wrapper" key={tms.id}>
            <h4 className="team-name">{tms.full_name}</h4>
            <p>Conference: {tms.conference}</p>
            <p>Division: {tms.division}</p>
            <p>Abbreviation: {tms.abbreviation}</p>
            <p>City: {tms.city}</p>

            </div>
        ))}

        </div>
     );
}
 
export default TeamDisplay;