import React from 'react';

export default function Smurf(props) {
    console.log('one smurf', props)

    return (
        <div>
            <h2>Name: {props.smurf.name}</h2>
            <p>age: {props.smurf.age}</p>
        </div>
    )
}