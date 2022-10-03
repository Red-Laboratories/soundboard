import React, { useState, useEffect } from 'react';
import Button from './Button';
import logo2 from './img/logo2.png'
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
      <div className="m-auto max-w-5xl bg-slate-400 border-b-8 border-slate-500 rounded-xl border">
        <h1 className="font-bold text-3xl p-0 text-center text-slate-300">
          <img className="mt-11 pt-18 w-1/3 float-left" src={logo2} alt="">
            </img>
        </h1>
        <div className="pl-0 grid grid-cols-3 gap-4">
          {board}
          {/* {renderButtons()} */}
        </div>
      </div>
    </div>
  )
}

export default Board;

/*app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/board');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});*/