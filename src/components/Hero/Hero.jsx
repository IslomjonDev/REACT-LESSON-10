import React, { Component } from 'react'
import './Hero.css'
import heroimg from "../images/hero.jpg"
import ft1 from '../images/ft1.png'
import ft2 from '../images/ft2.png'
import ft3 from '../images/ft3.png'
import about from '../images/about.png'
import menu1 from '../images/menu1.png'
import menu2 from '../images/menu2.png'
import menu3 from '../images/menu3.png'
import menu4 from '../images/menu4.png'
import menu5 from '../images/menu5.png'
import menu6 from '../images/menu6.png'
import stars from '../images/stars.png'
import sister from '../images/sister.png'

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="hero">
            <div className="hero-left">
                <h1>Making time a good time by making food the good food.</h1>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                <span>
                <button className='btn-left'>Order Now</button>
                <button className='btn-right'>Food Details</button>
                </span>
            </div>
            <div className="hero-right">
                <img src={heroimg} alt="" />
            </div>
        </div>
        <div className="features">
            <div className="features-title">
                <h2>Features</h2>
                <h1>Food with a New Passion</h1>
            </div>
            <div className="features-cards">
                <div className="features-card">
                    <img src={ft1} alt="" />
                    <h2>Quality Food</h2>
                    <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className="features-card">
                    <img src={ft2} alt="" />
                    <h2>Food Delivery</h2>
                    <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
                <div className="features-card">
                    <img src={ft3} alt="" />
                    <h2>Super Taste</h2>
                    <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="about-left">
                <img src={about} alt="" />
            </div>
            <div className="about-right">
                <h3>ABOUT US</h3>
                <h1>Food Stalls with Persons but  to  Product marketing plane catlogues etc to. </h1>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also  equipment  make your marketing plane Effective.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="menu">
            <div className="menu-title">
                <h3>Menu</h3>
                <h1>Food Full of treaty Love</h1>
                <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers.</p>
            </div>
            <div className="menu-cards">
                <div className="menu-card">
                    <img src={menu1} alt="" />
                     <div className="menu-parag">
                     <span>
                        <h2>Vegie Muffen</h2>
                        <h2>16$</h2>
                    </span>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <span>
                        <button>+</button>
                        <img src={stars} alt="" />
                    </span>
                     </div>
                </div>
                <div className="menu-card">
                    <img src={menu2} alt="" />
                     <div className="menu-parag">
                     <span>
                        <h2>Salads</h2>
                        <h2>12$</h2>
                    </span>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <span>
                        <button>+</button>
                        <img src={stars} alt="" />
                    </span>
                     </div>
                </div>
                <div className="menu-card">
                    <img src={menu3} alt="" />
                     <div className="menu-parag">
                     <span>
                        <h2>Burger</h2>
                        <h2>10$</h2>
                    </span>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <span>
                        <button>+</button>
                        <img src={stars} alt="" />
                    </span>
                     </div>
                </div>
                <div className="menu-card">
                    <img src={menu4} alt="" />
                     <div className="menu-parag">
                     <span>
                        <h2>Delmonico Steak dish</h2>
                        <h2>14$</h2>
                    </span>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <span>
                        <button>+</button>
                        <img src={stars} alt="" />
                    </span>
                     </div>
                </div>
                <div className="menu-card">
                    <img src={menu5} alt="" />
                     <div className="menu-parag">
                     <span>
                        <h2>Egg Masala</h2>
                        <h2>9$</h2>
                    </span>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <span>
                        <button>+</button>
                        <img src={stars} alt="" />
                    </span>
                     </div>
                </div>
                <div className="menu-card">
                    <img src={menu6} alt="" />
                     <div className="menu-parag">
                     <span>
                        <h2>Peach Melba dish</h2>
                        <h2>15$</h2>
                    </span>
                    <p>There are many things are needed to start the Fast Food Business.</p>
                    <span>
                        <button>+</button>
                        <img src={stars} alt="" />
                    </span>
                     </div>
                </div>
            </div>
            <button className='menu-btn'>Learn More</button>
        </div>
        <div className="title">
            <div className="title-title">
                <h3>Testimonial</h3>
                <h1>Making Food great again and again</h1>
                <p>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
            </div>
            <div className="title-card">
                <img src={sister} alt="" />
                <p>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                <img src={stars} alt="" />
                <h4>Augusta W. Reynoso</h4>
                <h5>UI&UX DeSIGNER</h5>
            </div>
        </div>
        <div className="contact">
            <div className="contact-title">
                <h3>CONTACT</h3>
                <h1>Food Stalls with Persons but also specialized equipment, Skills to manage.</h1>
                <form action="">
                    <input type="text" placeholder='Enter your massage' />
                    <button>Send</button>
                </form>
            </div>
        </div>
      </>
    )
  }
}
