import help from './script.js'
let stories = await help.getStories();
let currentSkin = help.getCurrentSkin();

window.Zuck(document.querySelector('#stories'), {
    backNative: true,
    previousTap: true,
    skin: 'Default',
    autoFullScreen: currentSkin.autoFullScreen,
    avatars: currentSkin.avatars,
    paginationArrows: currentSkin.paginationArrows,
    list: currentSkin.list,
    cubeEffect: currentSkin.cubeEffect,
    localStorage: true,
    stories
});