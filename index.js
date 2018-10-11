
function arrayMul(a,b){
    if(!Array.isArray(a) && !Number.isInteger(b)){
        return "Parameter a and b should contain an array and interger respectively";
    }
    if(!Array.isArray(a)){
        return "Parameter a should be an array";
    }else if(!Number.isInteger(b)){
        return "Parameter b should be an integer";
    } 
    
    const $arr = a.map(x=>x*b);
    return $arr;
}
console.log(arrayMul([2,5,6,7],3));

module.exports = arrayMul;
