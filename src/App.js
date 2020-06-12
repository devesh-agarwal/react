import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import ToolBar from './ToolBar/ToolBar';
import Router from './Router/Router';

 export const ThemeContext = React.createContext('light');
function App() {

    
    return (
        <Fragment>
            <ThemeContext.Provider value="context">

            <div>

                <ToolBar/>
         
            </div>
            <br/><br/>
            <br/><br/>
            <div>
           <Header/>
            </div>
            <br/><br/>
           <Router/>
           </ThemeContext.Provider>

        </Fragment>
    )
}
    
export default App;
