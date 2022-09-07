import React from 'react';

export default class Nav extends React.Component {
    render () {
        return (
            <ul className="navbar">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="/">To-Do</a>
                </li>
                <li className="nav-item">
                    <a href="/">Calendar</a>
                </li>
                <li className="nav-item">
                    <a href="/">Extras</a>
                </li>

                
            </ul>
        )

    }
}