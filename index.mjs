import fs from "fs";
import path from 'path';
import can from "canvas";
import {layers, width, height} from './src/config.mjs';
const edition = 1;

const saveLayer = (_canvas, _edition) => {
    var savePath = path.join(process.cwd(), "./output/", `${_edition}.png`);
    console.log(savePath);
    fs.writeFileSync(savePath, _canvas.toBuffer("image/png"));
};

const canvas = can.createCanvas(width, height);
const ctx = canvas.getContext("2d");

const drawLayer = async (_layer, _edition) => {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
    
    console.log(element);
    const imagePath = path.join(_layer.location, element.fileName);
    const image = await can.loadImage(imagePath);
    console.log("path " + imagePath);

    ctx.drawImage(image,
        _layer.position.x, _layer.position.y,
        _layer.size.width, _layer.size.height);

    saveLayer(canvas, _edition);
};

for(var i = 1; i <= edition; i++){
    layers.forEach((layer) => {
        drawLayer(layer, i);
    });
};