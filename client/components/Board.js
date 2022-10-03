import React, { useState } from 'react';
import Button from './Button';
import logo2 from './img/logo2.png'

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
  // pass evaluated result of getSound and getBtnKEys to useState for our initial state
  const [btnKey, changeKey] = useState(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]);
  const [sound, changeSound] = useState(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]);

  console.log(btnKey);
  console.log(sound);
  const board = []
  for (let i = 0; i < 9; i++) {
    board.push(<Button key={i} btnKeyVal={btnKey[i]} soundVal={sound[i]} />)
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