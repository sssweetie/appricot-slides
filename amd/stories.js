import getStories from '../script.js'

import Zuck from '../node_modules/zuck.js'

const drawStories = (data, id) => {
    let stories = getStories(data);

    Zuck(document.querySelector(id), {
        backNative: true,
        previousTap: true,
        skin: 'Default',
        autoFullScreen: false,
        avatars: true,
        paginationArrows: false,
        list: false,
        cubeEffect: true,
        localStorage: true,
        stories
    });
}

export default drawStories