import React, {useState} from "react";
import {Button} from "../Button/Button.jsx";
import "./form.css";
import SubmitService from "../../SubmitService.js";

export const Form = () => {
    //store the data in form of an object
    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",

    })
    const handleChange = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const handleClick = () => {
        // console.log(data)
        SubmitService.create(JSON.stringify(data)).then(
            (returnData) => {
                setData(returnData)
                setData("")
            }
        ).catch(e => {
            alert(
                `There was an error when parsing your data:
                 ${data.fullName}
                 ${data.email}
                 ${data.phone}
                 ${data.address}`
            )
            console.log(e.message)
        })
    }
    const button = [
        {
            name: "Submit",
            className: "submit--btn",
            onclick: handleClick,
        }
    ]
  return (
      <>
          <div className="submit--form">
              <form onSubmit={(e) => e.preventDefault()}>
                  <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      value={data.fullName}
                      placeholder="Full name" />
                  <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                      placeholder="Email" />
                  <input
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      value={data.phone}
                      placeholder="Phone" />
                  <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      value={data.address}
                      placeholder="Address" />
                  {
                   button.map((v, i) => {
                       return <Button key={i} name={v.name} className={v.className} onClick={v.onclick}/>
                   })
                  }
              </form>
          </div>
      </>
  )
}