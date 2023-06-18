import React, {useState} from "react";
import '../styles/App.css';
// import { set } from "cypress/types/lodash";



let arr = ["Siblings","Friends", "Love", "Affection", "Marriage", "Enemy"];

const App = () => {

    let [firstName, setFirstName] = useState("");  // Soumya
    let [secondName, setSecondName] = useState(""); // ansh
    let [relationShip, setRelationShip] = useState(""); // Love
    let [click, setClick] = useState(false); 

    function findRelationShip(){
        if(firstName === "" || secondName === ""){
              return setRelationShip("Please Enter valid input")
        }


         let string1,string2
         for(let t of firstName){
             if(secondName.includes(t)){
                  setFirstName(firstName.replace(t,""))
                //   string2 = secondName.replace(t,"")
                  setSecondName(secondName.replace(t,""))
             }
         }
         setClick(true)

            // console.log(string1,string2)
            // let count = string1.length + string2.length
            // setRelationShip(arr[count%6])
    }



    return(
        <div>

                
                <input type="text"  placeholder="First Name" data-testid="input1"
                    onChange = {(event) => setFirstName(event.target.value)}
                /> 
                <input type="text"  placeholder="Second Name" data-testid="input2"
                     onChange = {(event) => setSecondName(event.target.value)}
                />
                <button onClick={findRelationShip} data-testid="calculate_relationship">Calculate Relationship Future</button>
                <button data-testid="clear" onClick={()=>{
                    setFirstName("")
                    setSecondName("")
                    setRelationShip("")
                    setClick(false)
                }}>Clear</button>
                <h3 data-testid="answer">{
                    click &&
                     arr[(firstName.length+secondName.length)%6]
                }</h3>

                
        </div>
    )
}


export default App;