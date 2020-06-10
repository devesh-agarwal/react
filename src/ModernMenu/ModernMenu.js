import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import './ModernMenu.css';
import 'bootstrap/dist/css/bootstrap.css';
import Items from '../ItemsService'


export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true }
    }
  
   

    selectedItem = React.createRef();
    itemKey;
    buy(e) {
        console.log(JSON.parse(e.currentTarget.value));
        console.log(ThemeContext._currentValue);
        console.log(this.context);
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
                <button className='buyButton btn btn-warning' onClick={this.buy} value={JSON.stringify(this.props.itemName[i])} ref={this.selectedItem}>Buy</button>
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
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.one = this.one.bind(this)
        this.state = { show: true }
    }
    show1 = 'block'
    one() {
        this.setState((state) => ({
            show : !state.show
        }));
        if (this.state.show) {
            this.show1 = 'none'
        }
        else this.show1 = 'block'
    }
    render() {
        return (
            <Fragment>
                <div className='menuNameClass' onClick={this.one}>
                    <p className='popularMenu'>{this.props.name}</p>
                    </div>
                    <div style={{ display: this.show1 }}>
                    <ItemList className='menu'   itemName={Items}/>
                </div>
            </Fragment>
        )
    }
}
export const ThemeContext = React.createContext({...Items});
function ModernMenu() {

    return (
        <Fragment>
            <ThemeContext.Provider >

            <Menu name='Popular Menu' itemName={Items} />
            <Menu name='Monday' itemName={Items} />
         
      </ThemeContext.Provider>
        </Fragment>
    )
}
export default ModernMenu;