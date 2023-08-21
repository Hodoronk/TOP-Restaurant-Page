import { load } from "./initialPageLoad";
const elements = load();


const removerFunc = () => {
    const parent = document.querySelector('#content');
    for(let child of parent.children){
        if(!child.classList.contains('stable')){
            child.remove();
        }
    }
}

export{
    removerFunc,
}