const phones = [
    {Brand: 'Sumsung', Memory:'64gb', RAM:'4gb', Price:19000, Color:'black', Quantity:2},
    {Brand: 'Appo', Memory:'64gb', RAM:'4gb', Price:17000, Color:'black', Quantity:1},
    {Brand: 'HTC', Memory:'64gb', RAM:'4gb', Price:23000, Color:'black', Quantity:6},
    {Brand: 'Walton', Memory:'64gb', RAM:'4gb', Price:15000, Color:'black', Quantity:3},
    {Brand: 'Huawe', Memory:'64gb', RAM:'4gb', Price:25000, Color:'black', Quantity:1},
    {Brand: 'Apple', Memory:'64gb', RAM:'4gb', Price:65000, Color:'black', Quantity:2},
    {Brand: 'Sony', Memory:'64gb', RAM:'4gb', Price:50000, Color:'black', Quantity:5},
    {Brand: 'Lava', Memory:'64gb', RAM:'4gb', Price:25000, Color:'black', Quantity:4},
    {Brand: 'Symphoni', Memory:'64gb', RAM:'4gb', Price:17500, Color:'black', Quantity:1},
    {Brand: 'Itel', Memory:'64gb', RAM:'4gb', Price:18000, Color:'black', Quantity:2},
]


function sumOfArray (phones){
    let sum =0;
    for(let i=0; i<phones.length; i++){
        let phone=phones[i];
        sum = sum+(phone.Price*phone.Quantity);
        // console.log(sum);
    }
    return sum;
}

const result = sumOfArray(phones);

console.log(result);