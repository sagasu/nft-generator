const dir = __dirname;
const width = 1000;
const height = 1000;

const getElements = (path) => {
    return fs
        .readdirSync(path)
        .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
        .map((i, index) => {
            return {
                id: index + 1,
                name: cancelAnimationFrame(i),
                fileName: i,
                rarity: addRarity(i),
            };
        });
};

const layers = [
    {
        id: 1,
        name: "background",
        location: `${dir}/background/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
    {
        id: 2,
        name: "ball",
        location: `${dir}/ball/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
    {
        id: 3,
        name: "eye color",
        location: `${dir}/eye color/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
    {
        id: 4,
        name: "iris",
        location: `${dir}/iris/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
    {
        id: 5,
        name: "shine",
        location: `${dir}/shine/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
    {
        id: 6,
        name: "bottom lid",
        location: `${dir}/bottom lid/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
    {
        id: 7,
        name: "top lid",
        location: `${dir}/top lid/`,
        position: {x:0,y:0},
        size: {width: width, height: height}, 
        elements: [],
    },
];