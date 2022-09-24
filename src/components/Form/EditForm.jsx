import React, {useState} from "react";
import axios from "axios";
import {Button} from "../Button/Button";

export const EditForm = () => {
    const [data, setData] = useState({
        ID: "",
        Message: "",
        Age: "",

    });
    const token = "ALDJAK23423JKSLAJAF23423J23SAD3";
    const changeData = async (e) => {
        try {
            e.preventDefault()
            const res = await axios.put(`/api/dummy/items/${data.ID}`, {
                Message: data.Message,
                Age: data.Age
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Access-Control-Allow-Origin": "*",
                }
            });
            console.log("changed data")
            setData(res.data);
            setData(
                {
                    ID: "",
                    Message: "",
                    Age: ""
                }
            )
        }catch (e) {
            console.log(e.message);
        }
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const button = [
        {
            name: "Submit",
            className: "submit--btn",
        }
    ]
    return (
        <>
            <div className="submit--form">
                <form onSubmit={changeData}>
                    <input
                        type="number"
                        name="ID"
                        onChange={handleChange}
                        value={data.ID}
                        placeholder="ID" />
                    <input
                        type="text"
                        name="Message"
                        onChange={handleChange}
                        value={data.Message}
                        placeholder="Message" />
                    <input
                        type="number"
                        name="Age"
                        onChange={handleChange}
                        value={data.Age}
                        placeholder="Age" />
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