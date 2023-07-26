import React, { Component } from "react";

function Contact() {
  return (
    <section id="contact" className="section section-contact ">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-panel green white-text center">
              <i className="material-icons medium">email</i>
              <h5>AcquireJob</h5>
              <p>
                We haven't created any email address yet and we dont have any
                office.
              </p>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card-panel grey lighten-3">
              <h5>Please fill out this form</h5>
              <form>
                <div className="input-field">
                  <input type="text" id="name" className="validate" />
                  <label for="name" className="green-text">
                    Name
                  </label>
                </div>
                <div className="input-field">
                  <input type="email" id="email" />
                  <label for="email" className="green-text">
                    Email
                  </label>
                </div>
                <div className="input-field">
                  <input type="text" id="phone" />
                  <label for="phone" className="green-text">
                    Phone
                  </label>
                </div>
                <div className="input-field">
                  <input type="text" id="address" />
                  <label for="address" className="green-text">
                    Address
                  </label>
                </div>
                <div className="input-field">
                  <textarea
                    className="materialize-textarea"
                    id="message"
                    data-length="120"
                  ></textarea>
                  <label for="message" className="green-text">
                    Message
                  </label>
                </div>
                <input type="submit" value="Submit" className="btn green" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
