import React, { Component } from 'react'
import logo from '../images/Logo 2.png'
import './Footer.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
            <div className="footer-card">
                <img src={logo} alt="" />
                <p>www.company name.com</p>
                <p>companyname@gmail.com</p>
                <p>Phone: +7 485-118-03-25</p>
            </div>
            <div className="footer-card">
                <h3>Home</h3>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
                <p>Web Design</p>
            </div>
            <div className="footer-card">
                <h3>Menu</h3>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <p>UI & UX Design</p>
                <p>Web Design</p>
            </div>
            <div className="footer-card">
                <h3>Company</h3>
                <p>Landingpage</p>
                <p>Documentation</p>
                <p>Referral Program</p>
                <span>
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </span>
            </div>
        </footer>
      </>
    )
  }
}
