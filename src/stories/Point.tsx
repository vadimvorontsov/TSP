import React from 'react';
import './point.css'

export const Point = (point: { x: number; y: number; id: number }) => {
    console.log(point);
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx={point.x}
                cy={point.y}
                key={point.id}
                r="1"
            />
        </svg>
    );
}

