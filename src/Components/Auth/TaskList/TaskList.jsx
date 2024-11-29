import React from "react";

const TaskList = () => {
  return (
    <div id="tasklist" className="h-[55%] w-full flex overflow-auto items-center justify-start gap-5  flex-nowrap py-5 mt-10 ">
      <div className=" flex-shrink-0 h-full w-[300px] p-7 bg-yellow-500 rounded-xl">

        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 text-sm rounded text-white">High</h3>
            <h4>20 feb 2024</h4>
        </div>
        <h2>Make a Youtube Video</h2>
      </div>
     
     
  
    </div>
  );
};

export default TaskList;
