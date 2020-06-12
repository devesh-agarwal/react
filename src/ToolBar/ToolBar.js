import React, { Fragment } from 'react';
import './ToolBar.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link } from 'react-router-dom';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
        this.expand = this.expand.bind(this);
    }
    show = 'none';
    expand() {
        this.setState(state => ({
            toggle: !state.toggle,
        }));
        if (this.state.toggle) {
            this.show = 'none';
        }
        else this.show = 'block';
    };
    render() {
        return (
            <Fragment>
                <div className='LogoDiv '>
                    <img src='https://eatstax.com/static/images/61/80bf6f04-efa1-11e6-a0ec-00155d05cd16-alapca-logo.png' className='logo' />
                </div>
                <div className='menuIcon' >
                    <div onClick={this.expand} className='sideMenu navbar-toggle'>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>
                    <div style={{display:this.show}}>
                     <SideMenuButton />
                    </div>
                </div>
                <Navigation classs ='listName'/>
                <div>
                    <hr className='toolbarLine' /></div>

            </Fragment>

        );
    }
}
function Navigation(props) {
    function one(event) {
        console.log(event.currentTarget)
    }
    const element = (
        <div className={props.classs}>
            <ul className=' nav '>
                <BrowserRouter>
                    <li className='menuName' onClick={one}><a href='modern-menu' onClick={one}>Modern Menu</a></li>
                    <li className='menuName' onClick={one}><a href='cards-menu'  >Cards Menu </a></li>
                    <li className='menuName' onClick={one}><a href="standard-menu" onClick={one}>Standard Menu</a> </li>
                    <li className='menuName' onClick={one}><a href="about" onClick={one}> About</a></li>
                </BrowserRouter>
            </ul>
            <ul style={{ float: 'right' }}>
                <li><svg className="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                </li>
                <li><svg className="bi bi-cart2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                </li>
            </ul>
        </div>
    )
    return element
}

class SideMenuButton extends React.Component {
    render() {
        return (
            <Fragment>
                <Navigation classs=''  />
            </Fragment>
        )
    }
}

function ToolBar() {
    return (
        <div className='LogoClass'>
            <Logo />
        </div>
    )
}
export default ToolBar;