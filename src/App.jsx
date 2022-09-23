import React, {useEffect, useState} from "react";
import {HashLoader} from "react-spinners";
import {Navigation} from "./components/Navigation/Navigation";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {TabComponent} from "./components/Tab/TabComponent";

export const App = () => {
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            {loading ? <span id="loader"><HashLoader color="#BF54B8" /></span> : (
                <div>
                    <Navigation />
                    <Header />
                    <TabComponent />
                    <Footer />
                </div>
            )
            }
        </>
    );
}