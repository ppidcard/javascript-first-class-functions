
function receivesAFunction (fn){
     return fn();
}
receivesAFunction(spy);

function named(){
    console.log("This is a named function!")
}
named();
function returnsANamedFunction(){
    return named;
}

function returnsAnAnonymousFunction (){
    return function(){
        console.log("Hi")
    }
}