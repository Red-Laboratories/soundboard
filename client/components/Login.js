import React from 'react';


function loginClick() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  console.log(username, password);
  if (!username) alert('Need to enter a username!');
  if (!password) alert('Need to enter a password!');
  // make post request to server with username and password
  fetch('api/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data === 'failed login') {
        // send alert if login attemp failed
        alert('you have entered an incorrect username/password')
      } else {
        // if verified redirect to homepage
        window.location.href = '/board'
      }
    })
    .catch(err => console.log('Login error: ', err));
}

function Login () {
    return(
      <div>
        <input type='text' id ='username' placeholder='username'/>
        <input type='password' id ='password' placeholder='password'/>
        <button onClick={loginClick}>login</button>
      </div>
    )
}
   

export default Login;

/*app.post('/', function(request, response) {
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