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

const TrackRoute = () => {

      const layer = new LineLayer({
        id: 'line-layer',
        data,
        pickable: true,
        getWidth: 50,
        getSourcePosition: d => d.from.coordinates,
        getTargetPosition: d => d.to.coordinates,
        getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0]
      });

  return (
    <div>
        <DeckGL 
            viewState={viewState}
            layers={[layer]}
            getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`}
        >
            <StaticMap>

            </StaticMap>
        </DeckGL> 

    </div>
  )
}

export default TrackRoute