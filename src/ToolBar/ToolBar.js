import React from 'react';
import './ToolBar.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from '../Router/Router';

function Logo() {
    const element = (
        <div>
            <div className='LogoDiv '>
                <img src='https://eatstax.com/static/images/61/80bf6f04-efa1-11e6-a0ec-00155d05cd16-alapca-logo.png' className='logo' />
            </div>
            <div className='sideMenu navbar-toggle menuIcon '>
                <span className="icon-bar"> </span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>

            </div>
           <Navigation/>
            <div><hr className='toolbarLine' /></div>
        </div>

    );
    return element;
}
function Navigation() {
    function one(event){
       console.log(event.currentTarget)
       }
    const element = ( 
        <div className='listName'>
            <ul className=' nav '>
                <BrowserRouter>
                <li className='menuName' onClick={one}><a  href='modern-menu' onClick={one}>Modern Menu</a></li>
                <li className='menuName' onClick={one}><a  href='cards-menu'  >Cards Menu </a></li>
                <li className='menuName' onClick={one}><a href="standard-menu" onClick={one}>Standard Menu</a> </li>
                <li className='menuName' onClick={one}><a href="about" onClick={one}> About</a></li>
                </BrowserRouter>
            </ul>
        </div>
  )
    return element
}
function SideMenuButton() {
    const element = (
        <div>
        </div>
    );
    return element;
}

function ToolBar() {
    return (
        <div className='LogoClass'>
            <Logo />
        </div>
    )
}
export default ToolBar;