import fs from "fs";
import can from "canvas";

const height = 1000;
const width = 1000;

const saveLayer = (_canvas) => {
    fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
};

const canvas = can.createCanvas(height, width);
const ctx = canvas.getContext("2d");

const drawLayer = async () => {
    const x = 0;
    const y = 0;
    const image = await can.loadImage("./eye_ball.png");
    ctx.drawImage(image, x, y, height, width);
    saveLayer(canvas);
};

drawLayer();