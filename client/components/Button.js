import React from 'react';


function Button () {
    return(
      <div class="w-72 h-72 text-black self-center hover:shadow-lg transition-all ease-in-out h-30 rounded-xl bg-gray-400 p-4 cursor-pointer">
        <div>
          <p className="float-left">
            Q
          </p>
          <button className="float-right align-middle hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base rounded-full">
                ...
          </button>
        </div>
      </div>
    )
}
   

export default Button;