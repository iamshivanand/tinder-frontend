import React,{useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people]=useState([
        {
            name:"scarlet",
            url:"https://images.indianexpress.com/2018/08/scarlett-johansson-759.jpg"
        },
        {
            name:"katherine",
            url:"https://media1.popsugar-assets.com/files/thumbor/_e8yyvGAXDGoYFBlranB7_S6OZo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/04/06/796/n/1922283/4ac3a23c58e683d413a3a7.49594733_edit_img_cover_file_43401070_1491501630/i/Katherine-Langford-Singing.jpg"
        }
    ]);

    const swiped =(direction,nameToDelete) =>{
        console.log("htaa deya "+nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame= (name)=>{
        console.log(name+" left the screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            
            {people.map((person) =>(
               <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) =>swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                  <div
                    style={{backgroundImage:`url(${person.url})`}}
                    className="card">
                    <h3>{person.name}</h3>  
                  </div>
              </TinderCard>
           ))}

            </div>
           
        </div>
    )
}

export default TinderCards
