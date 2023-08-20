import { removerFunc } from "./remover";
const contactDiv1 = document.createElement('div');
const contactDivPara1 = document.createElement('h2');
const contactDivPara2 = document.createElement('p');
contactDivPara1.textContent = `Mister Floobel`;
contactDivPara2.textContent = `FloobenNumber: 99123 \n\n FloobenMail: FloobelDoobel@floob.flibb`;
contactDiv1.appendChild(contactDivPara1);
contactDiv1.appendChild(contactDivPara2);


const contactDiv2 = document.createElement('div');
const contactDiv2Para1 = document.createElement('h1');
const contactDiv2Para2 = document.createElement('p');
contactDiv2Para1.textContent = 'Missus Floopsiken';
contactDiv2Para2.textContent = 'Flooben Number: 9927321 \n\n FloobenMail: Floopsikies@floob.flibb';
contactDiv2.appendChild(contactDiv2Para1);
contactDiv2.appendChild(contactDiv2Para2);

const contactFunc = () => {
    removerFunc()
    document.body.appendChild(contactDiv1);
    document.body.appendChild(contactDiv2);
}

export{
    contactFunc,
}