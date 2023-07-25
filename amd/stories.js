import help from '../script.js'

const Zuck = require('zuck.js');

module.exports = {
    drawStories: (data, id) => {
        let stories = help.getStories(data);
        
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
        });}
}