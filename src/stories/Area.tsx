import React from 'react';
import {AppProps} from "../components/App";
import './area.css'
import randomPoints from "../utils/random-points";
import {Point} from "./Point";

export const Area = (appProps: AppProps) => {
    console.log(appProps);
    let points: { x: number; y: number; id: number }[] = randomPoints(appProps.point_count);

    console.log(points);
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {
                points.map(point => (
                    <Point {...point} />
                ))
            }
        </svg>
    );
}

