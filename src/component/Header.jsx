import { ElementNav } from "./NavBar"
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
export default function Header(props) {
    return (
        <div className="borderContent h-[53px]">
            <button type="button"> <h2 className="text-xl font-bold mt-1" >{props.name}</h2></button>
            <img src={props.src} alt="Timeline" className="h-5 content-center mt-2" />
        </div>

    );
}

