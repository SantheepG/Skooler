import React from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import { BsDashSquare, BsTrash3, BsPlusSquare } from "react-icons/bs";
const Cart = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          {" "}
          <div className="cart-content">
            <div className="left-column">
              <div className="cart-container">
                <div className="list-header">
                  <div className="list-header-container">
                    <div className="list-header-main">
                      <div className="checkbox-wrap">
                        <label className="next-checkbox list-header-checkbox ">
                          <input
                            type="checkbox"
                            aria-checked="false"
                            value="on"
                          />
                        </label>
                        Select all
                        <span className="cart-products-count"> (0)</span>
                      </div>
                      <div className="list-header-operations">
                        <div className="btn-wrap automation-btn-delete">
                          <span className="lazada lazada-ic-Delete lazada-icon icon icon-delete"></span>
                          <span className="list-header-operation-text">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shopping-cart">
                  <div class="item">
                    <div class="item-column image">
                      <img alt="img" />
                    </div>

                    <div class="item-column description">
                      <span>Common P</span>
                      <span>Bball High</span>
                      <span>White</span>
                    </div>

                    <div class="item-column quantity">
                      <span>
                        <a href="#" className="decrease-btn">
                          <BsDashSquare className="decrease-btn" />
                        </a>
                      </span>
                      <span>
                        <input type="text" name="name" value="1" />
                      </span>
                      <span>
                        <a href="#" className="increase-btn">
                          <BsPlusSquare className="increase-btn" />
                        </a>
                      </span>
                    </div>

                    <div class="item-column product-price">
                      <span className="currency">$</span>
                      <span>549</span>
                    </div>

                    <div class="item-column end-column">
                      <span>
                        <BsTrash3 class="delete-btn" />
                      </span>
                    </div>
                  </div>
                  <div class="item">
                    <div class="item-column image">
                      <img alt="img" />
                    </div>

                    <div class="item-column description">
                      <span>Common P</span>
                      <span>Bball High</span>
                      <span>White</span>
                    </div>

                    <div class="item-column quantity">
                      <span>
                        <a href="#" className="decrease-btn">
                          <BsDashSquare className="decrease-btn" />
                        </a>
                      </span>
                      <span>
                        <input type="text" name="name" value="1" />
                      </span>
                      <span>
                        <a href="#" className="increase-btn">
                          <BsPlusSquare className="increase-btn" />
                        </a>
                      </span>
                    </div>

                    <div class="item-column product-price">
                      <span className="currency">$</span>
                      <span>549</span>
                    </div>

                    <div class="item-column end-column">
                      <span>
                        <BsTrash3 class="delete-btn" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="summary-section">
                <div className="summary-section-heading">Order summary</div>
                <div className="summary-section-content">
                  <div className="checkout-summary">
                    <div className="checkout-summary-rows">
                      <div className="checkout-summary-row">
                        <div className="checkout-summary-main">
                          <div className="checkout-summary-label">Subtotal</div>
                          <div className="checkout-summary-value">
                            <span className="checkout-summary-noline-value">
                              <span className="currency">Rs </span>0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-summary-row">
                        <div className="checkout-summary-main">
                          <div className="checkout-summary-label">
                            Shipping fee
                          </div>
                          <div className="checkout-summary-value">
                            <span className="checkout-summary-noline-value">
                              <span className="currency">Rs </span>0
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="checkout-summary-row">
                        <div className="checkout-summary-main">
                          <div className="checkout-summary-label">Discount</div>
                          <div className="checkout-summary-value">
                            <span className="checkout-summary-noline-value">
                              <span className="currency">Rs </span>0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="voucher-input">
                      <div className="voucher-input-inner">
                        <div className="voucher-input-col">
                          <span className="voucher-input-container">
                            <input
                              id="automation-voucher-input"
                              type="text"
                              placeholder="Enter your voucher code"
                              className="voucher-inputfield"
                            ></input>
                          </span>
                        </div>
                        <div className="voucher-input-col">
                          <button
                            id="automation-voucher-input-button"
                            className="next-btn next-btn-normal next-btn-large voucher-input-button"
                            type="button"
                          >
                            APPLY
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-order-total">
                      <div className="checkout-order-total-row">
                        <div className="checkout-order-total-title">Total</div>
                        <div className="checkout-order-total-fee">
                          <span className="currency">Rs </span> 0
                        </div>
                      </div>
                      <button class="checkout-order-total-button ">
                        PROCEED TO CHECKOUT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cart;
