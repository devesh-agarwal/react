import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './ModernMenu.css';
import 'bootstrap/dist/css/bootstrap.css';
import Items from '../ItemsService'
import { PortalWithState, Portal } from 'react-portal';
import Header from '../Header/Header';

export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true, totalAmount: 0 };
        this.buy = this.buy.bind(this);
    }
    selectedItem = React.createRef();
    itemKey;
    buy = (e) => {
        let b = JSON.parse(e.currentTarget.value).amount;
        this.setState(() => ({
            totalAmount: this.state.totalAmount + b
        }));
    }
    iteme = ThemeContext._currentValue;
    listItems = this.props.itemName.map((ItemsService, i) => (

        <div className='row ItemDiv' key={i}>
            <div className='col-md-4 itemImage' ><img src={ItemsService.url} /></div>
            <div className='col-md-6'  >
                <div className='row description'>
                    <div className='col-md'>{ItemsService.itemDescription}</div>
                    <div className='col-md'>{ItemsService.subDescription}</div>
                </div>
            </div>
            <div className='col-md-2 amountButton'>
                <div className='amount'>{ItemsService.amount}</div>
                <PortalWithState closeOnEsc>
                    {({ openPortal, closePortal, isOpen, portal }) => (
                        <Fragment>
                            <button className='buyButton btn btn-warning' onClick={openPortal} value={JSON.stringify(this.props.itemName[i])} ref={this.selectedItem}>Buy</button>
                            {portal(
                                <Dialog keya={i} />
                            )}
                        </Fragment>
                    )}
                </PortalWithState>
            </div>
        </div>
    )
    )

    render() {
        return (
            <Fragment>
                {this.listItems}
            </Fragment>
        )
    }
}

function Dialog(props) {
    const amount = Items[props.keya].amount;
    const itemDescription = Items[props.keya].itemDescription;
    const subDescription = Items[props.keya].subDescription;
    console.log(props.keya);
    let b = 0;
    const [totalAmount, setTotalAmount] = useState(amount);
    const [count, setCount] = useState(1);
    const [disableButton, setDisableButton] = useState(false);

    function addItem() {
        b = totalAmount;
        console.log(totalAmount);
        setTotalAmount(amount + b);
        setCount(count + 1);
    }
    useEffect(() => {
        if (count < 1) {
            setDisableButton(true);
        } else setDisableButton(false);

    })
    function removeItem() {
        b = totalAmount;
        console.log(totalAmount);
        setTotalAmount(b - amount);
        setCount(count - 1);
    }

    return (
        <Portal closeOnEsc={true} closeOnOutsideClickc={true} closePortal node={document.getElementById('openDialog')}>
            <div className='row dialog'>
                <div className='col-md-5' style={{border:'1px solid'}}>
                    <h1>{subDescription}</h1>
                    <h3>{itemDescription}</h3>
                </div>
                
                <div className='col-md-4' style={{border:'1px solid'}}>
                    <p>Price: {amount}</p>
                    <p>Items: 
                        <button className=' ' style={{ marginLeft: 5,marginRight: 5, color: 'black' }} disabled={disableButton} onClick={removeItem}>-</button>
                        {count}
                        <button className='  ' style={{ marginLeft: 5, color: 'black' }} onClick={addItem}>+</button>
                    </p>
                </div>
                <div className='col-md-2' style={{border:'1px solid'}}>
                    <p>Total Amount: {totalAmount}</p>
                    <button className=' btn btn-warning' >Add to Cart</button>
                </div>
            </div>
        </Portal>
    )
}



//const modalRoot = document.getElementById('modal-root');
class S extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');

    }
    componentDidMount() {
        //modalRoot.appendChild(this.el);
    }


    render() {
        return ReactDOM.createPortal(this.props.child, this.el);
    }
}



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.one = this.one.bind(this);
        this.state = {
            show: true, upArrow: <svg style={{ float: 'right' }} className="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>, downArrow: <svg style={{ float: 'right' }} className="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        }
    }
    show1 = 'block'
    arrow = <svg style={{ float: 'right' }} className="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>;
    one() {
        this.setState(state => ({
            show: !state.show,

        }));
        if (this.state.show) {
            this.show1 = 'none';
            this.arrow = this.state.downArrow;

        }
        else {
            this.show1 = 'block';
            this.arrow = this.state.upArrow;
        }
    }

    render() {
        return (
            <Fragment>
                <div className='menuNameClass' onClick={this.one}>
                    <p className='popularMenu'>{this.props.name}{this.arrow}</p>
                </div>
                <div style={{ display: this.show1 }}>
                    <ItemList className='menu' itemName={Items} />
                </div>
            </Fragment>
        )
    }
}


function Port() {
    const element =
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                    <button onClick={openPortal}>Open Portal </button>
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
    return element

}

export const ThemeContext = React.createContext({ ...Items });


function ModernMenu() {
    return (
        <Fragment>
            <Header />
            <div style={{ width: '100%' }}>
                <div id='openDialog' style={{
                    position: 'fixed', zIndex: 10, bottom: 120, width: 'inherit',
                    height: 'inherit'
                }}>
                </div>
            </div>

            <ThemeContext.Provider >
                <React.StrictMode>
                    <Menu id='modal-root' name='Popular Menu' itemName={Items} />
                    <Menu name='Monday' itemName={Items} />
                    <S style={{ position: 'relative', left: '50%', }}><Menu name='Popular Menu' itemName={Items} /></S>
                </React.StrictMode>
            </ThemeContext.Provider>
        </Fragment>
    )
}
export default ModernMenu;