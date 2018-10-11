const regex = /[\W_]+/g; //this check for string "_"
const Dase = "snake_case";//test i did earlier

// console.log(Dase[Dase.search(regex)]);
// console.log(Dase.toLowerCase().replace(/[\W_]+/g,'')

const camelCase = ($word) =>{
     if (typeof $word !== 'string'){
         return 'Parameter word should be a string';
     }
    $word = $word.toLowerCase().replace(regex, ' ');
    $word = $word.split(" ");
    $getArrayLength = $word[1].length;
    $append = $word[1].substring(1,$getArrayLength);
    $word = $word[0] + $word[1][0].toUpperCase() + $append;
    $word=$word.toString();
    return $word;

    
}
console.log(camelCase('camel_case'));

// credits to stackoverflow & w3schools
module.exports = camelCase;