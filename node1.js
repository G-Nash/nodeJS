function test(){
    console.log("Inside test")
    return "hello"
}

function add(x,y){
    return x+y
}


var x="nash"
module.exports={fun1:test, x:x,add:add}