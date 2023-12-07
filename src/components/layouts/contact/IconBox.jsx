import { LanguageContext } from "@/LanguageContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const IconBox = () => {
  const lang = useContext(LanguageContext)

  let state = {
    iconbox: [
      {
        id: 1,
        headding: lang.lang.contact.phoneNumber,
        subheading: lang.lang.contact.support,
        morelink: lang.lang.contact.callUs,
        icon: "icon-phone",
      },
      {
        id: 2,
        headding: lang.lang.contact.address,
        subheading: lang.lang.contact.subAddress,
        morelink: lang.lang.contact.availability,
        icon: "icon-map",
      },
      {
        id: 3,
        headding: "gm@eo-sa.com ",
        subheading: lang.lang.contact.support,
        morelink: lang.lang.contact.mailUs,
        icon: "icon-envelope",
      },
    ],
  }
  return (
    <div className="row gutter-16">
      <a
        href="https://wa.me/01015899965"
        style={styles.whatsappfloat}
        target="_blank"
        rel="noopener noreferrer">
        <i style={styles.whatsappicon} class="fa fa-whatsapp"></i>
      </a>
      <a
        href="tel:01015899965"
        style={styles.phonefloat}
        rel="noopener noreferrer">
        <i style={styles.phoneicon} class="fa fa-phone"></i>
      </a>
      <a
        href="mailto:ahmed_salama@hotmail.co.uk"
        style={styles.mailfloat}
        rel="noopener noreferrer">
        <i style={styles.mailicon} class="fa fa-envelope"></i>
      </a>
      {state.iconbox.map((data) => (
        <div className="col-md-4" key={data.id}>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={0}
            data-mobile={0}
            data-smobile={35}
          />
          <div className="themesflat-icon-box icon-top align-center accent-color style-3 bg-light-snow clearfix">
            <div className="icon-wrap">
              <i className={data.icon} />
            </div>
            <div className="text-wrap">
              <h5 className="heading">
                <a>{data.headding}</a>
              </h5>
              <p className="sub-heading">{data.subheading}</p>
              <span className="sub-heading">
                <Link to="#">{data.morelink}</Link>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const styles = {
  whatsappfloat: {
    position: "fixed",
    width: 60,
    height: 60,
    bottom: 10,
    right: 70,
    backgroundColor: "#25d366",
    color: "#FFF",
    borderRadius: 50,
    textAlign: "center",
    fontSize: 30,
    boxShadow: "2px 2px 3px #999",
    zIndex: 100,
  },
  whatsappicon: {
    marginTop: 16,
  },
  phonefloat: {
    position: "fixed",
    width: 60,
    height: 60,
    bottom: 10,
    right: 140,
    backgroundColor: "#A9A9A9",
    color: "#FFF",
    borderRadius: 50,
    textAlign: "center",
    fontSize: 30,
    boxShadow: "2px 2px 3px #999",
    zIndex: 100,
  },
  phoneicon: {
    marginTop: 16,
  },
  mailfloat: {
    position: "fixed",
    width: 60,
    height: 60,
    bottom: 10,
    right: 210,
    backgroundColor: "#0096FF",
    color: "#FFF",
    borderRadius: 50,
    textAlign: "center",
    fontSize: 30,
    boxShadow: "2px 2px 3px #999",
    zIndex: 100,
  },
  mailicon: {
    marginTop: 16,
  },
}

export default IconBox
