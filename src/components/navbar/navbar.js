import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
    constructor() {
        super() 
        this.state ={
            menu: false
        }
    }

    openMenu =() => {
        this.setState({menu: !this.state.menu})
    }
    render() {
        return (
            <div>
                <nav className ='navbar'>
                <h1> Start Bootstrap</h1>

                <div className ='navbar-icon' onClick={this.openMenu}>
                
                  MENU &#9776;
                </div>
                
                <ul className = 'navbar-items'>    
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
            
                </ul>
            
                </nav>

                <ul className={this.state.menu ? 
                'menu slide'
                :
                'menu'
                }>
                    <li> SERVICES </li>
                    <li> PORTFOLIO </li>
                    <li> ABOUT </li>
                    <li> TEAM </li>
                    <li> CONTACT </li>

                </ul>
            
                
            </div>
        )
    }
}
