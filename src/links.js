export const addLinks = (contentGrid, linksObj, links) => {
    for(const link of links){
            link.addEventListener("click", e => {
                let selection = linksObj[e.toElement.innerText.slice(6)];
                for (const item of selection) {
                    if(item.includes('vimeo')){
                        let iframe = document.createElement('iframe');
                        iframe.setAttribute('src', `${item}`);
                        iframe.setAttribute('width', '640');
                        iframe.setAttribute('height', '364');
                        iframe.setAttribute('frameborder', '0');
                        contentGrid.appendChild(iframe);
                    } else {
                        let img = document.createElement("img");
                        img.setAttribute("src", `${item}`);
                        contentGrid.appendChild(img);
                    }   
                }
            });
   
    }
}

