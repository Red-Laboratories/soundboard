import React from 'react';
import login from './img/logo.png'

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
      // <div>
      //   <input type='text' placeholder='username'/>
      //   <input type='password' placeholder='password'/>
      //   <button onClick={() => {window.location.href='/board'}}>login</button>
      // </div>
<body class="max-h-fit max-w-4xl mx-auto my-auto bg-slate-400 border-b-8 border-slate-500 shadow-2xl rounded-xl border">
    <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
            <h1 class="pt-0">
              <img src={login} alt=""></img>
            </h1>
            <div class="p-8 border-t-5 bg-slate-300 mb-6 py-2 px-2 border-b-8 border-slate-400 rounded-xl shadow-2xl">
                <div>
                    <label class="font-bold text-grey-darker block mb-2">Username</label>
                    <input type="text" id ='username' class="w-full bg-white border border-b-4 border-slate-400 block appearance-none border-grey-light hover:border-grey px-2 py-2 rounded-xl shadow-xl" placeholder="Email"></input>
                </div>

                <div>
                    <label class="font-bold text-grey-darker block mb-2">Password</label>
                    <input type="text" id="password" class="w-full bg-white border-b-4 border-slate-400 block appearance-none border border-grey-light hover:border-grey px-2 py-2 rounded-xl shadow-xl mb-2" placeholder="Password"></input>
                </div>

                <div class="flex items-center justify-between">
                    <button class="bg-slate-400 border-b-4 border-slate-500 py-2 px-4 rounded-xl hover:bg-slate-300 text-white font-bold shadow-xl" onClick={loginClick}>
                        Login
                    </button>
                </div>
                
            </div>
            <div class="text-center">
                <p class="text-grey-dark text-sm">Don't have an account? <a href="#" class="no-underline text-blue font-bold" onClick={() => {window.location.href='/signup'}}>Create an Account</a>.</p>
            </div>
        </div>
    </div>
</body>
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