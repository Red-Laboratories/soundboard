import React from 'react';
import login from './img/logo.png'

function Signup () {
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
                    <input type="text" class="w-full bg-white border border-b-4 border-slate-400 block appearance-none border-grey-light hover:border-grey px-2 py-2 rounded-xl shadow-xl" placeholder="Email"></input>
                </div>

                <div>
                    <label class="font-bold text-grey-darker block mb-2">Password</label>
                    <input type="text" class="w-full bg-white border-b-4 border-slate-400 block appearance-none border border-grey-light hover:border-grey px-2 py-2 rounded-xl shadow-xl mb-2" placeholder="Password"></input>
                </div>

                <div class="flex items-center justify-between">
                    <button class="bg-slate-400 border-b-4 border-slate-500 py-2 px-4 rounded-xl hover:bg-slate-300 text-white font-bold shadow-xl" onClick={() => {window.location.href='/board'}}>
                        Signup
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</body>
    )
}
   

export default Signup;