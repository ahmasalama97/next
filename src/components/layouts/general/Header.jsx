import { cloneElement, useContext } from "react"
import { Link, withRouter } from "react-router-dom"
import { useScrollTrigger } from "@mui/material"
import PropTypes from "prop-types"
import { LanguageConsumer, LanguageContext } from "@/LanguageContext"

const Header = (props) => {
  const lang = useContext(LanguageContext)

  let state = {
    menus: [
      {
        id: 1,
        name: lang.lang.nav.home,
        links: "/",
      },
      {
        id: 2,
        name: lang.lang.nav.about,
        links: "/#about-us",
      },
      {
        id: 3,
        name: lang.lang.nav.products,
        links: "/products",
      },
      {
        id: 4,
        name: lang.lang.nav.contact,
        links: "/contact-us",
      },
      {
        id: 5,
        name: lang.language !== "english" ? "English" : "العربية",
        links: "/",
      },
    ],
  }

  function ElevationScroll(props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  }

  return (
    <LanguageConsumer>
      {({ language, changeLanguage }) => (
        <header
          id="site-header"
          style={{ direction: language === "english" ? "ltr" : "rtl" }}>
          <div id="site-header-inner" className="container">
            <div
              className="mobile-button"
              style={{
                left: language === "arabic" && 20,
                right: language === "arabic" ? "revert" : "",
              }}>
              <span />
            </div>
            <div className="wrap-inner clearfix">
              <img
                src="assets/img/Logo04@2x.png"
                alt="imagealt"
                width={200}
                height={34}
              />

              <nav
                id="main-nav"
                className="main-nav"
                style={{
                  left: language === "arabic" && 0,
                  direction: language === "english" ? "ltr" : "rtl",
                }}>
                <ul id="menu-primary-menu" className="menu">
                  {state.menus.map((data) => (
                    <li
                      className={
                        data.name === props.data.names
                          ? "menu-item menu-item-has-children current-menu-item"
                          : "menu-item menu-item-has-children"
                      }
                      onClick={() => {
                        if (data.id === 5) {
                          changeLanguage()
                        }
                      }}
                      key={data.id}>
                      <Link
                        to={data?.links}
                        onClick={() => {
                          window.location.href = data.links
                        }}>
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      )}
    </LanguageConsumer>
  )
}

export default Header
