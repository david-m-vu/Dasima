import { v4 as uuidv4 } from "uuid";

const IMAGES = [
    {link: require("./photos/hitomi1.jpg"), id: uuidv4()},
    {link: require("./photos/hitomi2.png"), id: uuidv4()},
]

// SSS Era Music Shows
let pathToImage = "";
for (let i = 1; i <= 39; i++) {
    if (i < 10) {
        pathToImage = `./photos/0${i}.jpg`;
    } else {
        pathToImage = `./photos/${i}.jpg`;
    }
    IMAGES.push({link: require(`${pathToImage}`), id: uuidv4()});
}

// od images
for (let i = 1; i <= 95; i++) {
    if (i < 10) {
        pathToImage = `./photos/od0${i}.jpg`;
    } else {
        pathToImage = `./photos/od${i}.jpg`;
    }
    IMAGES.push({link: require(`${pathToImage}`), id: uuidv4()});
}

// dazed iamges
for (let i = 1; i <= 63; i++) {
    if (i < 10) {
        pathToImage = `./photos/d0${i}.jpg`;
    } else {
        pathToImage = `./photos/d${i}.jpg`;
    }
    IMAGES.push({link: require(`${pathToImage}`), id: uuidv4()});
}

export default IMAGES;