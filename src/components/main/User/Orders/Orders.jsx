import React from "react";
import "./Orders.css";
const Orders = () => {
  return (
    <React.Fragment>
      <div className="orders-component">
        <div className="orders-container">
          <div className="list-header">
            <div className="list-header-container">
              <div className="list-header-main">
                <div className="checkbox-wrap">
                  <label className="next-checkbox list-header-checkbox ">
                    <input type="checkbox" aria-checked="false" value="on" />
                  </label>
                  Select all
                  <span className="cart-products-count"> (0)</span>
                </div>
                <div className="list-header-operations">
                  <div className="btn-wrap automation-btn-delete">
                    <span className="lazada lazada-ic-Delete lazada-icon icon icon-delete"></span>
                    <span className="list-header-operation-text">Sort</span>
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
                    <img alt="" />
                  </a>
                </div>
                <div className="cart-product-desc">
                  <span className="order_id">Order ID : 3432434</span>
                  <span className="cart-product-name">Men's shirt</span>
                  <span
                    href=""
                    className="automation-link-from-sub-title-to-prod sku"
                  >
                    Size:M, Color Family:White
                    <div>Qty:2</div>
                    <div>Rs 1500</div>
                  </span>
                </div>
              </div>
              <div className="cart-item-middle">
                <div className="current-price">
                  <span className="delivery-status">Delivered</span>
                </div>
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
    </React.Fragment>
  );
};

export default Orders;
