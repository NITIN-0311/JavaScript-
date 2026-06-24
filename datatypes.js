/* 
1.Undefined(declared but not defined) Usages

a. When missing to pass actual arguments required by 
the calling function
b.When handling out of bounds in iterations
c. main usage - to handle reference error 

2.Null(declared and defined empty) Usages

a.Clearing/resetting a value
b.when representing no results found. 
eg: usernmae does'nt exist in the database

Null vs Undefined

1.Null can be used in Arithmetic Operations but undefined
cannot
2.undefined is removed when using stringfy. JSON Object 
removes the undefined values

Object

1.Functions are also keys of its object

*/

export let intern ={
    firstName:"nitin",
    lastName:"marimuthu",
    middleName:null,
    age:21,
    location:"chennai",
    isMarried:false,
    role:undefined,

    displayAbstract()
    {
        const keys = Object.keys(this);
        for(let i=0;i<keys.length;i++)
        {
            const key=keys[i];
            console.log(keys[i]," : ",this[key]);
        }
    },

    display_types()
    {
        const keys=Object.keys(this);
        
        for(let i=0;i<keys.length;i++)
        {
            const key=keys[i];            
            console.log("key : ",key," type : ",typeof this[key])
        }

    }
};

intern.displayAbstract();
intern.display_types();

let json_data= JSON.stringify(intern);
console.log("json data : ",json_data);

//---------------------------------------

let coInterns=["Shyam","Jothi","Thenmozhi"];

coInterns.push("Tharun");
console.log(coInterns);

coInterns.shift();
console.log(coInterns);

/* 
splice(start,deleteCount,item1,item2 ... item n);
*/

coInterns.splice(1,1,"Aishwariya"); // 
console.log(coInterns);

let extracted_data=coInterns.slice(1,2); // start to end-1
console.log(extracted_data);

let copy=coInterns.slice();
console.log(coInterns);


const colors = ['Red', 'Green', 'Blue'];
const newColors = colors.toSpliced(1, 1, 'Yellow');
console.log(newColors); // Output: ['Red', 'Yellow', 'Blue']
console.log(colors);    // Output: ['Red', 'Green', 'Blue'] (Unchanged)

coInterns=null;
console.log('copy : ',copy);


let student = new Map();

student.set("name","nitin");
student.set("age",21);

const moves = Object.freeze({
    ATTACK: 1,
    HEAL: 2,
    DEFENSE: 3
});
let m =1;

switch(m)
{
    case moves.ATTACK:
    {
        console.log("Player chose attack");
        break;
    }
}