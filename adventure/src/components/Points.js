import React from 'react';

function Points(props) {
    return (
        <div>
            <h3>These points are from the API</h3>
            {props.points.map((point) => {
            return <div key={point.id}>
                    <h4>{point.name}</h4>
                    <p>{point.description}</p>
                    </div>
                
            })}
        </div>
    )
}

export default Points;