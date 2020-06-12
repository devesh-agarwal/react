import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import './ModernMenu.css';
import 'bootstrap/dist/css/bootstrap.css';
import Items from '../ItemsService'


export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true ,a:0};
        this.buy = this.buy.bind(this);
        }
    selectedItem = React.createRef();
    itemKey;
     buy= (e) => {
       let  b = JSON.parse(e.currentTarget.value).amount;
        this.setState(() => ({
            a : this.state.a + b
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
                <button className='buyButton btn btn-warning' onClick={this.buy} value={JSON.stringify(this.props.itemName[i])} ref={this.selectedItem}>Buy</button>
            </div>
        </div>
    )
    )

    render() {
        return (
            <Fragment>
                {this.listItems}
                {this.state.a}
            </Fragment>
        )
    }
}
class S extends React.Component{
    constructor(props) {
        super(props);
    }
     el = document.createElement('div');
    render(){return ReactDOM.createPortal( this.props.child, this.el );
}
}
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.one = this.one.bind(this);
        this.state = { show: true, upArrow : <svg style={{float:'right'}} className="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
      </svg>, downArrow : <svg style={{float:'right'}} className="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg> }
    }
    show1 = 'block'
    arrow = <svg style={{float:'right'}} className="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
  </svg>;
    one() {
        this.setState(state => ({
            show : !state.show,
            
        }));
        if (this.state.show) {
            this.show1 = 'none';
            this.arrow = this.state.downArrow;
           
        }
        else {
            this.show1 = 'block';
            this.arrow = this.state.upArrow;
    }    }

    render() {
        return (
            <Fragment>
                <div className='menuNameClass' onClick={this.one}>
        <p className='popularMenu'>{this.props.name}{this.arrow}</p>
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
<React.StrictMode>
            <Menu name='Popular Menu' itemName={Items} />
            <Menu name='Monday' itemName={Items}  />
           <S style={{ position: 'relative', left: '50%', }}><Menu name='Popular Menu' itemName={Items} /></S>         
           </React.StrictMode>
      </ThemeContext.Provider>
        </Fragment>
    )
}
export default ModernMenu;