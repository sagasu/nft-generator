import fs from "fs";
import path from 'path';
import {getElements} from './rare.mjs';

const dir = path.join(process.cwd(),"layers");
const width = 1000;
const height = 1000;
const size = {width:width, height:height};

const orderOfApplyingLayers = [
    {
        name: "background",
        position: {x:0,y:0},
    },
    {
        name: "ball",
        position: {x:0,y:0},
    },
    {
        name: "eye color",
        position: {x:0,y:0},
    },
    {
        name: "iris",
        position: {x:0,y:0},
    },
    {
        name: "shine",
        position: {x:0,y:0},
    },
    {
        name: "bottom lid",
        position: {x:0,y:0},
    },
    {
        name: "top lid",
        position: {x:0,y:0},
    },
];

const layers = orderOfApplyingLayers.map((c, index) => {
    c.id = index + 1;
    c.location = path.join(dir, c.name);
    c.elements = getElements(c.location);
    c.size = size;
    return c;
});

export {layers, width, height};