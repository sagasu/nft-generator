import fs from "fs";
import path from 'path';
import {getElements} from './rare.mjs';

const dir = process.cwd() + "\\layers";
const width = 1000;
const height = 1000;
const size = {x:0,y:0};

console.log("dir " + dir + "\n");

const config = [
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

const layers = config.map((c, index) => {
    c.id = index + 1;
    c.location = path.join(dir, c.name);
    c.elements = getElements(c.location);
    c.size = size;
    return c;
});

export {layers, width, height};