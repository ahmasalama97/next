import { LanguageConsumer } from "@/LanguageContext"
import React from "react"
import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <LanguageConsumer>
      {({ language, lang }) => (
        <div id="top-bar">
          <div
            id="top-bar-inner"
            className="container"
            style={{ direction: language === "english" ? "ltr" : "rtl" }}>
            <div className="top-bar-inner-wrap">
              <div className="top-bar-content">
                <div className="inner" style={{ display: "flex" }}>
                  <span className="phone content">+61 3 8376 6284</span>
                </div>
              </div>
              <div className="top-bar-socials">
                <div
                  className="inner"
                  style={{ float: language === "english" ? "right" : "left" }}>
                  <span className="text">{lang.topBar.follow}</span>
                  <span className="icons">
                    <Link to="#">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-pinterest-p" />
                    </Link>
                    <Link to="#">
                      <i className="fa fa-rss" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </LanguageConsumer>
  )
}

export default TopBar
