#!/usr/bin/env node

// Generate the main html page for local development
import {
    DOM,
    createElement, 
    renderToStaticMarkup
} from 'react';
import {html} from 'js-beautify';

import Page from './components/page';

var options = {
    title: 'html loading scripts',
    scripts: [
        './js/react.js',
        './js/flummox.js',
        './js/flummox-component.js'
    ]
};

console.log( html(
    renderToStaticMarkup(
        createElement(Page, options, 
            DOM.div({id: 'main'})
        )
    )
) );
