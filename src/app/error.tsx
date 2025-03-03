"use client";
import { useEffect } from "react";
type children = {
  error: string;
  reset: any;
};

const error = ({error, reset}: children) => {
    useEffect(() => {
        console.log(error);
    }, [error])
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. please try again later.</h1>
      <button className="hover:text-amber-600" onClick={()=> reset()}>
        Try Again
      </button>
    </div>
  )
}

export default error
