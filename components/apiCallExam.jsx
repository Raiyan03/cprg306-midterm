"use client";
import React, { useEffect, useState } from "react";

const APICallExam = (props) => {


  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={props.handleClick}>
          Submit
        </button>
        {props.code && (<p className=" text-red-500 text-0.5xl">{props.code}</p>)}
      </div>
    </div>
  );
};

export default APICallExam;
