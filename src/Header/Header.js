import React, { Fragment, useContext } from 'react';
import './Header.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast'
import { ThemeContext } from '../App';
import { Portal } from 'react-portal';
import { PortalWithState } from 'react-portal';

class MainHeader extends React.Component {
    element =
        <div className='col-md-4 MainHeaderPadding '>
            <div className='MainHeaderElement'>
                <div className='MainHeader'>
                    <p>{console.log(ThemeContext)}We are closed</p>
                </div>
                <div className='mainHeaderImageDiv'>
                    <img src='https://eatstax.com/static/front/images/delivery/closed.svg' className='mainHeaderImage' />
                </div>
            </div>
        </div>
    render() {
        return this.element;
    }
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
                    <input className="form-control" aria-label="With textarea" placeholder='PickUp Name' type='text' ref={this.pickupName} onChange={this.submit} />
                    <input style={{ marginTop: '3px' }} className="form-control" aria-label="With textarea" placeholder='Vehicle' type='text' ref={this.vehicle} onChange={this.submit} />
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
                    <textarea className="form-control" aria-label="With textarea" placeholder='Address' type='text' ref={this.address} onChange={this.submit}></textarea>
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

class SubHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: 'none', a: 'SubHeaderLabel col', b: 'SubHeaderLabel col', c: 'SubHeaderLabel col', expand: 'abc' };
        this.handleClick = this.handleClick.bind(this);
    }

    openSnackBar() {
        this.setState({ isActive: 'block' }, () => {
            setTimeout(() => {
                this.setState({ isActive: 'none' });
            }, 3000);
        });
    }
    handleClick(event) {
        this.setState(() => ({
            a: 'SubHeaderLabel col',
            b: 'SubHeaderLabel col',
            c: 'SubHeaderLabel col',
            expand: 'take away'
        }));
        if (event.currentTarget.id === 'a') {
            this.setState(() => ({
                a: 'SubHeaderLabelToggle col',
                expand: 'take away'
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
        const oneq = this.props.backgroun;
        return (
            <Fragment>
                <Portal node={document && document.getElementById('snackbar')}>
                    <div className='snackbar'><span>Order Type updated <svg style={{ top: -3,position: 'relative'}} className="bi bi-bag" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z" />
                        <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                    </svg>.</span><br /> Order type is successfully changed to {this.state.expand}.
                    </div>
                </Portal>
                <div className='col-md-8'>
                    {console.log(oneq)}
                    <div className='row SubHeaderDiv headerDiv'  >
                        <label className='noMargin'>

                            <div id='a' onClick={this.handleClick} className={this.state.a}>
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
                </div> {console.log(window.screen)}
                <Expandable expand={this.state.expand} />
            </Fragment>
        );
    }
}


const HigherOrderComponent = (SubHeader) => {
    class HOC extends React.Component {
        render() {
            return <SubHeader />;
        }
    }
    return HOC;
};
function Tost() {
    const element = (<Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>);

    const ele =
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <strong className="mr-auto">Title</strong>
                <small>5 mins ago</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toast-body">
                Content... this is a toast message.
  </div>
        </div>
    return element;
}
function PortalDemo() {
    const element = <Tost />
    const ele1 = <Header />
    return ReactDOM.createPortal(
        element,
        ele1
    )
}
function Port() {
    const element = <div id='snackbar'>
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                    <button onClick={openPortal}>
                        Open Portal
                    </button>
                    {portal(
                        <p>
                            This is more advanced Portal. It handles its own state.{' '}
                            <button onClick={closePortal}>Close me!</button>, hit ESC or
                           click outside of me.
                        </p>
                    )}
                </React.Fragment>
            )}
        </PortalWithState>
    </div>
    return element;
}


function Header() {
    let expand = 'null';
    let oneq = 'headerDiv'
    if (window.screen.availWidth >= 760) {
        expand = <div style={{ overflow: 'hidden' }}>
            <img style={{ width: '100%' }} src='https://www.rd.com/wp-content/uploads/2018/12/shutterstock_1161597079.jpg' />
        </div>
    } else expand = null;
    return (
        <Fragment>
            {expand}
            {/* <Port /> */}
            <div id='snackbar' ></div>
            <div className='row marginZero ' >
                <MainHeader />
                <SubHeader backgroun={oneq} />
                {/* {HigherOrderComponent()} */}
            </div>
        </Fragment>
    )
}

export default Header;