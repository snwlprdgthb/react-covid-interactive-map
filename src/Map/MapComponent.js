import React, { useState, useEffect, useRef } from "react";
import ReactTooltip from "react-tooltip";

import TestMap from "./testMap";
import Tooltip from "../Tooltip";
import { connect } from "react-redux";
import { newSetCountry, loadCountries } from "../actions/actions";

function MapComponent(props) {
  const { newSetCountry } = props;
  console.log(props);
  const [content, setContent] = useState("");
  const [getContent, setGetContent] = useState("");

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = content;
  });
  const prevValue = prevCountRef.current;

  useEffect(() => {
    if (getContent) {
      newSetCountry(getContent);
    }
  }, [getContent, newSetCountry]);

  return (
    <div>
      <TestMap
        myData={props.data}
        setTooltipContent={setContent}
        setGetContent={setGetContent}
      />

      {getContent && prevValue === content ? (
        <ReactTooltip>
          <Tooltip loading={props.loading} currentCountry={props.el} />
        </ReactTooltip>
      ) : (
        <ReactTooltip>{content}</ReactTooltip>
      )}
    </div>
  );
}

const mStP = state => {
  return {
    data: state.countries.data,
    el: state.currentCountry.data,
    loading: state.currentCountry.loading
  };
};

export default connect(
  mStP,
  { newSetCountry, loadCountries }
)(MapComponent);
