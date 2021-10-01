import fs from "fs";

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

export {getElements};