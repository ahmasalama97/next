import { useContext } from "react"
import BannerTitle from "../layouts/about/banner/BannerTitle"
import { FormContact02, IconBox } from "../layouts/contact"
import { TitleHeading } from "../layouts/home/index"
import { Header, Footer, BottomBar } from "../layouts/general/index"
import { LanguageContext } from "@/LanguageContext"

const ContactUs = ({}) => {
  const lang = useContext(LanguageContext)

  let state = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: lang.lang.nav.contact,
      },
    ],
    banners: [
      {
        id: 1,
        links: "",
        titlelink: "",
        border: "",
        name: lang.lang.nav.contact,
        heading: lang.lang.nav.contact,
      },
    ],
    headingcontact: [
      {
        id: 1,
        classnames: "heading",
        title: lang.lang.nav.contact,
      },
    ],
  }
  return (
    <div
      className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
      style={{ direction: lang.language === "english" ? "ltr" : "rtl" }}>
      <div id="wrapper" className="animsition">
        <div id="page" className="clearfix">
          <div id="site-header-wrap">
            {state.headers.map((data, idx) => (
              <Header data={data} key={idx} />
            ))}
          </div>
          {state.banners.map((data) => (
            <BannerTitle key={data.id} data={data} />
          ))}
          <div id="main-content" className="site-main clearfix">
            <div id="content-wrap">
              <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                  <div className="page-content">
                    <div className="row-iconbox">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={61}
                              data-mobile={60}
                              data-smobile={60}
                            />
                            {state.headingcontact.map((data) => (
                              <TitleHeading data={data} key={data.id} />
                            ))}
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={45}
                              data-mobile={35}
                              data-smobile={35}
                            />
                          </div>
                        </div>
                        <IconBox />
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={58}
                              data-mobile={35}
                              data-smobile={35}
                            />
                          </div>
                        </div>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6205482759174!2d31.245006514955097!3d29.961591329437073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847ee956b07bb%3A0xae59dd11485ca2bd!2sAlfa%20Market!5e0!3m2!1sen!2seg!4v1664981738198!5m2!1sen!2seg"
                          width="100%"
                          height="450"
                          frameBorder="0"
                          style={{ border: 20 }}
                          allowFullScreen=""
                          aria-hidden="false"
                          tabIndex="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {state.headers.map((data, idx) => (
          <Footer data={data} key={idx} />
        ))}
        {state.headers.map((data, idx) => (
          <BottomBar data={data} key={idx} lang={lang} />
        ))}
      </div>
    </div>
  )
}

export default ContactUs
