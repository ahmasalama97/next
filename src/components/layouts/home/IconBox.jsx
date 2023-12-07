"use client"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import VaccinesIcon from "@mui/icons-material/Vaccines"
import { LanguageConsumer, LanguageContext } from "@/LanguageContext"

const IconBox = () => {
  const lang = useContext(LanguageContext)
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  let state = {
    iconbox: [
      {
        id: 1,
        icon: <AccountBalanceIcon fontSize="14px" />,
        title: lang.lang.nav.products,
        text: lang.lang.general.hotelServices,
      },
      {
        id: 2,
        icon: <DirectionsBusIcon fontSize="14px" />,
        title: lang.lang.general.transport,
        text: lang.lang.general.transportServices,
      },
      {
        id: 3,
        icon: <RestaurantMenuIcon fontSize="14px" />,
        title: lang.lang.general.catering,
        text: lang.lang.general.cateringServices,
      },
      {
        id: 4,
        icon: <VaccinesIcon fontSize="14px" />,
        title: lang.lang.general.pcr,
        text: lang.lang.general.pcrServices,
      },
    ],
  }
  return (
    <LanguageConsumer>
      {({ language }) => (
        <div
          className="themesflat-row gutter-30 gutter-mobile clearfix"
          style={{
            direction: language === "english" ? "ltr" : "rtl",
            display: isMobile ? "block" : "flex",
          }}>
          {state.iconbox.map((data) => (
            <div className="col span_1_of_3" key={data.id}>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={35}
              />
              <div className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 bg-white-column padding-inner clearfix">
                <div className="icon-wrap pt-2">{data.icon}</div>
                <div className="text-wrap">
                  <h5 className="heading">
                    <Link to="#">{data.title}</Link>
                  </h5>
                  <div className="sep clearfix" />
                  <p className="sub-heading">{data.text}</p>
                </div>
              </div>
              <div className="divider h35" />
            </div>
          ))}
        </div>
      )}
    </LanguageConsumer>
  )
}

export default IconBox
