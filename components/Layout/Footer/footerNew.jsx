import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-gray">
        <div className="footer-custom">
          <div className="footer-lists">
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">Customer Service</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a href="/help/talktous.html" rel="nofollow">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/help/placingorders.html" rel="nofollow">
                    Ordering
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-list-wrap">
              <h6 className="ftr-hdr">About Art.com</h6>
              <ul className="ftr-links-sub">
                <li>
                  <a
                    href="/asp/aboutus/default-asp/_/posters.htm"
                    rel="nofollow"
                  >
                    Our Company
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-email">
            <h6 className="ftr-hdr">
              Sign up for exclusive offers and inspiration
            </h6>
            <div id="ftr-email" className="ftr-email-form">
              <form
                id="ftrEmailForm"
                method="post"
                action="http://em.art.com/pub/rf"
              >
                <div className="error">Please enter a valid email address</div>
                <input
                  type="text"
                  name="email_address_"
                  id="ftrEmailInput"
                  className="input"
                  placeholder="Enter email address"
                />
              </form>
            </div>

            <div className="ftr-email-privacy-policy"></div>
          </div>

          <div className="footer-social">
            <h6 className="ftr-hdr">Follow Us</h6>
            <ul>
              <li>
                <a href="https://www.facebook.com/art.com" title="Facebook">
                  <img
                    width="24"
                    height="24"
                    alt="Like us on Facebook"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/108089796661280870153"
                  title="Google+"
                >
                  <img
                    width="24"
                    height="24"
                    alt="Follow us on Google+"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://pinterest.com/artdotcom/" target="_blank">
                  <img
                    width="24"
                    height="24"
                    alt="Follow us on Pinterest"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://instagram.com/artdotcom/">
                  <img
                    width="24"
                    height="24"
                    alt="Follow us on Instagram"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-legal">
            <p>
              &copy; Art.com Inc. All Rights Reserved. |{' '}
              <a href="/help/privacy-policy.html" rel="nofollow">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="/help/terms-of-use.html" rel="nofollow">
                Terms of Use
              </a>{' '}
              |{' '}
              <a href="/help/terms-of-sale.html" rel="nofollow">
                Terms of Sale
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
