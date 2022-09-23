import React, {useEffect, useState} from "react";
import axios from "axios";
import "./table.css";

export const Table = () => {
    const[data, setData]=useState({});
    const token = "ALDJAK23423JKSLAJAF23423J23SAD3";
    const getData = async () => {
        try {
            const res = await axios.get('/api/dummy/items/', {
                params: {
                    per_page: 10
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Access-Control-Allow-Origin": "*",
                }
            });
            console.log(res.data)
            setData(res.data);
        }catch (e) {
            console.log(e.message);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 1000)
    }, [])
    const renderedTable = Object.values(data).map(post => {
        return <tbody key={post.ID}>
                    <td>{post.ID}</td>
                    <td>{post.Message}</td>
                    <td>{post.Age}</td>
                </tbody>
    })
    return (
        <>
            <div className="con--table">
                <table>
                    <thead>
                    <th>Id</th>
                    <th>Message</th>
                    <th>Age</th>
                    </thead>
                        {renderedTable}
                </table>
            </div>
        </>
    );
}