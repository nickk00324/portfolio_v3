import KF from '../assets/videos/KFDS_6.mp4';
import BMR from '../assets/videos/BMR.mp4';
import ROSPB from '../assets/videos/ROSPB.mp4';
import V7E from '../assets/videos/V7E.mp4';

const videosArray = [KF, BMR, ROSPB, V7E];

const videoRandomizer = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const videoSelector = () => {
    let selected = videoRandomizer(videosArray);
    let src = document.createElement('source');
    src.setAttribute('src', `./dist/${selected}`)
    let video = document.getElementById('bg-video');
    video.appendChild(src);
}
