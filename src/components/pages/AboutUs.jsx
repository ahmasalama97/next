import { useContext } from "react"
import { About, Overview } from "../layouts/home/index"
import { LanguageContext } from "@/LanguageContext"

const AboutUs = () => {
  const { lang, language } = useContext(LanguageContext)

  return (
    <div
      id="about-us"
      className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
      style={{
        direction: language === "english" ? "ltr" : "rtl",
        paddingTop: "7%",
      }}>
      <div id="wrapper" className="animsition">
        <div id="page" className="clearfix">
          <div id="main-content" className="site-main clearfix">
            <div id="content-wrap">
              <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                  <div className="page-content">
                    <About lang={lang} language={language} />
                    <div className="row-tabs">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={61}
                              data-mobile={60}
                              data-smobile={60}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <Overview lang={lang} language={language} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
