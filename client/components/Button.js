import React from 'react';
import { Howl, Howler } from 'howler';

function Button(props) {
  const logKey = (e) => {
    console.log(e.keyCode)
  }

  // const playSound = (e) => {
  //   const audio = document.getElementById(`${e.keyCode}`);
  //   if (!audio) return;

  //   audio.click();s
  // }

  // window.addEventListener('keydown', playSound);

  const sound = require(`./sounds/${props.sound}`).default;

  const clickSound = (src) => {
    const sound = new Howl({
      src
    });
    // sound.currentTime = 0;
    sound.play();
  }

  Howler.volume(0.5);
  return (
    <div onClick={() => clickSound(sound)} id={props.btnKey.charCodeAt(0)} className="w-full h-0 pb-full bg-slate-300 text-black hover:bg-slate-200 shadow-2xl py-2 px-4 border-b-8 border-slate-500 transition-all ease-in-out rounded-xl cursor-pointer border">
      {props.btnKey}
      <div className="relative top-0 right-0 font-bold float-right align-middle hover:bg-slate-500 transition-all duration-100 ease-in-out text-textColor text-base rounded-full">
        ...
      </div>
    </div>
  )
}


export default Button;