import fs from "fs";
import can from "canvas";

const canvas = can.createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const drawLayer = () => {
    can.loadImage("./eye_ball.png").then(data => {
        console.log(data);
    });
};

drawLayer();