var React = require('react');
var CartStore= require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.react.js');
var Cart = require('./Cart.react.js'); 

function getCartState(){
    return{
        product: ProductStore.getProductData(),
        selectedProduct: ProductStore.getSelected(),
        cartItems: CartStore.getCartItems,
        cartVisible: CartStore.getCartVisible(),
        cartTotal: CartStore.getCartVisible()
    };
}

var ShoppingApp = React.createClass({
    getInititalState:function() {
        return getCartState();
    },
    
    componentDidMount: function(){
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function(){
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },
    
    render: function(){
        return(
        <div className="flux-cart-app">
                    <Cart />
        <Product />
        </div>
        );
    },
     _onChange: function () {
    this.setState(getCartState());
  }
});

module.exports= ShoppingApp;