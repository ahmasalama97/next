import React from "react"

const Partner = ({ lang, language }) => {
  let state = {
    partner: [
      {
        id: 1,
        img: "assets/img/partners/partner-1.png",
        imgcolor: "assets/img/partners/partner-1.png",
      },
      {
        id: 2,
        img: "assets/img/partners/partner-2.png",
        imgcolor: "assets/img/partners/partner-2.png",
      },
      {
        id: 3,
        img: "assets/img/partners/partner-3.png",
        imgcolor: "assets/img/partners/partner-3.png",
      },
      {
        id: 4,
        img: "assets/img/partners/partner-4.png",
        imgcolor: "assets/img/partners/partner-4.png",
      },
      {
        id: 6,
        img: "assets/img/partners/partner-1.png",
        imgcolor: "assets/img/partners/partner-1.png",
      },
      {
        id: 7,
        img: "assets/img/partners/partner-2.png",
        imgcolor: "assets/img/partners/partner-2.png",
      },
      {
        id: 8,
        img: "assets/img/partners/partner-3.png",
        imgcolor: "assets/img/partners/partner-3.png",
      },
      {
        id: 9,
        img: "assets/img/partners/partner-4.png",
        imgcolor: "assets/img/partners/partner-4.png",
      },
    ],
  }

  return (
    <div className="row-partner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={83}
              data-mobile={60}
              data-smobile={60}
            />
            <div
              className="themesflat-carousel-box clearfix"
              data-gap={5}
              data-column={4}
              data-column2={3}
              data-column3={2}
              data-auto="true">
              <div
                className="themesflat-headings style-1 clearfix"
                style={{
                  direction: language === "english" ? "ltr" : "rtl",
                }}>
                <h2 className="heading">{lang.pageHeaders.ourPartners}</h2>
                <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={38}
                data-mobile={35}
                data-smobile={35}
              />
              <div className="owl-carousel owl-theme">
                {state.partner.map((data) => (
                  <div
                    className="themesflat-partner style-1 align-center clearfix"
                    key={data.id}>
                    <div className="partner-item">
                      <div className="inner">
                        <div className="thumb">
                          <img
                            src={data.img}
                            alt="altimage"
                            className="partner-default"
                          />
                          <img
                            src={data.imgcolor}
                            alt="altimage"
                            className="partner-color"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={66}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
