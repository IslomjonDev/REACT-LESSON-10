import React, { Component } from 'react'
import './Header.css'
import logo from '../images/Logo 2.png'
export default class Header extends Component {

    constructor(){
        super()
        this.state = {
            count : -1 ,
            bool: false , 
            data : []
        }
    }
  render() {
    return (
      <>
        <header>
            <div className="navbar">
                <div className="navlogo">
                    <img src={logo} alt="" />
                    <div className="navlink">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <button>Booking Now</button>
            </div>
        </header>
      </>
    )
  }
}
