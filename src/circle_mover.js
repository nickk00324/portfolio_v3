const circle = document.getElementsByClassName('circle')[0];

export const circleMover = () => {
    setInterval( () => {
        let leftRand = Math.floor(Math.random() * window.innerWidth);
        let topRand = Math.floor(Math.random() * window.innerHeight);
        circle.style.left = `${leftRand}px`;
        circle.style.top = `${topRand}px`;

    }, 10000)
}