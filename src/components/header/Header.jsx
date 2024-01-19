import React from 'react'
import { links } from '../../Data'
import './header.css'

export default function Header() {
    
    return (
        <header className='header'>
            <nav className='nav bar'>
                <a href='/' className='nav_storename'>
                    Brew Bliss Coffee
                </a>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        {links.map(({name, path}, index) => {
                            return (
                                <li className="nav_item" key = {index}>
                                    <a href={path} className="nav_link">
                                        {name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}