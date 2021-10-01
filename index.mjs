import fs from "fs";
import can from "canvas";
import {layers, width, height} from './src/config.mjs';
const edition = 1;

const saveLayer = (_canvas) => {
    fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
};

const canvas = can.createCanvas(height, width);
const ctx = canvas.getContext("2d");

const drawLayer = async (_layer, _edition) => {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
    
    console.log(element);
    const image = await can.loadImage("./eye_ball.png");
    ctx.drawImage(image, 0, 0, height, width);
    saveLayer(canvas);
};

[...Array(edition)].map((_, i) => {
    layers.forEach((layer) => {
        drawLayer(layer, i);
    });
});