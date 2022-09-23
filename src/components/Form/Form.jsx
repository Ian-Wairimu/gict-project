import React, {useState} from "react";
import {Button} from "../Button/Button.jsx";
import "./form.css";
import axios from "axios";

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
    const onSubmit = async(e) => {
        try {
            e.preventDefault();
            await axios.post('/api/dummy/', data)
            console.log("your data has been submitted")
            setData({
                fullName: "",
                email: "",
                phone: "",
                address: ""
            });
        }catch (e) {
            console.log(e.message)
        }
    };
    const button = [
        {
            name: "Submit",
            className: "submit--btn",
        }
    ]
  return (
      <>
          <div className="submit--form">
              <form onSubmit={onSubmit}>
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
                       return <Button key={i} name={v.name} className={v.className}/>
                   })
                  }
              </form>
          </div>
      </>
  )
}