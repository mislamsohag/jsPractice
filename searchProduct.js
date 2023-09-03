

const products=[
    {id: 1, brand:'sumsunag glacxi', price:20000},
    {id: 2, brand:'xaimi phone', price:20000},
    {id: 3, brand:'sumsunag note7', price:20000},
    {id: 4, brand:'Appo Phone', price:20000},
    {id: 5, brand:'Mac Book Air', price:20000},
    {id: 6, brand:'Lanove Laptop', price:20000},
    {id: 7, brand:'sumsunag Laptop Pro', price:20000},
    {id: 8, brand:'Accer phone', price:20000},
    {id: 9, brand:'Wolton Primio Phone', price:20000},
    {id: 10, brand:'Redmi As3', price:20000},
]

function searchProducts(products, search){
let phone=[];
    for (const product of products){
        if(product.brand.toLowerCase().includes(search.toLowerCase())){
            phone.push(product);
        }
    }
    return phone;
}

let result= searchProducts(products, 'phone');

console.log(result);