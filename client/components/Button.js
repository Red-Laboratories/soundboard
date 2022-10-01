import React from 'react';


function Button () {
    <div class="grid grid-cols-3 gap-3 p-5 mt-12">
          <div class="w-72 h-72 text-black self-center hover:shadow-lg transition-all ease-in-out h-30 rounded-xl bg-gray-400 p-4 cursor-pointer">
            <span>
                Q
                <button className="hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base align-text-top rounded-full">
                    ...
                </button>
            </span>
            
          </div>
          <div class=" w-72 h-72 shadow-lg text-black self-center hover:shadow-lg transition-all ease-in-out h-30 rounded-xl bg-gray-400 p-4 cursor-pointer">W</div>
          <div class=" w-72 h-72 shadow-lg text-black self-center hover:shadow-lg transition-all ease-in-out h-30 rounded-xl bg-gray-400 p-4 cursor-pointer">E</div>
        </div>
}

export default Button;