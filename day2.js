//question-1
checkNum=(num)=>{
    if(num>0){
        console.log("positive number");
    }
    else
    console.log("negative number");
}
checkNum(5);
checkNum(-4);


//question-2

largestNum=(para)=>{
    
    let large=para[0]
    for(let i=0;i<para.length;i++)
    {
        if(para[i]>large)
        {
            large=para[i]
        }
    }
    console.log(large);
}
let arr=[21,45,67,34,12]
largestNum(arr)


//question-3

let obj={
    area(r,h){
        return (3.141*r*r*h)
    }
}
console.log(obj.area(2,10));

//question-4
var temp= 'hi';
function display(){
    console.log(temp);
    var temp = 'bye';
};
display();
// The output of above code is undefined.

// In JavaScript, variable declarations are hoisted to the top of their scope, but not their initializations. This means that the var temp declaration inside the display function is hoisted to the top, but its assignment (var temp = 'bye';) remains in place.
// Therefore, when you call the display function, the first console.log(temp) statement is executed before the temp variable inside the function is assigned the value 'bye'. Since temp is not yet defined at that point, it is undefined