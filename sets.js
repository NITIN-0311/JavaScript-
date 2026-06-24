


let myset=new Set([1,2,3,4,5,5]);
console.log(myset);

let copy= myset.entries();
let keys=myset.values();//myset.keys()
console.log(copy);
console.log(keys);
//myset=null;
myset.delete(10);// Can handle does not exist
myset.clear();
console.log(myset);



/* 

Set
│
├─ Properties
│  └─ size
│
├─ Add
│  └─ add
│
├─ Remove
│  ├─ delete
│  └─ clear
│
├─ Check
│  └─ has
│
├─ Iteration
│  ├─ forEach
│  ├─ values
│  ├─ keys
│  └─ entries
│
├─ Iterators
│  ├─ values
│  ├─ keys
│  ├─ entries
│  └─ Symbol.iterator
│
├─ Creation
│  └─ new Set()
│
└─ ES2024+ Set Operations
   ├─ union
   ├─ intersection
   ├─ difference
   ├─ symmetricDifference
   ├─ isSubsetOf
   ├─ isSupersetOf
   └─ isDisjointFrom
*/