function outer()
{
    let count=0;
    console.log(`Global ${count}`);
    function inner()
    {
        count++;
        console.log(count);
    }  
    return inner;
}

const counter=outer();
counter();
counter();
counter();

outer();
outer();
outer();


{
    let secret="123";
    var display =()=>
    {
        console.log(secret);
    }
}

display();

/*
function o(){
    const c=0;
    function i(){
        console.log(c);
    }
    return c;
}
*/

