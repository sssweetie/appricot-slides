import help from './script.js'

const drawStories = async (data, id) => {
let stories = await help.getStories(data);

window.Zuck(document.querySelector(id), {
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

export default drawStories