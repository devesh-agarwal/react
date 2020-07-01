import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import ToolBar from './ToolBar/ToolBar';
import Router from './Router/Router';
import {CommonAbout} from './About/About';
import { Provider } from 'react-redux'
export const ThemeContext = React.createContext('light');
function App() {
    var d = new Date();
    
    
    return (
        <Fragment>
            <ThemeContext.Provider value="context">
                <ToolBar/>   
            <br/><br/>
            <br/><br/>
           <Router/>
           </ThemeContext.Provider>
           <br/>
            <CommonAbout />
            {JSON.stringify(d)}
        </Fragment>
    )
}
    
export default App;
