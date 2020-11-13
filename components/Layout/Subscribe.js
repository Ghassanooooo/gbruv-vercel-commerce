import React from 'react';

export default function Subscribe() {
  return (
    <section className="subscribe-area ptb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="newsletter-content">
              <h3>Subscribe to our newsletter</h3>
            </div>
          </div>

          <div className="col-lg-6">
            <form className="newsletter-form" data-toggle="validator">
              <label htmlFor="emailInput">Your email</label>
              <input
                id="emailInput"
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                name="EMAIL"
                required
                autoComplete="off"
              />

              <button type="submit">Subscribe</button>
              <div id="validator-newsletter" className="form-result" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
