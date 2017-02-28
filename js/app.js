var React= require('react');
var Render= require('react-dom').render;
var ProductData= require('./ProductData');
var ShoppingAPI = require('./utils/ShoppingAPI');
var ShoppingApp = require('./components/ShoppingApp.react.js');
ProductData.init();

ShoppingAPI.getProductData();

Render(
<ShoppingApp />,document.getElementById('flux-cart')
);
