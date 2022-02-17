import React from "react";
import randomPoints from "../utils/random-points";
import {Page} from "../stories/Page";

export interface AppProps {
    point_count: number;
}

export default class App extends React.Component {
    state: AppProps = {
        point_count: 20,
    }

    render() {
        return (
            <Page {...this.state}/>
        );
    }
}

// export function create_point(x: number, y: number, id: number) {
//     return {x, y, id}
// }
