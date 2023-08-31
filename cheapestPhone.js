const phones = [
    {Brand: 'Sumsung', Memory:'64gb', RAM:'4gb', Price:19000, Color:'black'},
    {Brand: 'Appo', Memory:'64gb', RAM:'4gb', Price:17000, Color:'black'},
    {Brand: 'HTC', Memory:'64gb', RAM:'4gb', Price:23000, Color:'black'},
    {Brand: 'Walton', Memory:'64gb', RAM:'4gb', Price:15000, Color:'black'},
    {Brand: 'Huawe', Memory:'64gb', RAM:'4gb', Price:25000, Color:'black'},
    {Brand: 'Apple', Memory:'64gb', RAM:'4gb', Price:65000, Color:'black'},
    {Brand: 'Sony', Memory:'64gb', RAM:'4gb', Price:50000, Color:'black'},
    {Brand: 'Lava', Memory:'64gb', RAM:'4gb', Price:25000, Color:'black'},
    {Brand: 'Symphoni', Memory:'64gb', RAM:'4gb', Price:17500, Color:'black'},
    {Brand: 'Itel', Memory:'64gb', RAM:'4gb', Price:18000, Color:'black'},
]

function cheapestPhone (phones){

    let cheapPhone = phones[0];
    for(let i =0; i<phones.length; i++){
        let phone = phones[i];
       
        if(phone.Price < cheapPhone.Price){
            cheapPhone = phone;
        }
        // console.log(phone);
    }
    return cheapPhone;
}

console.log(cheapestPhone(phones));