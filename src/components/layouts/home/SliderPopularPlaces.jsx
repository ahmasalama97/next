import { LanguageContext } from "@/LanguageContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const SliderPopularPlaces = () => {
  const lang = useContext(LanguageContext)
  let state = {
    slider: [
      {
        id: 1,
        srcimg: "assets/img/imagebox/image-box-1.jpg",
        heading: lang.lang.popularPlaces.riyadh,
        text: lang.lang.popularPlaces.riyadhDesc,
      },
      {
        id: 2,
        srcimg: "assets/img/imagebox/image-box-2.jpg",
        heading: lang.lang.popularPlaces.jeddah,
        text: lang.lang.popularPlaces.jeddahDesc,
      },
      {
        id: 3,
        srcimg: "assets/img/imagebox/image-box-3.jpg",
        heading: lang.lang.popularPlaces.madinah,
        text: lang.lang.popularPlaces.madinahDesc,
      },
      {
        id: 4,
        srcimg: "assets/img/imagebox/image-box-4.jpg",
        heading: lang.lang.popularPlaces.dammam,
        text: lang.lang.popularPlaces.dammamDesc,
      },
    ],
  }

  return (
    <div
      className="themesflat-carousel-box has-bullets bullet-circle arrow-center offset-v-111 offset-h-21 arrow-circle arrow-style-2 data-effect clearfix"
      data-gap={30}
      data-column={3}
      data-column2={2}
      data-column3={1}
      data-auto="true">
      <div className="owl-carousel owl-theme">
        {state.slider.map((data) => (
          <div
            className="themesflat-image-box style-2 clearfix"
            style={{ direction: "rtl" }}
            key={data.id}>
            <div className="image-box-item">
              <div className="inner">
                <div className="thumb data-effect-item">
                  <img src={data.srcimg} alt="altimage" />
                  <div className="overlay-effect bg-color-accent" />
                </div>
                <div className="text-wrap">
                  <h5 className="heading">
                    <Link to="#">{data.heading}</Link>
                  </h5>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SliderPopularPlaces
