import React from "react";

const TitleHeading = (props) => {
  return (
    <div className="themesflat-headings style-1 text-center clearfix">
      <h2 className={props.data.classnames}>{props.data.title}</h2>
      <div className="sep has-icon width-125 clearfix">
        <div className="sep-icon">
          <span className="sep-icon-before sep-center sep-solid" />
          <span className="icon-wrap">
            <i className="autora-icon-build" />
          </span>
          <span className="sep-icon-after sep-center sep-solid" />
        </div>
      </div>
      <p className={props.data.classtext}>{props.data.text}</p>
    </div>
  );
};

export default TitleHeading;
