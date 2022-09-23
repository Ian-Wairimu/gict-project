import React from "react";
import {Button} from "../Button/Button"
import "./header.css";

export const Header = () => {
    const button = [
        {
            name: "Learn more",
            className: "btn--header",
        }
    ]
  return (
      <>
         <div className="header--con">
             <div className="header--con_img">
             </div>
             <div className="header--cont">
                 <h1>Welcome GICT Project</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                 {button.map((v, i) => {
                     return <Button key={i} className={v.className} name={v.name} />
                 })}
             </div>
         </div>
      </>
  )
}