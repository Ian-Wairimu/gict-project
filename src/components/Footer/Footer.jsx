import React from "react";
import {Abstract} from "./FooterItems/Abstract.jsx";
import {Resources} from "./FooterItems/Resources.jsx";
import {Community} from "./FooterItems/Community.jsx";
import {Company} from "./FooterItems/Company.jsx";
import {CopyRight} from "./FooterItems/CopyRight.jsx";
import {Button} from "../Button/Button.jsx";
import "./footer.css";

export const Footer = () => {
    const button = [
        {
            name: "Help ?",
            className: "ft--btn",
        }
    ]
  return (
      <>
          <div className="footer--cont">
              <Abstract />
              <Resources />
              <Community />
              <Company />
              <CopyRight />
              {
                  button.map((v, i) => {
                      return <Button key={i} name={v.name} className={v.className}/>
                  })
              }
          </div>
      </>
  )
}