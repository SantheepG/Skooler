import React from "react";
import "./Orders.css";
import { BsDashSquare, BsTrash3, BsPlusSquare } from "react-icons/bs";
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
          <div className="ordered-items">
            <div className="ordered-item">
              <div className="item-header">
                <div className="order-info">
                  <div className="order-id">Order ID : </div>
                  <div className="ordered-datetime">Placed on: </div>
                </div>
                <div className="order-view">
                  <span>
                    <a href="#" className="user-section-btn order-invoice-btn">
                      Invoice
                    </a>
                  </span>
                  <span></span>
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

                <div class="">
                  <span className="delivery-status-outer">status :</span>
                  <span className="delivery-status">Pending</span>
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
            <div className="ordered-item">
              <div className="item-header">
                <div className="order-info">
                  <div className="order-id">
                    Order ID :{" "}
                    <span className="ordered-datetime-inner">dfsdfd</span>
                  </div>
                  <div className="ordered-datetime">
                    Placed on{" "}
                    <span className="ordered-datetime-inner">
                      17 Sep 2023 12:53:34
                    </span>
                  </div>
                </div>
                <div className="order-view">
                  <span>
                    <a href="#" className="user-section-btn order-invoice-btn">
                      Invoice
                    </a>
                  </span>
                  <span></span>
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

                <div class="">
                  <span className="delivery-status-outer">status :</span>
                  <span className="delivery-status">Pending</span>
                </div>

                <div class="item-column product-price">
                  <span className="currency">$</span>
                  <span>549</span>
                </div>

                <div class="item-column end-column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Orders;
