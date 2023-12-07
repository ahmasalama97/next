import React from "react"
import HotelCard from "../general/HotelCard"

const Hotels = ({ lang, language }) => {
  return (
    <div className="row-testimonials bg-light-snow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={60}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings style-1 font-hind text-center clearfix">
              <h2 className="heading">{lang.pageHeaders.ourHotels}</h2>
              <div className="sep has-icon width-125 clearfix">
                <div className="sep-icon">
                  <span className="sep-icon-before sep-center sep-solid" />
                  <span className="icon-wrap">
                    <i className="autora-icon-build" />
                  </span>
                  <span className="sep-icon-after sep-center sep-solid" />
                </div>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={46}
              data-mobile={35}
              data-smobile={35}
            />
            <div
              className="themesflat-carousel-box has-bullets bullet-circle clearfix"
              data-gap={30}
              data-column={3}
              data-column2={2}
              data-column3={1}
              data-auto="true">
              <div className="owl-carousel owl-theme">
                <div
                  className="col-md-12"
                  style={{
                    direction: language === "english" ? "ltr" : "rtl",
                  }}>
                  <HotelCard
                    img={"assets/img/hotels/hotel-1.jpeg"}
                    name={lang.hotels.taj}
                    subName={lang.hotels.subTaj}
                    rating={
                      <div className="list-star">
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                      </div>
                    }
                    nights={lang.general.d}
                    meals={lang.general.c}
                    travel={lang.general.oneWay}
                    pcr={lang.general.b}
                    lang={lang}
                  />
                </div>
                <div
                  className="col-md-12"
                  style={{
                    direction: language === "english" ? "ltr" : "rtl",
                  }}>
                  <HotelCard
                    img={"assets/img/hotels/hotel-2.jpeg"}
                    name={lang.hotels.hijra}
                    subName={lang.hotels.subHijra}
                    rating={
                      <div className="list-star">
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                      </div>
                    }
                    nights={lang.general.c}
                    meals={lang.general.b}
                    travel={lang.general.oneWay}
                    pcr={lang.general.e}
                    lang={lang}
                  />
                </div>
                <div
                  className="col-md-12"
                  style={{
                    direction: language === "english" ? "ltr" : "rtl",
                  }}>
                  <HotelCard
                    img={"assets/img/hotels/hotel-3.jpeg"}
                    name={lang.hotels.safwa}
                    subName={lang.hotels.subSafwa}
                    rating={
                      <div className="list-star">
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                      </div>
                    }
                    nights={lang.general.e}
                    meals={lang.general.e}
                    travel={lang.general.oneWay}
                    pcr={lang.general.a}
                    lang={lang}
                  />
                </div>
                <div
                  className="col-md-12"
                  style={{
                    direction: language === "english" ? "ltr" : "rtl",
                  }}>
                  <HotelCard
                    img={"assets/img/hotels/hotel-4.jpeg"}
                    name={lang.hotels.malak}
                    subName={lang.hotels.subMalak}
                    rating={
                      <div className="list-star">
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                      </div>
                    }
                    nights={lang.general.h}
                    meals={lang.general.j}
                    travel={lang.general.oneWay}
                    pcr={lang.general.f}
                    lang={lang}
                  />
                </div>
                <div
                  className="col-md-12"
                  style={{
                    direction: language === "english" ? "ltr" : "rtl",
                  }}>
                  <HotelCard
                    img={"assets/img/hotels/hotel-5.jpeg"}
                    name={lang.hotels.kady}
                    subName={lang.hotels.subKady}
                    rating={
                      <div className="list-star">
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                        <i className="ion-star" />
                      </div>
                    }
                    nights={lang.general.d}
                    meals={lang.general.a}
                    travel={lang.general.oneWay}
                    pcr={lang.general.f}
                    lang={lang}
                  />
                </div>
                {/* /.themesflat-testimonials */}
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={81}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels
