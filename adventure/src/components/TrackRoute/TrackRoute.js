import React from 'react'
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';


const TrackRoute = ({data, viewState}) => {

    data = [{ 
        inbound: 72633,
        outbound: 74735,
        from: {
          name: 'Fremont Troll',
          coordinates: [-75.3372987731628, 45.383321536272049]
        },
        to: {
          name: 'Dahlia garden',
          coordinates: [-75.546518086577947, 45.467134581917357]
      },

    }]

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
        />
    </div>
  )
}

export default TrackRoute