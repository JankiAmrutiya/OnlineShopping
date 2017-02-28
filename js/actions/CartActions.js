var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

// Define action methods
var CartActions = {

  // Receive inital product data
  receiveProduct: function (data) {
    AppDispatcher.handleAction({
      actionType: CartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function (index) {
    AppDispatcher.handleAction({
      actionType: CartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  // Add item to cart
  addToCart: function (sku, update) {
    AppDispatcher.handleAction({
      actionType: CartConstants.CART_ADD,
      id: id,
      update: update
    })
  },

  // Remove item from cart
  removeFromCart: function (sku) {
    AppDispatcher.handleAction({
      actionType: CartConstants.CART_REMOVE,
      id: id
    })
  },

  // Update cart visibility status
  updateCartVisible: function (cartVisible) {
    AppDispatcher.handleAction({
      actionType: CartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }

};

module.exports = CartActions;
