import React, { Component }  from 'react';
const Items = [
    {
        url: 'https://eatstax.com/static/images/61/effee8b8-26b9-11e8-92e1-00155d05cd16-_0004_' +
        'chicken%20dark.jpg.480x270_q85_upscale.jpg',
        itemDescription: '1/4 CHICKEN (DARK MEAT)',
        amount: 79,
        subDescription: 'Leg and thigh'
    },
    {
        url: 'https://eatstax.com/static/images/61/effee8b8-26b9-11e8-92e1-00155d05cd16-_0004_' +
        'chicken%20dark.jpg.480x270_q85_upscale.jpg',
        itemDescription: ' CHICKEN (DARK MEAT)',
        amount: 179,
        subDescription: 'Leg and thigh'
    },
    {
        url: 'https://eatstax.com/static/images/61/effee8b8-26b9-11e8-92e1-00155d05cd16-_0004_' +
        'chicken%20dark.jpg.480x270_q85_upscale.jpg',
        itemDescription: '1/4 CHICKEN (DARK MEAT)',
        amount: 29,
        subDescription: 'Leg and thigh'
    },
    {
        url: 'https://eatstax.com/static/images/61/effee8b8-26b9-11e8-92e1-00155d05cd16-_0004_' +
        'chicken%20dark.jpg.480x270_q85_upscale.jpg',
        itemDescription: '1/4 CHICKEN (DARK MEAT)',
        amount: 39,
        subDescription: 'LegS and thigh'
    },
    {
        url: 'https://eatstax.com/static/images/61/effee8b8-26b9-11e8-92e1-00155d05cd16-_0004_' +
        'chicken%20dark.jpg.480x270_q85_upscale.jpg',
        itemDescription: '1/4 CHICKEN (DARK MEAT)',
        amount: 79,
        subDescription: 'LegS and thigh'
    }
];

export function ItemUrl() {

  const  listItems = Items.map((ItemsService) =>
  <ul>
    <li key={ItemsService}><img src={ItemsService.url}/></li>
    <li  key={ItemsService.toString()}>{ItemsService.itemDescription}</li>
    </ul>
    )
    return  (  listItems)
}

export default Items;