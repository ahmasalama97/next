import { useLocation } from "react-router-dom"
import { useContext } from "react"
import BannerTitle from "../layouts/about/banner/BannerTitle"
import HotelCard from "../layouts/general/HotelCard"
import { Footer, BottomBar, TopBar, Header } from "../layouts/general/index"
import styles from "./styles.css"
import { TitleHeading } from "../layouts/home"
import { LanguageContext } from "@/LanguageContext"

const Products = () => {
  const activeUrl = useLocation()
  const { lang } = useContext(LanguageContext)

  let state = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: lang.nav.products,
      },
    ],
    banners: [
      {
        id: 1,
        links: "/hotels",
        titlelink: "",
        border: "",
        name: lang.nav.products,
        heading: lang.nav.products,
      },
    ],
    headingcontact: [
      {
        id: 1,
        classnames: "heading",
        title: lang.nav.products,
      },
    ],
  }

  return (
    <div className="header-fixed page no-sidebar header-style-3 topbar-style-3 site-header-absolute menu-has-search">
      {/* <div id="wrapper" className="animsition"> */}
      <div id="page" className="clearfix">
        <div id="site-header-wrap">
          {state.headers.map((data, idx) => (
            <Header data={data} key={idx} />
          ))}
          {/* {state.banners.map((data) => (
                <BannerTitle key={data.id} data={data} />
              ))} */}
          <div
            className="themesflat-headings style-1 clearfix"
            style={{ marginTop: "5%" }}>
            {state.headingcontact.map((data) => (
              <TitleHeading data={data} key={data.id} />
            ))}
          </div>

          <section className="hero-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <nav
                    id="navbar-example3"
                    className="h-100 flex-column align-items-stretch">
                    <nav className="nav nav-pills flex-column">
                      <a
                        className={`nav-link smoothscroll ${
                          activeUrl.hash === "#item-1" ? "active" : ""
                        }`}
                        href="#item-1">
                        Introduction
                      </a>

                      <a
                        className={`nav-link smoothscroll ${
                          activeUrl.hash === "#item-2" ? "active" : ""
                        }`}
                        href="#item-2">
                        Chapter 1: <strong>Win back your time</strong>
                      </a>

                      <a
                        className={`nav-link smoothscroll ${
                          activeUrl.hash === "#item-3" ? "active" : ""
                        }`}
                        href="#item-3">
                        Chapter 2: <strong>Work less, do more</strong>
                      </a>

                      <a
                        className={`nav-link smoothscroll ${
                          activeUrl.hash === "#item-4" ? "active" : ""
                        }`}
                        href="#item-4">
                        Chapter 3: <strong>Delegate</strong>
                      </a>

                      <a
                        className={`nav-link smoothscroll ${
                          activeUrl.hash === "#item-5" ? "active" : ""
                        }`}
                        href="#item-5">
                        Chapter 4: <strong>Habits</strong>
                      </a>
                    </nav>
                  </nav>
                </div>

                <div className="col-lg-8 col-12">
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example3"
                    data-bs-smooth-scroll="true"
                    className="scrollspy-example-2"
                    tabIndex="0">
                    <div
                      className="scrollspy-example-item"
                      id="item-1"
                      style={{ paddingTop: "15%" }}>
                      <h5>Introducing ebook</h5>

                      <p>
                        This ebook landing page is good to use for any purpose.
                        This layout is based on Bootstrap 5 CSS framework.
                      </p>

                      <p>
                        <strong>What is Content Marketing?</strong> If you are
                        wondering what content marketing is all about, this is
                        the place to start.
                      </p>

                      <blockquote className="blockquote">
                        Lorem Ipsum dolor sit amet, consectetur adipsicing
                        kengan omeg kohm tokito
                      </blockquote>

                      <p>
                        When you need free HTML CSS templates, please visit
                        Templatemo website which provides a variety of
                        templates.
                      </p>
                    </div>

                    <div
                      className="scrollspy-example-item"
                      id="item-2"
                      style={{ paddingTop: "15%" }}>
                      <h5>Win back your time</h5>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <p>
                        Sed leo nisl, posuere at molestie ac, suscipit auctor
                        mauris. Etiam quis metus elementum, tempor risus vel,
                        condimentum orci.
                      </p>

                      <p>
                        You are not allowed to redistribute this template ZIP
                        file on any other template collection website. Please
                        contact TemplateMo for more information.
                      </p>

                      <div className="row">
                        <div className="col-lg-6 col-12 mb-3">
                          <img
                            src="images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                            className="scrollspy-example-item-image img-fluid"
                            alt=""
                          />
                        </div>

                        <div className="col-lg-6 col-12 mb-3">
                          <img
                            src="images/businessman-sitting-by-table-cafe.jpg"
                            className="scrollspy-example-item-image img-fluid"
                            alt=""
                          />
                        </div>
                      </div>

                      <p>
                        If you need some specific CSS templates, you can Google
                        with keywords such as templatemo gallery, templatemo
                        digital marketing, etc.
                      </p>
                    </div>

                    <div
                      className="scrollspy-example-item"
                      id="item-3"
                      style={{ paddingTop: "15%" }}>
                      <h5>Work less, do more</h5>

                      <p>
                        Credit goes to{" "}
                        <a
                          rel="nofollow"
                          href="https://freepik.com"
                          target="_blank">
                          FreePik
                        </a>{" "}
                        for images used in this ebook landing page template. You
                        may browse FreePik to download more free images for your
                        website.
                      </p>
                      <p>
                        This is a second paragraph. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consive adipisicing elit,
                        sed do eiusmod. tempor incididunt ut labore.
                      </p>

                      <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                          <img
                            src="images/tablet-screen-contents.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>

                        <div className="col-lg-6 col-12">
                          <p>Modern ebook ever</p>

                          <p>
                            <strong>
                              Lorem ipsum dolor sit amet, consive adipisicing
                              elit, sed do eiusmod. tempor incididunt.
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="scrollspy-example-item"
                      id="item-4"
                      style={{ paddingTop: "15%" }}>
                      <h5>Delegate</h5>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consive adipisicing elit,
                        sed do eiusmod. tempor incididunt ut labore.
                      </p>

                      <p>
                        You are not allowed to redistribute this template ZIP
                        file on any other template collection website. Please
                        contact TemplateMo for more information.
                      </p>

                      <img
                        src="images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                        className="scrollspy-example-item-image img-fluid mb-3"
                        alt=""
                      />

                      <p>
                        You may want to contact us for more information about
                        this template.
                      </p>
                    </div>

                    <div
                      className="scrollspy-example-item"
                      id="item-5"
                      style={{ paddingTop: "15%" }}>
                      <h5>Habits</h5>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>

                      <p>
                        You are not allowed to redistribute this template ZIP
                        file on any other template collection website. Please
                        contact TemplateMo for more information.
                      </p>

                      <p>
                        <strong>What is Free CSS Templates?</strong> Free CSS
                        Templates are a variety of ready-made web pages designed
                        for different kinds of websites.
                      </p>

                      <blockquote className="blockquote">
                        Lorem Ipsum dolor sit amet, consectetur adipsicing
                        kengan omeg kohm tokito
                      </blockquote>

                      <p>
                        You may browse TemplateMo website for more CSS
                        templates. Thank you for visiting our website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </div> */}
        </div>
        {/* {state.headers.map((data, idx) => (
              <Footer data={data} key={idx} />
            ))} */}
        {/* {state.headers.map((data, idx) => (
              <BottomBar data={data} key={idx} lang={lang} />
            ))} */}
      </div>
    </div>
  )
}

export default Products
