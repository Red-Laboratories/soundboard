import React, {useState} from 'react';
import Button from './Button'

// create a function to pull info from DB to create initial btnKey & sound state
const getBtnKeys = async() => {
    const state = await fetch('/');
    // edit state?
    return state;
}

const getSound = async() => {
    const state = await fetch('/');
    return state;
}
// create a function to make patch request to update database when we update state

function App() {
    // pass evaluated result of getSound and getBtnKEys to useState for our initial state
    const [btnKey, changeKey] = useState(["Q","W","E","A","S","D","Z","X","C"]); 
    const [sound, changeSound] = useState(["Q","W","E","A","S","D","Z","X","C"]);

    console.log(btnKey);
    console.log(sound);
    const board = []
    for(let i = 0; i < 9; i++){
        board.push(<Button key={i} btnKeyVal={btnKey[i]} soundVal={sound[i]}/>)
    }
    console.log(board)    
    return (
        <main>
            <header>
                <div className="font-bold bg-orange-200">
                    Hello World
                </div>
            </header>
            <div>
                {board}
            </div> 
        </main>
    )

}

export default App;


