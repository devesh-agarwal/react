import React, { Fragment,useContext } from 'react';
import './Header.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {ThemeContext} from '../App';    
function MainHeader() {
    const element = 
     <div className='col-md-4 MainHeaderPadding headerDiv'>
        <div className='MainHeaderElement'>
            <div className='MainHeader'>
<p>{console.log(ThemeContext)}We are closed</p>
            </div>
            <div className='mainHeaderImageDiv'>
                <img src='https://eatstax.com/static/front/images/delivery/closed.svg' className='mainHeaderImage' />
            </div>
        </div>
        </div>
    return element;
}

class ExpandCurbSide extends React.Component {
        constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);    
    }

    pickupName = React.createRef();
    vehicle = React.createRef();
    submit(event) {

        console.log(this.pickupName.current.value);
        console.log(this.vehicle.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <h3 >CurbSide</h3>
                <form onSubmit={this.submit}>
                <input className="form-control" aria-label="With textarea"  placeholder='PickUp Name' type= 'text' ref={this.pickupName} onChange={this.submit}/>
                <input style={{marginTop :'3px'}} className="form-control" aria-label="With textarea" placeholder='Vehicle' type= 'text' ref={this.vehicle} onChange={this.submit}/>               
                </form>
        
            </Fragment>
        )
    }
}

class ExpandDelivery extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    address = React.createRef();
     submit(event) {
         console.log(this.address.current.value);
         event.preventDefault();
     }
    render() {
              return (
            <Fragment>
                <form onSubmit={this.submit}>
              <h3 className={ThemeContext._currentValue}>Delivery{console.log(ThemeContext)}  </h3>
                <textarea className="form-control" aria-label="With textarea" placeholder='Address' type= 'text' ref={this.address} onChange={this.submit}></textarea>
                </form>    
            </Fragment>
        )
    }
}

function Expandable(props) {
    let one;
    let expand = props.expand;
    if (expand === 'curbside') {
        one = <ExpandCurbSide />
    }
    else if (expand === 'delivery') {
        one = <ExpandDelivery />
    }
    else one = null;

    return (
        <div className='expandable'>
            {one}
        </div>
    )
}


function SubHeader() {
    class SubHeader extends React.Component {

        constructor(props) {
            super(props);
            this.state = { a: 'SubHeaderLabel col', b: 'SubHeaderLabel col', c: 'SubHeaderLabel col', expand: 'abc' };
            this.handleClick = this.handleClick.bind(this);
            
        }

        handleClick(event) {
            this.setState(() => ({
                a: 'SubHeaderLabel col',
                b: 'SubHeaderLabel col',
                c: 'SubHeaderLabel col',
                expand: 'abc'
            }));
            if (event.currentTarget.id === 'a') {
                this.setState(() => ({
                    a: 'SubHeaderLabelToggle col',
                    expand: 'abc'
                }));
            } if (event.currentTarget.id === 'b') {
                this.setState(() => ({
                    b: 'SubHeaderLabelToggle col',
                    expand: 'curbside'
                }));
            } if (event.currentTarget.id === 'c') {
                this.setState(() => ({
                    c: 'SubHeaderLabelToggle col',
                    expand: 'delivery'
                }));
            }

        }

        render() {
            return (
                <Fragment>
                    <div  className='col-md-8'>
                        <div className='row SubHeaderDiv headerDiv' >
                        <label className='noMargin'>
                            <div id='a' onClick={(e) => this.handleClick(e)} className={this.state.a}>
                                <p>Takeout</p>
                                <img src="https://eatstax.com/static/front/images/delivery/Take_away.png" />
                            </div>
                        </label>
                        <label>
                            <div onClick={this.handleClick} id='b' className={this.state.b}>
                                <p>Curbside</p>
                                <img src="https://eatstax.com/static/front/images/delivery/Curb_Side.png" />
                            </div>
                        </label>
                        <label>
                            <div onClick={this.handleClick} id='c' className={this.state.c}>
                                <p>Delivery</p>
                                <img src="https://eatstax.com/static/front/images/delivery/Delivery.png" />
                            </div>
                        </label>
                    </div>
                    </div>  
                    <Expandable  expand ={this.state.expand}/>
                </Fragment>
            );
        }
    }

    return (<SubHeader />);
}



function Header() {
    let expand = 'delivery';
    return (
        <Fragment>
        <div className='row marginZero '>
          <MainHeader />
          <SubHeader />
        </div>
        </Fragment>
    )
}

export default Header;