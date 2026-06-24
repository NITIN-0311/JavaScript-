//import { intern } from "./datatypes.js";

/*
| Method    | Returns   | Use When            |
| --------- | --------- | ------------------- |
| forEach() | Nothing   | Perform actions     |
| map()     | New array | Transform data      |
| flat()    | New array | Remove nesting      |
| flatMap() | New array | Transform + flatten |

Infinity - Anything greater than 1.79 x 10^308
or anything divides by zero;

*/
let orgArray=[1,2,3,4,5];

//Map function
let newArray= orgArray.map( (element,i,optionalOrgArray)=>
    {
        element+=2;
        console.log(`Element added : ${element}`);
        return element;
    }
);

//For each
console.log("mapping new array : ",newArray);

let new_result = orgArray.forEach( (element,index,orgArray)=>
    {
        console.log("Element : ",element,"Index : ",index);
        console.log(orgArray);
        return element;// returns nothing / discarded
    }
);

let nested_array = [1,2,3,[4,5,6,[7,8,9]]];
console.log(nested_array.flat(1));
//flat(<number of [] outermost brackets to remove>)

console.log(nested_array.flat(Infinity));
console.log("new result ",new_result);//for each array


//Flat Map
const wordsArray=["Hello interns"];
const res=wordsArray.flatMap( (words)=> {words.split("")
    return words;
}
);

console.log("flat map result : ",res);


const movies = ["Iron Man", "The Avengers"];

const flatMapResult = movies.flatMap(title => title.split(" "));
// Output: ["Iron", "Man", "The", "Avengers"]        <-- Flat Array!

const mapResult = movies.map(title => title.split(" "));
// Output: [ ["Iron", "Man"], ["The", "Avengers"] ]  <-- Nested Array!


///---------Filtering and Searching

const nums=[1,2,3,4,5];

const even = nums.filter(
    (num)=>{
       return num % 2 ==0;
    }
);

console.log("\nArray properties\n");
console.log("Checking is Array : ",Array.isArray(nums));
console.log("Filtered data : ",even);
console.log("array length : ",nums.length);
console.log("reverse sort array length : ",nums.sort((a,b)=>b-a));
console.log("last element : ",nums[nums.length-1])
nums[nums.length]=6 // Adding element at the last
//negative keep a - positive keep b

console.log("\nArray Functions\n");

console.log("Printing last value : ",nums.at(-1));
console.log("Pushing value : ",nums.push(7));
console.log(nums.toString());
console.log(nums[4].toString(2));//Binary value of 5
console.log(nums.join("-"));// joining elements with delimited
nums.shift()
console.log(nums);
nums.unshift(100)
console.log("after unshift : ",nums);
nums.shift();
console.log("after shift : ",nums);

delete nums[0];
console.log(nums);


let nums2=[11,12,13];
let nums3=[21,22];

let total=nums.concat(nums2,nums3);
//delete total[]; throws error
//total=[]
console.log("total : ",total);
console.log("reverse : ",total.reverse());

let t=orgArray.reduce((accumalte,current)=>
{
    return accumalte+current;
});
console.log("reduced : ",t);

/*

Properties
├─ length

Access
├─ at

String Conversion
├─ toString
├─ join

Add
├─ push
├─ unshift

Remove
├─ pop
├─ shift
├─ delete

Modify
├─ splice
├─ toSpliced

Copy / Extract
├─ slice
├─ copyWithin

Merge
├─ concat

Flatten
├─ flat
├─ flatMap

Search
├─ indexOf
├─ lastIndexOf
├─ includes
├─ find
├─ findIndex
├─ findLast
├─ findLastIndex

Sort
├─ sort
├─ reverse
├─ toSorted
├─ toReversed

Iteration
├─ forEach
├─ map
├─ filter
├─ reduce
├─ reduceRight
├─ every
├─ some

Creation
├─ Array.from
├─ Array.of
├─ Array.isArray

Fill
├─ fill

Iterators
├─ entries
├─ keys
├─ values

Immutable ES2023+
├─ toSpliced
├─ toSorted
├─ toReversed
├─ with
 */