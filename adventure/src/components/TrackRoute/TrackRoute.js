import React from 'react'
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl'
import data from '../../Utils/trackroutedata.json'

const INITIAL_VIEW_STATE = {
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 9,
    maxZoom: 16,
    pitch: 50,
    bearing: 0
  };

  const MAP_STYLE = "mapbox://styles/mapbox/streets-v9"

  function getColor(d) {
    const z = d.start[2];
    const r = z / 10000;
  
    return [255 * (1 - r * 2), 128 * r, 255 * r, 255 * (1 - r)];
  }
  
  function getSize(type) {
    if (type.search('major') >= 0) {
      return 100;
    }
    if (type.search('small') >= 0) {
      return 30;
    }
    return 60;
  }
  
  function getTooltip({object}) {
    return (
      object &&
      `\
    ${object.country || object.abbrev || ''}
    ${object.name.indexOf('0x') >= 0 ? '' : object.name}`
    );
  }

const TrackRoute = ({
    points = data,
    getWidth = 3,
    mapStyle= MAP_STYLE
}) => {

      const layer = new LineLayer({
        id: 'track',
        data: data,
        opacity: 0.8,
        getSourcePosition: d => d.start,
        getTargetPosition: d => d.end,
        getColor,
        getWidth,
        pickable: true
      });

  return (
    <div>
        <DeckGL
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        pickingRadius={5}
        parameters={{
            blendFunc: [GL.SRC_ALPHA, GL.ONE, GL.ONE_MINUS_DST_ALPHA, GL.ONE],
            blendEquation: GL.FUNC_ADD
        }}
        getTooltip={getTooltip}
        >
        <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />
        </DeckGL>
    </div>
  )
}

export default TrackRoute