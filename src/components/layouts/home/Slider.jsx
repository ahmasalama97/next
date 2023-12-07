import { LanguageContext } from "@/LanguageContext"
import { useContext } from "react"

const Slider = () => {
  const lang = useContext(LanguageContext)
  const mainContent = () => {
    const bannerhome1 = [
      {
        id: 1,
        srcimg: "assets/img/slider/slider-bg-1.jpg",
        text: lang.lang.slider.slider1,
        classnames:
          "tp-caption tp-resizeme text-white font-heading font-weight-600",
        classtext:
          "box-shadow-lg tp-caption tp-resizeme text-white font-heading font-weight-700 text-border",
        datax: "['left','left','left','center']",
        datahset: "['34','34','34','0']",
        datavset1: "['-134','-134','-134','-134']",
        datavset2: "['-63','-63','-63','-63']",
        datavset3: "['2','2','2','2']",
        datavset: "['106','106','106','106']",
        classbtn: "tp-caption",
      },
      {
        id: 2,
        srcimg: "assets/img/slider/slider-bg-2.jpg",
        text: lang.lang.slider.slider2,
        classnames:
          "tp-caption tp-resizeme text-white font-heading font-weight-600 text-center",
        classtext:
          "tp-caption tp-resizeme text-white font-heading font-weight-700 text-center",
        datax: "['center','center','center','center']",
        datahset: "['0','0','0','0']",
        datavset1: "['-134','-134','-134','-134']",
        datavset2: "['-63','-63','-63','-63']",
        datavset3: "['2','2','2','2']",
        datavset: "['106','106','106','106']",
        classbtn: "tp-caption text-center",
      },
      {
        id: 3,
        srcimg: "assets/img/slider/slider-bg-3.jpg",
        text: lang.lang.slider.slider3,
        classnames:
          "tp-caption tp-resizeme text-white font-heading font-weight-600 text-right",
        classtext:
          "tp-caption tp-resizeme text-white font-heading font-weight-700 text-right",
        datax: "['right','right','right','center']",
        datahset: "['-14','-14','-14','0']",
        datavset1: "['-134','-134','-134','-134']",
        datavset2: "['-63','-63','-63','-63']",
        datavset3: "['2','2','2','2']",
        datavset: "['106','106','106','106']",
        classbtn: "tp-caption text-right",
      },
    ]
    return (
      <>
        {bannerhome1.map((data) => (
          <li data-transition="random" key={data.id}>
            <img
              src={data.srcimg}
              alt="altimage"
              data-bgposition="center center"
              data-no-retina
            />
            <div
              className={data.classtext}
              data-x={data.datax}
              data-hoffset={data.datahset}
              data-y="['middle','middle','middle','middle']"
              data-voffset={data.datavset2}
              data-fontsize="['52','52','42','32']"
              data-lineheight="['65','65','45','35']"
              data-width="full"
              data-height="none"
              data-whitespace="normal"
              data-transform_idle="o:1;"
              data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
              data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
              data-mask_in="x:0px;y:[100%];"
              data-mask_out="x:inherit;y:inherit;"
              data-start={500}
              data-splitin="none"
              data-splitout="none"
              data-responsive_offset="on">
              {data.text}
            </div>
          </li>
        ))}
      </>
    )
  }
  return <ul>{mainContent()}</ul>
}

export default Slider
