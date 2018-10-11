const { expect } = require('chai');
const sevenUP = require('./index');

describe('sevenUP test', ()=>{
    it('return an error when a string is provided',()=>{
        const sevenUPS = sevenUP('this is a string');
        
        expect(sevenUPS).to.equal('Parameter num should be a number');
    })

    it('return an error when an empty array is provided',()=>{
        const sevenUPS = sevenUP([]);

        expect(sevenUPS).to.equal('Parameter num should be a number');
    })

    it('return an error when an array of intergers as strings is provided',()=>{
        const sevenUPS = sevenUP(['1', '2', '3', '4']);

        expect(sevenUPS).to.equal('Parameter num should be a number');
    })
    
    it('return an error when an array is provided',()=>{
        const sevenUPS = sevenUP([1, 2, 3, 4]);

        expect(sevenUPS).to.equal('Parameter num should be a number');
    })

    it('return an error when an function is provied',()=>{
        const sevenUPS = sevenUP(function(){});

        expect(sevenUPS).to.equal('Parameter num should be a number');
    })

    it('return an error when a callback of a function is provied',()=>{
        const sevenUPS = sevenUP(sevenUP(21));

        expect(sevenUPS).to.equal('Parameter num should be a number');
    })

    it('return an error when a float is provided', () => {
        const sevenUPS = sevenUP(0.333);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     it('return an error when a number provided is a string', () => {
        const sevenUPS = sevenUP('49');
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })

     it('return an error when an empty object is provied',()=>{
        const sevenUPS = sevenUP({});

        expect(sevenUPS).to.equal('Parameter num should be a number');
    })

     it('return an error when an object is provided', () => {
        const sevenUPS = sevenUP({num:21,num2:24});
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     it('return an error when an array of strings are provided', () => {
        const sevenUPS = sevenUP(["SevenUp", "SevenUp"]);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     it('return an error when a boolean are provided', () => {
        const sevenUPS = sevenUP(true);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     it('return an error when n0 input is provided', () => {
        const sevenUPS = sevenUP();
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     it('return an error when empty string is provided', () => {
        const sevenUPS = sevenUP('');
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })

     it('return an error when a number concatenated with a string is provided', () => {
        const sevenUPS = sevenUP(12 + "12");
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })

     it('return an error when undefined is provided', () => {
        const sevenUPS = sevenUP(undefined);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })

     it('return an error when null is provided', () => {
        const sevenUPS = sevenUP(null);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })

     it('return an error when NaN is provided', () => {
        const sevenUPS = sevenUP(NaN);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     it('return an error when 1/0 or infinity is provided', () => {
        const sevenUPS = sevenUP(1/0);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })

     it('return an error when -1/0 or negative infinity is provided', () => {
        const sevenUPS = sevenUP(-1/0);
        
        expect(sevenUPS).to.equal('Parameter num should be a number');        
     })
     


})