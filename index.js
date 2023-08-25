

let submitButton=document.getElementById('btn');
submitButton.style.backgroundColor="red";
submitButton.style.padding='20px';
submitButton.style.borderRadius='10px';
submitButton.style.color='#fff';
submitButton.innerHTML='Submit Button';


let liDocument=document.getElementsByTagName('li');
        for(const li of liDocument){
            // console.log(li.innerText);
        }

let naikasName=document.getElementsByClassName('naikas');
// for (let naika of naikasName)

for (let i=0; i<naikasName.length; i++){
    let naika=naikasName[i];
    // console.log(naika);
    
    naika.style.color='red'
}

let heading=document.querySelector('.heading');
console.log(heading.innerText='Hello Java Script');

let li=document.querySelectorAll('.naika li');
for (let naikaList of li)
console.log(naikaList);

