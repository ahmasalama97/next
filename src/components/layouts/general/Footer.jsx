import { LanguageContext } from "@/LanguageContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Footer = (props) => {
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
        links: "/about-us",
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
    ],
  }
  return (
    <footer
      id="footer"
      className="clearfix"
      style={{ direction: lang.language === "english" ? "ltr" : "rtl" }}>
      <div id="footer-widgets" className="container">
        <div className="themesflat-row gutter-30">
          <div className="col span_1_of_3">
            <div className="widget widget_text">
              <div className="textwidget">
                <img
                  src="assets/img/logo.png"
                  alt="imagealt"
                  width={170}
                  height={34}
                />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={80}
                  data-mobile={60}
                  data-smobile={60}
                />
              </div>
            </div>

            {/* /.widget_text */}
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={35}
            />
          </div>
          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={0}
            />
            <div className="widget widget_lastest">
              <h2 className="widget-title">
                <span>{lang.lang.pageHeaders.ourCities}</span>
              </h2>
              <ul className="lastest-posts data-effect clearfix">
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>
                      <div>{lang.lang.popularPlaces.riyadh}</div>
                    </h3>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>{lang.lang.popularPlaces.jeddah}</h3>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>{lang.lang.popularPlaces.dammam}</h3>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>
                      <div>{lang.lang.popularPlaces.madinah}</div>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={0}
            />
            <div className="widget widget_lastest">
              <h2 className="widget-title">
                <span>{lang.lang.pageHeaders.navigation}</span>
              </h2>
              <ul className="menu">
                {state.menus.map((data) => (
                  <li
                    className={
                      data.name !== props.data.names
                        ? "menu-item current-menu-item"
                        : "menu-item"
                    }
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
            </div>
          </div>
          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={0}
            />
            <div className="widget widget_lastest">
              <h2 className="widget-title">
                <span>{lang.lang.nav.contact}</span>
              </h2>
              <ul className="lastest-posts data-effect clearfix">
                <div
                  className="widget widget_text"
                  style={{
                    right: lang.language === "english" ? "" : 0,
                  }}>
                  <span className="fa fa-map-marker" />
                  <span className="text">
                    {lang.lang.contact.address}
                    <br />
                    <span className="sl">{lang.lang.contact.subAddress}</span>
                  </span>
                </div>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="widget widget_text">
                    <span className="fa fa-phone" />
                    <span className="text">
                      {lang.lang.contact.callUs} :{" "}
                      {lang.lang.contact.phoneNumber}
                    </span>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="widget widget_text">
                    <span className=" font-size-14 fa fa-envelope" />
                    <span className="text">gm@eo-sa.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  column: {
    display: "flex",
  },
}

export default Footer
