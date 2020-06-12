import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Items from '../ItemsService'
import Header from '../Header/Header';
import './CardsMenu.css';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="https://eatstax.com/static/images/61/80bf6f04-efa1-11e6-a0ec-00155d05cd16-alapca-logo.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width : 50}} />
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
  }
class Menu extends React.Component{
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
    listItems = Items.map((ItemsService, i) => (
    
        <div className='row ItemDiv' key={i}>
     
                <div className='col-md-8'  >
                    <div className='row description'>
                        <div className='col-md'>{ItemsService.itemDescription}</div>
                        <div className='col-md'>{ItemsService.subDescription}</div>
                    </div>
                </div>
                <div className='col-md-4 amountButton'>
                    <div className='amount'>{ItemsService.amount}</div>
                    <button className='buyButton btn btn-warning' onClick={this.buy} value={JSON.stringify(Items[i])}  >Buy</button>
                </div>
            </div>
        )
        )
    
        render() {
            return (
                <Fragment>
                    <div className='cardMenu'>
                    {this.listItems}
                    {this.state.a}
                    </div>
                </Fragment>
            )
        }
    }
function CardsMenu() {
    return (
        <Fragment> 
            <Header/>
            <br/>
            <Menu/>

    </Fragment>)
}
export default CardsMenu;