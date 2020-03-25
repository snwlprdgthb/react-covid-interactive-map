import React, { memo, useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0, 100000])
  .range(["pink", "black"]);

const TestMap = ({ myData, setTooltipContent, setGetContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(myData);
  }, [myData]);

  return (
    <ComposableMap
      data-tip=""
      //   projectionConfig={{
      //     rotate: [-10, 0, 0],
      //     scale: 147
      //   }}
    >
      <ZoomableGroup>
        {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find(
                  s => s.iso3 === geo.properties.ISO_A3 && s.confirmed !== 0
                );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["confirmed"]) : "#c6d1c7"}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME}`);
                    }}
                    onClick={() => {
                      const { NAME } = geo.properties;
                      setGetContent(`${NAME}`);
                      setTooltipContent("");
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        outline: "none"
                      },
                      hover: {
                        fill: "black",
                        outline: "none"
                      },
                      pressed: {
                        fill: "black",
                        outline: "none"
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(TestMap);
