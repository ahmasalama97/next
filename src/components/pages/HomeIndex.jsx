"use client"
import React, { useContext } from "react"
import { Overview, Slider, TitleHeading } from "../layouts/home/index"
import { IconBox, SliderPopularPlaces, Partner } from "../layouts/home/index"
import { Header, Footer, TopBar, BottomBar } from "../layouts/general/index"
import Hotels from "../layouts/home/Hotels"
import { LeaderTeam } from "../layouts/about"
import AboutUs from "./AboutUs"
import { LanguageContext } from "@/LanguageContext"

const HomeIndex = () => {
  const { lang } = useContext(LanguageContext)
  let content = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-white-small.png",
        names: lang.nav.home,
      },
    ],
    destinations: [
      {
        id: 1,
        classnames: "heading",
        title: lang.pageHeaders.destinations,
      },
    ],
    quarantine: [
      {
        id: 1,
        classnames: "heading text",
        title: lang.pageHeaders.quarantine,
      },
    ],
    about: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: lang.nav.about,
      },
    ],
    banners: [
      {
        id: 1,
        links: "",
        titlelink: "",
        border: "",
        name: lang.nav.about,
        heading: lang.nav.about,
      },
    ],
  }
  return (
    <div className="header-fixed page no-sidebar header-style-3 topbar-style-3 site-header-absolute menu-has-search">
      <div id="wrapper" className="animsition">
        <div id="page" className="clearfix">
          <div id="site-header-wrap">
            {content.headers.map((data, idx) => (
              <Header data={data} key={idx} />
            ))}
          </div>
          <div id="main-content" className="site-main clearfix">
            <div id="content-wrap">
              <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                  <div className="page-content">
                    <div className="rev_slider_wrapper fullwidthbanner-container">
                      <div
                        id="rev-slider2"
                        className="rev_slider fullwidthabanner">
                        <Slider />
                      </div>
                    </div>
                    <AboutUs lang={lang} />
                    <div className="row-services">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={60}
                              data-mobile={60}
                              data-smobile={60}
                            />
                            {content.destinations.map((data) => (
                              <TitleHeading data={data} key={data.id} />
                            ))}
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop="27"
                              data-mobile="35"
                              data-smobile="35"></div>
                            <SliderPopularPlaces />
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={45}
                              data-mobile={60}
                              data-smobile={60}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-iconbox bg-row-2">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={60}
                              data-mobile={60}
                              data-smobile={60}
                            />
                            {content.quarantine.map((data) => (
                              <TitleHeading data={data} key={data.id} />
                            ))}
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={25}
                              data-mobile={35}
                              data-smobile={35}
                            />
                            <IconBox />
                            <div className="row">
                              <div className="col-md-12">
                                <div
                                  className="themesflat-spacer clearfix"
                                  data-desktop={80}
                                  data-mobile={60}
                                  data-smobile={60}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row-project clearfix">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={60}
                              data-mobile={60}
                              data-smobile={60}
                            />
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={40}
                              data-mobile={35}
                              data-smobile={35}
                            />
                            <Hotels lang={lang} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-project clearfix">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="themesflat-spacer clearfix"
                            data-desktop={60}
                            data-mobile={60}
                            data-smobile={60}
                          />
                          <div
                            className="themesflat-spacer clearfix"
                            data-desktop={40}
                            data-mobile={35}
                            data-smobile={35}
                          />
                          <Partner lang={lang} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {content.headers.map((data, idx) => (
            <Footer data={data} key={idx} />
          ))}
          {content.headers.map((data, idx) => (
            <BottomBar data={data} key={idx} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomeIndex
