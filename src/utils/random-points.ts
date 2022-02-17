// import {create_point} from "../components/App";


function randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function randomPoints(count: number, maxX: number = 100, maxY: number = 100) {
    return new Array(count).fill(0).map(() => {
        // console.log('123');
        const x: number = randomInt(1, maxX - 1);
        const y: number = randomInt(1, maxY - 1);
        count -= 1;

        return {x: x, y: y, id: count};
    })
}

export function testLog() {
    console.log('test');
} 
