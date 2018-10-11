const SevenUP = (num) =>{
    if(!Number.isInteger(num)) {
        return 'Parameter num should be a number';
      }
 let value = [];
 let $num = num/7;
 for (i=0; i<$num;i++){
     value.push("SevenUp");
 }
 return value;
 
}
console.log(SevenUP(49));

module.exports = SevenUP;