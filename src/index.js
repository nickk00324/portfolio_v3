import { videoSelector } from './video_loader';
import { circleMover } from './circle_mover';
import { addLinks } from './links';

import { artPics } from './art_pics';
import { designPics } from './design_pics';
import { projectPics } from './project_pics';

const contentGrid = document.getElementById("content-grid");
contentGrid.addEventListener('click', () => {
    while(contentGrid.firstChild){
        contentGrid.removeChild(contentGrid.firstChild);
    }
});

const links = document.getElementsByClassName("content-link");

window.addEventListener('DOMContentLoaded', (e) =>{
    videoSelector();
    circleMover();
    if(links){
        addLinks(contentGrid, artPics, links);
        addLinks(contentGrid, designPics, links);
        addLinks(contentGrid, projectPics, links);
    } 
})