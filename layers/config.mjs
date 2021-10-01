import fs from "fs";
import path from 'path';

const dir = process.cwd() + "\\layers";
const width = 1000;
const height = 1000;
const size = {x:0,y:0};

console.log("dir " + dir + "\n");

const rarity = [
    {key: "", val: "original"},
    {key: "_r", val: "rare"},
    {key: "_sr", val: "super rare"},
];

const addRarity = (_str) => {
    let itemRarity;
    rarity.forEach((r) => {
        if(_str.includes(r.key)){
            itemRarity = r.val;
        }
    })
};

const cleanName = (_str) => {
    let name = _str.slice(0, -4);
    rarity.forEach((r) => {
        name = name.replace(r.key, "");
    });
    return name;
}

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i, index) => {
            return {
                id: index + 1,
                name: cleanName(i),
                fileName: i,
                rarity: addRarity(i),
            };
        });
};

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