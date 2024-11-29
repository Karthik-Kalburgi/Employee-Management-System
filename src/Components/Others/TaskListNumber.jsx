import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="rounded-xl w-[45%] py-6 px-9   bg-red-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9   bg-blue-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9   bg-green-700">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9   bg-yellow-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
    
    
  );
};

export default TaskListNumber;
