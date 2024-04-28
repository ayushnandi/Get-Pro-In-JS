function square(a){
    return a * a
}
function cube(b){
    return b * b
}

function somefunction(a , b , fn ){
    let s1 = fn(a);
    let s2 = fn(b);
    return s1+s2
}
console.log(somefunction(2,3,cube))
