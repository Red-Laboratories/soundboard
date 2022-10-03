import React, { useState, useEffect } from 'react';
import Button from './Button';
// sound files
import boom from './sounds/boom.wav';
// import c3 from './sounds/c3.wav';
const c3 = require('./sounds/c3.wav').default;
import clap from './sounds/clap.wav';
import djairhorn from './sounds/djairhorn.mp3';
import dogbark from './sounds/dogbark.wav';
//import fire from './sounds/fire.mp3';
const fire = require('./sounds/fire.mp3').default;
import gameover from './sounds/gameover.wav';
import geese from './sounds/geese.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.mp3';
import kick2 from './sounds/kick2.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import sadtrombone from './sounds/sadtrombone.wav';
import scratch from './sounds/scratch.mp3';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';

// each object is a button
// each button object should have sound, button key, position, and color  
const audioClips = [
  { sound: 'c3.wav', label: 'C3' },
  // { sound: fire, label: 'Fire' },
  // { sound: snare, label: 'Snare' },

]


// create a function to pull info from DB to create initial btnKey & sound state
const getBtnKeys = async () => {
  const state = await fetch('/');
  // edit state?
  return state;
}

const getSound = async () => {
  const state = await fetch('/');
  return state;
}

// create a function to make patch request to update database when we update state


function Board() {
  const playSound = (e) => {
    const audio = document.getElementById(`${e.keyCode}`);
    if (!audio) return;

    audio.click();
  }

  window.addEventListener('keydown', playSound);

  const [state, changeState] = useState();
  //const [sound, changeSound] = useState();
  useEffect(() => {
    fetch('/api/main')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        changeState(data)
      })
      .catch(err => console.log(err))
  }, [])

  if (!state) {
    return <></>
  }

  const board = []
  for (let i = 0; i < 9; i++) {
    board.push(<Button key={i} btnKey={state[i].key} color={state[i].color} position={state[i].button_position} sound={state[i].sound} />)
  }

  return (
    <div>
      <div className="bg-slate-400 py-2 px-2 border-b-8 border-slate-500 rounded-xl border">
        <h1 className="font-bold text-3xl text-center text-slate-300">SoundBoard</h1>
        <div className="grid grid-cols-3 gap-4">
          {board}
          {/* {renderButtons()} */}
        </div>
      </div>
    </div>
  )
}

export default Board;