console.log("Register page");
let salon={
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"758",
        zip:"22569",
        state:"CA",
        city:"San Diego",
    },
    hours:{
        open:"9:00 am",
        close:"20:00 pm",
    },
    pets:[
        
    ]
}
//create a Pet intructor
let x=0;
function Pet(name,age,gender,breed,service,ownerName,contactPhone,payment){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    this.id=x++;
    this.payment=payment;
}
let Scooby=new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555","555555");
console.log(Scooby);

let Brian=new Pet("Brian",40,"Male","Mutt","Friend","Peter","555-555-5555","555555");
console.log(Brian);

let Roger=new Pet("Roger",1600,"Male","Alien","Friend","Stan","555-555-5555","555555");
console.log(Roger);
salon.pets.push(Scooby,Brian,Roger);
console.log(salon.pets);
displayCards(Scooby);
displayCards(Brian);
displayCards(Roger);
//create three pets using the contructor
//get the values from the input
let txtName=document.getElementById("petName"); 
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender"); 
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService"); 
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone"); 
let txtPayment=document.getElementById("paymentMethod")

function register(){
    console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,);
    //create the contructor using th values from the input
    let newPet= new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtPayment.value)
    //push itinto the array
    salon.pets.push(newPet)
    //display the pet on the console
    console.log(salon.pets)
    //clear the inputs
    displayCards(newPet);
    clear();
}

function clear(){
    txtName.value = '';
    txtAge.value = '';
    txtGender.value = '';
    txtBreed.value = '';
    txtService.value ='';
    txtOwner.value = '';
    txtPhone.value = '';
    txtPayment.value = '';
}

function simpleDisplay(){
    //dispaly scooby on the console 
    console.log(salon.pets[0].name);  
}
simpleDisplay();
function deletePet(petId){
    console.log("Delete pet "+petId);
    let indexDelete;
    //search the pet
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        if(petId===pet.id){
            indexDelete=i;
        }
    }
    //delete from the html
    document.getElementById(petId).remove();
    //delete from the array
    salon.pets.splice(indexDelete,1);
}
function searchPet(){
    let searchString=document.getElementById("searchPet").value;
    for(let i=0;i<salon.pets.length;i++){
        if(searchString==salon.pets[i].name){
            document.getElementById(salon.pets[i].id).classList.add("highlight");
        }
    }
    console.log(searchString);

}