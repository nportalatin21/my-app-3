import React from "react";
import { userNameAtom } from "./atoms";
import "./BlueStripe.css";
import { useRecoilValue } from "recoil";

export const BlueStripe = () => {
  const userName = useRecoilValue(userNameAtom)

  return (
    <div className="BlueStripe">

      username: {userName}



    </div>
  
    )
};
