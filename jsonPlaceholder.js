

function jsonCall(){
    url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res=>res.json())
    .then(data=>view(data))
}

function view(data){
    const div=document.querySelector('.card');
    for(let i=0; i<data.length; i++){
        // let result=data[i];
        const h3 = document.createElement('h3');
        h3.innerText = `Name: ${data[i].name}`;
        div.appendChild(h3)
        
        const p = document.createElement('p');
        p.innerText = `Id: ${data[i].id}`;
        div.appendChild(p)
        
        const h4 = document.createElement('h4');
        h4.innerText = `User Name: ${data[i].username}`;
        div.appendChild(h4)
        // console.log(data[i]);
    }
}