import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footerMainContainer">
        <div className="footerContainer">
          <div className="footerUpper">
            <div className="leftContainer">
              <div className="imageContainer">
                <div className="imageContainer">
                  <img src="./images/Group 1436.svg" />
                </div>
                <div className="textContainer">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <p className="text">
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed dia
                  </p>
                  <p className="text">
                    m nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  </p>
                </div>
              </div>
            </div>
            <div className="rightContainer">
              <div className="searchBox">
                <p className="searchBoxHeader">Subscribe to our newsletter</p>
                <div className="input">
                  <input type="text" placeholder="Enter Your Mail" />
                  <div className="subscribeBtn">
                    <div className="textContainer">
                      <p className="text">Subscribe</p>
                    </div>
                    <div className="imageContainer">
                      <img src="./images/Group 1431.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="contactsContainer">
                  <ul className="contants">
                    <li> About Us</li>
                    <li> Contact Us</li>
                    <li> Track Order</li>
                    <li> Terms & Conditions</li>
                    <li> Privacy Policy</li>
                    <li> Sell with Us</li>
                    <li>Shippng And Returns</li>
                  </ul>
                </div>
                <div className="socialMediaContainer">
                  <div className="socialMedia">
                    <div className="imageContainer">
                      <img src="./images/Group 1432.svg" />
                    </div>
                    <div className="textContainer">
                      <p className="text">/YESHTERY</p>
                    </div>
                  </div>
                  <div className="socialMedia">
                    <div className="imageContainer">
                      <img src="./images/Group 1435.svg" />
                    </div>
                    <div className="textContainer">
                      <p className="text">/YESHTERY</p>
                    </div>
                  </div>
                  <div className="socialMedia">
                    <div className="imageContainer">
                      <img src="./images/Group 1433.svg" />
                    </div>
                    <div className="textContainer">
                      <p className="text">/YESHTERY</p>
                    </div>
                  </div>
                  <div className="socialMedia">
                    <div className="imageContainer">
                      <img src="./images/Group 1434.svg" />
                    </div>
                    <div className="textContainer">
                      <p className="text">/YESHTERY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <p className="copyrights">© 2021 yeshtery, all rights reserved.</p>
            <div className="payment">
              <img src="./images/Rectangle 586.png" />
              <img src="./images/Group 1437.png" />
              <img src="./images/Group 1438.png" />
            </div>
            <div className="poweredByContainer">
              <p className="powerdBy">Powered By</p>
              <img src="./images/Group 1439.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
