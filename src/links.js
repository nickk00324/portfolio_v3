export const addLinks = (contentGrid, linksObj, links) => {
    for(const link of links){
            link.addEventListener("click", e => {
                let selection = linksObj[e.toElement.innerText.slice(6)];
                let externalLink = selection[0].includes('http') && !selection[0].includes('vimeo') ? selection[0] : null;
                for (const item of selection) {
                    if(item.includes('http') && !item.includes('vimeo')){
                        let p = document.createElement('p');
                        let a = document.createElement('a');
                        a.setAttribute('href', `${externalLink}`);
                        a.innerText = e.toElement.innerText.slice(6);
                        p.appendChild(a);
                        contentGrid.appendChild(p);
                        continue;
                    }
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
                        // if (externalLink) {
                        //   let a = document.createElement("a");
                        //   a.setAttribute("href", `${externalLink}`);
                        //   a.appendChild(img);
                        //   contentGrid.appendChild(a);
                        //   continue;
                        // }
                        contentGrid.appendChild(img);
                    }   
                }
            });
   
    }
}

