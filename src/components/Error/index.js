import React from 'react'
import "../../styles/error.css"
import { NavLink } from "react-router-dom"


export default function index() {
    return (
        <div className="error">
            <h1 className="error__logo">4<span><i class="fas fa-ghost"></i></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <p>Sorry, the page you're looking for cannot be accessed</p>
            <button className="btn btn-success btn__error">
                <NavLink to="/"> TRỞ VỀ TRANG CHỦ </NavLink>
            </button>
        </div>
    )
}
