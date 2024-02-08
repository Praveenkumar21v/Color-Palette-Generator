const container=document.querySelector('.container')
const refreshbtn=document.querySelector('.refresh');
const maxPaletteBoxes=12;
const generatePality=()=>{
    container.innerHTML=''
    for(let i=0;i<maxPaletteBoxes;i++){
        let randomHex=Math.floor(Math.random()*0xffffff).toString(16);
        randomHex=`#${randomHex.padStart(6,"0")}`;
        const color=document.createElement('li');
        color.classList.add('color');
        color.innerHTML=`<div class="box" style='background:${randomHex}'></div>
        <span class="hexValue">${randomHex}</span>`
        color.addEventListener('click',()=>copyColor(color,randomHex));
        

        container.appendChild(color)
    }
}
generatePality();
const copyColor=(ele,hex)=>{
const colorElement=ele.querySelector('.hexValue');
navigator.clipboard.writeText(hex).then(()=>{
colorElement.innerHTML='Copied';
setTimeout(()=>colorElement.innerHTML=hex,1000)
}).catch(()=> alert('Failed to copy the color'))
}
refreshbtn.addEventListener('click',generatePality);
