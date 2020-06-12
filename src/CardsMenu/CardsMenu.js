import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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

function CardsMenu() {
    return ( <MouseTracker/>)
}
export default CardsMenu;