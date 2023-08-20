import { load } from "./initialPageLoad";
const elements = load();


const removerFunc = () => {
    console.log('Elements called are ', elements)
    elements.presentationPara.remove();
    elements.locationPara.remove();
    elements.hoursPara.remove();

}




export{
    removerFunc,
}