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

btnKey = [
    Q,W,E,

]

function App() {
    
    const [btnKey, changeKey] = useState(getBtnKeys()); //pull from data        
    const [sound, changeSound] = useState(getSound());

    console.log(btnKey);
    console.log(sound);
    const board = []
    for(i = 0; i < 9; i++){
        board.push(<Button key={i} btnKeyVal={btnKey[i]} soundVal={sound[i]}/>)
    }
        
    return (
        <main>
            <header>
                <div className="font-bold bg-orange-200">
                    Hello World
                </div>
            </header>
            {board}
        </main>
    )

}

export default App;


