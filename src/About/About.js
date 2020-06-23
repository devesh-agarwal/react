import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { tableData } from '../ItemsService';    
import './About.css';
function About() {
    const list = tableData.map((data, i) => (
        <table className='table' style={{ width: '100%' }} key={i}>
            <tbody >
                <tr className='row' >
                    <td className='col' style={{ textAlign: 'right' }}>{data.leftSide}</td>
                    <td className='col' >{data.rightSide}</td>
                </tr>
            </tbody>
        </table>
    ))
    const element = (
        <div style={{ textAlign: 'center' }}>
            <h1 className="receipt-look text-info">
                <svg className="bi bi-shop" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zM3.12 1.175A.5.5 0 0 1 3.5 1h9a.5.5 0 0 1 .38.175l2.759 3.219A1.5 1.5 0 0 1 16 5.37v.13h-1v-.13a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.13H0v-.13a1.5 1.5 0 0 1 .361-.976l2.76-3.22z" />
                    <path d="M2.375 6.875c.76 0 1.375-.616 1.375-1.375h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 1 0 2.75 0h1a2.375 2.375 0 0 1-4.25 1.458 2.371 2.371 0 0 1-1.875.917A2.37 2.37 0 0 1 8 6.958a2.37 2.37 0 0 1-1.875.917 2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.5h1c0 .76.616 1.375 1.375 1.375z" />
                    <path d="M4.75 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    <path fillRule="evenodd" d="M2 7.846V7H1v.437c.291.207.632.35 1 .409zm-1 .737c.311.14.647.232 1 .271V15H1V8.583zm13 .271a3.354 3.354 0 0 0 1-.27V15h-1V8.854zm1-1.417c-.291.207-.632.35-1 .409V7h1v.437zM3 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V15H7v-5H4v5H3V9.5zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4zm1 .5v3h2v-3h-2z" />
                </svg>
            Alpaca Cary
            <img src="https://eatstax.com/static/images/61/80bf6f04-efa1-11e6-a0ec-00155d05cd16-alapca-logo.png" alt='Stroe Logo' style={{ width: 75, marginLeft: '8px', maxWidth: 80 }} />
            </h1>
            <br />
            <h3>
                <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg> 9575 Chapel Hill Road, Morrisville, NC 27560</h3>

        </div>
    );
    return (
        <Fragment>
            {element}
            <br />
            {list}
            
            
        </Fragment>);

}
export function CommonAbout() {
    const element = (
        <div style={{textAlign:'center', padding:'5px 20px 20px 20px', border:' 1px solid #ddd', boxShadow: '0 -1px 25px grey', margin: '15px'}}>
            <h3>
                About Alpaca Chicken
        </h3>
            <p style={{margin: '0 0 10px'}}>
                Alpaca Peruvian Charcoal Chicken is recognized for its unforgettable rotisserie chicken,
                cooked in a special marinade, then roasted in our imported oven. This oven uses natural
                wood charcoal and is the source of the mouth watering smells as you approach the restaurant.
                We pair our chicken with traditional South American sides – from plantains to yuca fries or
                black beans. Our all natural chickens are hormone free, local and free of all major FDA allergies
                (peanuts, tree nuts, eggs, fish, shellfish, milk, soy and gluten).
                Alpaca Peruvian Charcoal Chicken also does take-out as well as large parties and catering.

        </p>
        <p>© 2020 Alpaca Chicken. Made in NC</p>
        </div>
    )
    return element
}
export default About;