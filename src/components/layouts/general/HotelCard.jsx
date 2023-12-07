import BedIcon from "@mui/icons-material/Bed";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const HotelCard = ({
  img,
  name,
  subName,
  rating,
  nights,
  meals,
  travel,
  pcr,
  lang,
}) => {
  return (
    <div className="themesflat-testimonials style-2 align-center clearfix">
      <div className="testimonial-item">
        <div className="inner">
          <img
            src={img}
            style={{ width: "100%", height: 270 }}
            alt="altimage"
          />
          <blockquote className="text">
            <div
              className="name"
              style={{
                justifyContent: "space-between",
              }}
            >
              <div className="name-pos clearfix">
                <h6 className="name">{name}</h6>
                <span className="position">{subName}</span>
              </div>
              <h6 className="name">{rating}</h6>
            </div>

            <div
              className="name-pos clearfix text-left pb-5"
              style={{ display: "flex", alignSelf: "center" }}
            >
              <BedIcon style={{ fontSize: 30 }} />
              <h6
                className="name"
                style={{ alignSelf: "center", paddingLeft: 5, paddingRight: 5 }}
              >
                {nights} {lang.general.nights}
              </h6>
            </div>

            <div
              className="name-pos clearfix text-left pb-5"
              style={{ display: "flex", alignSelf: "center" }}
            >
              <FastfoodIcon style={{ fontSize: 30 }} />
              <h6
                className="name"
                style={{ alignSelf: "center", paddingLeft: 5, paddingRight: 5 }}
              >
                {meals} {lang.general.meals}
              </h6>
            </div>

            <div
              className="name-pos clearfix text-left pb-5"
              style={{ display: "flex", alignSelf: "center" }}
            >
              <DirectionsBusFilledIcon style={{ fontSize: 30 }} />
              <h6
                className="name"
                style={{ alignSelf: "center", paddingLeft: 5, paddingRight: 5 }}
              >
                {travel} {lang.general.fromAirport}
              </h6>
            </div>
            <div
              className="name-pos clearfix text-left pb-5"
              style={{ display: "flex", alignSelf: "center" }}
            >
              <VaccinesIcon style={{ fontSize: 30 }} />
              <h6
                className="name"
                style={{ alignSelf: "center", paddingLeft: 5, paddingRight: 5 }}
              >
                {pcr} {lang.general.pcr}
              </h6>
            </div>
            {/* </div> */}
          </blockquote>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
