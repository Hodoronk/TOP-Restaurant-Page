import { load } from "./initialPageLoad";
const elements = load();


const removerFunc = () => {
    elements.presentationPara.remove();
    elements.locationPara.remove();
    elements.hoursPara.remove();
    elements.hours.remove();
    elements.location.remove();
    elements.presentation.remove();
}

const personalRemover = (...args) => {
    for (const arg of args){
        arg.remove();
    }
}


export{
    removerFunc,
    personalRemover,
}