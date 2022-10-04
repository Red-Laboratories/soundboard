import React, { useState, useEffect } from 'react';
import Button from './Button';
import logo2 from './img/logo2.png'


// make get request to server to verify if there is cookie first
const checkCookie = () => {
  // make get request to which endpoint?
  fetch('/api/main')
    .then(res => res.json())
    .then(data => {
      if (data === 'unauthorized') {
        // re-route request to home page if they do not have a cookie
        window.location.href = '/';
      } else {
        console.log('welcome back!')
      }
    })
  .catch(err =>console.log('error with checkCookie in Board.js'))
};

// create a logout function
const logout = () => {
  fetch('/api/logout', {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    // reroute to login page after deleting cookie
    window.location.href = '/';
  })
  .catch(err =>console.log('error with logout in Board.js'))
};



function Board() {
  checkCookie();
  const playSound = (e) => {
    const audio = document.getElementById(`${e.keyCode}`);
    if (!audio) return;

    audio.click();
  }

  window.addEventListener('keydown', playSound);

  const [state, changeState] = useState();
  
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
          <button onClick={logout}>Logout</button>
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
