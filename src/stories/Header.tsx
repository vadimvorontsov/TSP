import React from 'react';

import {Button} from './Button';
import './header.css';
import {AppProps} from "../components/App";
import {Small} from "./Button.stories";


export const Header = (appProps: AppProps) => (
    <header>
        <div className="wrapper">
            <div>
                <h1>Travel salesman problem</h1>
                <div>
                    <Small label={'Refresh'} />
                </div>
            </div>
        </div>
    </header>
);
