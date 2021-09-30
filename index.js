const fs = require("fs");
const {createCanvas, loadImage} = require("canvas");

const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");

const drawLayer = () => {
    loadImage("./eye_ball.png").then(data => {
        console.log(data);
    });
};

drawLayer();