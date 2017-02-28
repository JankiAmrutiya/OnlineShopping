var React = require('react');
var CartActions = require('../actions/CartActions');

// Flux product view
var Product = React.createClass({

  // Add item to cart via Actions
  addToCart: function (event) {
    var id = this.props.selected.id;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    };
    CartActions.addToCart(id, update);
    CartActions.updateCartVisible(true);
  },

  // Select product variation via Actions
  selectVariant: function (event) {
    CartActions.selectProduct(event.target.value);
  },

  // Render product View
  render: function () {
    var ats = (this.props.selected.id in this.props.cartitems) ?
    this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity :
      this.props.selected.inventory;
    return (
      <div className="flux-product">
        <img src={'images/' + this.props.product.image}/>

        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>

          <p className="description">{this.props.product.description}</p>

          <p className="price">Price: ${this.props.selected.price}</p>
          <select onChange={this.selectVariant}>
            {this.props.product.map(function ( index) {
              return (
                <option key={index} value={index}>{product.type}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    );
  }

});

module.exports = Product;