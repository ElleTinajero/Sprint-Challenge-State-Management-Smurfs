import React, { useContext } from 'react';
import Smurf from './Smurf';
import SmurfContext from '../contexts/SmurfContext';

export default function Smurfs() {
    const { smurfs } = useContext(SmurfContext);
    return (
        <div>
            <h1>SMURFS</h1>
            <div>
                {smurfs.map(smurf => (
                    <Smurf key={smurf.id} smurf={smurf}/>
                ))}
            </div>
        </div>
    );
}