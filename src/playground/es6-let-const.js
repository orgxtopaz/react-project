var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
//JSX -JS XML

//FUNCTION IF LOCATION EXIST OR NOT

// var obj={
     
//     "name":"migz",
//     "age":2,
//     "location":"Naay Location"
// }

// function checkLocation(location){
//     if(location){
//         return location;
//     }else{
//         return "Walay Location";
//     }

// }


// var template =(
//     <div> 
       
//         <h1>Name:{obj.name}</h1>
//         <h1>Age:{obj.age}</h1>
//         <h1>Location:{checkLocation(obj.location)}</h1>
//         <input type="text" id="myInput"></input>


//     </div>);


// var obj={
     
//     "name":"migz",
//     "age":2,
//     "location":"Naay Location"
// }

// function checkLocation(location){
//     if(location){
//         return location;
//     }else{
//         return "Walay Location";
//     }

// }

//----------------------------------------
// var template =(
//     <div> 
       
//         <h1>Name:{obj.name}</h1>
//         <h1>Age:{obj.age}</h1>
//         <h1>Location:{checkLocation(obj.location)}</h1>
//         <input type="text" id="myInput"></input>


//     </div>);
// --------------------------------------------

// let count =0;

// const addOne = () =>{
//     count+=1;
//    renderAddTemplate();
//  }
//  const minusOne =() =>{
//      count--;
//      renderAddTemplate();
//  }

//  const reset = ()=>{
//      count=0;
//      renderAddTemplate();
//  }

//-----------FORM SUBMIT