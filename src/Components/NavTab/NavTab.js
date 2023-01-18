import React from 'react'
import { Link } from 'react-router-dom'


export default function NavTab() {
    return (
        <nav className="nav nav_tabs border-dark border-bottom">
            <Link className="nav-link fs-4 text-center text-dark fw-bold p-3 border-end border-dark active" aria-current="page" to="#">Running Configuration</Link>
            <Link className="nav-link fs-4 text-center text-dark fw-bold p-3 border-end border-dark" to="#">Manage Configurations</Link>
            <Link className="nav-link fs-4 text-center text-dark fw-bold p-3 border-end border-dark" to="#">Configuration</Link>
        </nav>
    )
}
