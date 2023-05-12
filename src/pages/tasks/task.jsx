import React from 'react';
import Check_circle from '../../assets/check-circle.svg';
import Circle_minus from '../../assets/minus-circle.svg';
import Xcircle from '../../assets/x-circle.svg';

export default function Tasks({ complete, nameTask, changeTask, deleteTask }) {
  return (
    <div className="h-12 w-72 px-8 md:w-[calc(500px-2rem)] mb-2.5 flex justify-between items-center  rounded border border-color4 bg-color2">
      <div className="flex justify-start">
        {complete == 1 ? chechkCircle() : circleMinus()}
        <p className="text- ">{nameTask}</p>
      </div>
      <div onClick={() => deleteTask()} className=" w-5 rounded-full mr-4">
        <img src={Xcircle} alt="" />
      </div>
    </div>
  );
  function chechkCircle() {
    return (
      <button
        onClick={() => changeTask()}
        className=" w-5 h-5 rounded-full mr-4"
        style={{ background: '#55B3D9' }}
      >
        <img src={Check_circle} alt="" />
      </button>
    );
  }

  function circleMinus() {
    return (
      <div onClick={() => changeTask()} className="rounded-full mr-4">
        <img src={Circle_minus} alt="" />
      </div>
    );
  }
}
