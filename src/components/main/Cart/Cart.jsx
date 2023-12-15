import React from "react";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import img1 from "../../../assets/sample-product.jpeg";
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
              <div className="container">
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
                <div className="cart-item">
                  <div className="cart-item-inner">
                    <div className="cart-item-left">
                      <div className="img-wrap">
                        <a href="">
                          <img src={img1} alt="" />
                        </a>
                      </div>
                      <div className="cart-product-desc">
                        <a href="" className="cart-product-name">
                          next-input next-input-single next-input-medium
                          next-number-picker-input
                        </a>
                        <a
                          href=""
                          className="automation-link-from-sub-title-to-prod sku"
                        >
                          Sunco, Color Family:White
                        </a>
                      </div>
                    </div>
                    <div className="cart-item-middle">
                      <div className="current-price">
                        <span className="currency">Rs </span>
                        <span className="price-int">1500</span>
                      </div>
                      <div className="origin-price">Rs 4443</div>
                      <div className="promotion-ratio"></div>
                    </div>
                    <div className="cart-item-right">
                      <div className="quantity automation-item-quantity">
                        <div className="next-number-picker next-number-picker-inline cart-item-number-picker -down-disabled">
                          <div className="next-number-picker-handler-wrap">
                            <a className="next-number-picker-handler next-number-picker-handler-up ">
                              <span
                                className="next-number-picker-handler-up-inner"
                                unselectable="unselectable"
                              >
                                <i className="next-icon next-icon-add next-icon-medium"></i>
                              </span>
                            </a>
                            <a className="next-number-picker-handler next-number-picker-handler-up ">
                              <span
                                className="next-number-picker-handler-up-inner"
                                unselectable="unselectable"
                              >
                                <i className="next-icon next-icon-minus next-icon-medium"></i>
                              </span>
                            </a>
                          </div>
                          <div className="next-number-picker-input-wrap">
                            <span className="next-input next-input-single next-input-medium next-number-picker-input">
                              <input
                                type="text"
                                step={1}
                                min={1}
                                max={5}
                                value={1}
                                autoComplete="off"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
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
