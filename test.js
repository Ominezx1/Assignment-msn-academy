const { expect } = require('chai');
const arrayReverse = require('./index');

describe('arrayReverse check',()=>{
    it('return an error if string is provided',()=>{
        const arrayReverses = arrayReverse('This is a string');

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if empty object is provided',()=>{
        const arrayReverses = arrayReverse({});

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if an integer is provided',()=>{
        const arrayReverses = arrayReverse(12);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if an integer parsed as a string is provided',()=>{
        const arrayReverses = arrayReverse('49');

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if an array parsed as a string is provided',()=>{
        const arrayReverses = arrayReverse('[1,2,3,4]');

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if a function is provided',()=>{
        const arrayReverses = arrayReverse(function(){});

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if a float is provided',()=>{
        const arrayReverses = arrayReverse(0.333);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if a function callback is provided',()=>{
        const arrayReverses = arrayReverse(arrayReverse());

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if null is provided',()=>{
        const arrayReverses = arrayReverse(null);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if NaN is provided',()=>{
        const arrayReverses = arrayReverse(NaN);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if undefined is provided',()=>{
        const arrayReverses = arrayReverse(undefined);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if infinity is provided',()=>{
        const arrayReverses = arrayReverse(1/0);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if negative infinity is provided',()=>{
        const arrayReverses = arrayReverse(-1/0);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if no input is provided',()=>{
        const arrayReverses = arrayReverse();

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if boolean is provided',()=>{
        const arrayReverses = arrayReverse(true);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if empty string is provided',()=>{
        const arrayReverses = arrayReverse('');

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if infinity is provided',()=>{
        const arrayReverses = arrayReverse(1/0);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if array nested in object is provided',()=>{
        const arrayReverses = arrayReverse({$array:[1,2,4,4], $array2:[3,45,5,]});

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if array is concatenated with string is provided',()=>{
        const arrayReverses = arrayReverse([1,2,3,4]+"5");

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })

    it('return an error if an array is added or concatenated with an integer is provided',()=>{
        const arrayReverses = arrayReverse([1,2,4]+1+2);

        expect(arrayReverses).to.equal('Parameter array should be an array');
    })
})