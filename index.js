const arrayReverse = ($array) =>{
    if(!Array.isArray($array)){
        return('Parameter array should be an array')
    }
    $array = $array.reverse();
    return $array;
}

console.log(arrayReverse([1,2,3,4]));

module.exports = arrayReverse;