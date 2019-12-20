import { videoSelector } from './video_loader';
import { circleMover } from './circle_mover';
import { addListenersToLinks } from './nav_links';

window.addEventListener('DOMContentLoaded', (e) =>{
    videoSelector();
    circleMover();
    addListenersToLinks();
})