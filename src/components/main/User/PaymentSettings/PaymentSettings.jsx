import React from "react";
import "./PaymentSettings.css";
const PaymentSettings = () => {
  return (
    <React.Fragment>
      <div class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">
                <span class="glyphicon glyphicon-star"></span>
                User\'s Name
              </h4>
            </div>
            <div class="modal-body">
              <form name="nameDialog" novalidate role="form">
                <div
                  class="form-group input-group-lg"
                  ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"
                >
                  <label class="control-label" for="username">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    id="username"
                    ng-model="user.name"
                    ng-keyup="hitEnter($event)"
                    required
                  />
                  <span class="help-block">
                    Enter your full name, first last.
                  </span>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" ng-click="cancel()">
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                ng-click="save()"
                ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentSettings;
