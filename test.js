const { expect } = require('chai');
const arrayMul = require('./index');

describe('Array Multiplication test :', ()=>{
    it('return error if both parameters contain string',()=>{
        const arrayMuls = arrayMul('string', 'string2');

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if only a is an array and b is a string',()=>{
        const arrayMuls = arrayMul([1,2,3,4], '20');

        expect(arrayMuls).to.equal('Parameter b should be an integer');
    })

    it('return error if only a is a string and b is an integer',()=>{
        const arrayMuls = arrayMul('[1,2,3,4]', 20);

        expect(arrayMuls).to.equal('Parameter a should be an array');
    })

    it('return error if both parameters are not provided',()=>{
        const arrayMuls = arrayMul();

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if both parameters contain objects',()=>{
        const arrayMuls = arrayMul({array:[1,2,3,4]}, {integer:2});

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if parameter a contains an array parsed as a string and parameter b an integer parsed as a string',()=>{
        const arrayMuls = arrayMul('[1,2,3,4,5]', '3');

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if both parameters contain function callback',()=>{
        const arrayMuls = arrayMul(arrayMul(),arrayMul());

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if parameter a is undefined and parameter b is an integer',()=>{
        const arrayMuls = arrayMul( undefined, 8);

        expect(arrayMuls).to.equal('Parameter a should be an array');
    })

    it('return error if parameter a is an array and parameter b is undefined',()=>{
        const arrayMuls = arrayMul( [1,2,4,5], undefined);

        expect(arrayMuls).to.equal('Parameter b should be an integer');
    })

    it('return error if parameter a is undefined and parameter b is undefined',()=>{
        const arrayMuls = arrayMul( undefined, undefined);

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if parameter a is NaN and parameter b is an integer',()=>{
        const arrayMuls = arrayMul( NaN, 8);

        expect(arrayMuls).to.equal('Parameter a should be an array');
    })

    it('return error if parameter a is an array and parameter b is NaN',()=>{
        const arrayMuls = arrayMul( [1,2,4,5], NaN);

        expect(arrayMuls).to.equal('Parameter b should be an integer');
    })

    it('return error if parameter a is NaN and parameter b is NaN',()=>{
        const arrayMuls = arrayMul( NaN, NaN);

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if parameter a is infinity and parameter b is an integer',()=>{
        const arrayMuls = arrayMul( 1/0, 8);

        expect(arrayMuls).to.equal('Parameter a should be an array');
    })

    it('return error if parameter a is an array and parameter b is infinty',()=>{
        const arrayMuls = arrayMul( [1,2,4,5], 1/0);

        expect(arrayMuls).to.equal('Parameter b should be an integer');
    })

    it('return error if parameter a is infinity and parameter b is infinity',()=>{
        const arrayMuls = arrayMul( 1/0, 1/0);

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })
    
    it('return error if parameter a is a float and parameter b is an integer',()=>{
        const arrayMuls = arrayMul( 0.333, 8);

        expect(arrayMuls).to.equal('Parameter a should be an array');
    })

    it('return error if parameter a is an array and parameter b is a float',()=>{
        const arrayMuls = arrayMul( [1,2,4,5], 0.333);

        expect(arrayMuls).to.equal('Parameter b should be an integer');
    })

    it('return error if parameter a is float and parameter b is float',()=>{
        const arrayMuls = arrayMul( 0.555, 0.433);

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if parameter a is boolean and parameter b is an integer',()=>{
        const arrayMuls = arrayMul( false, 8);

        expect(arrayMuls).to.equal('Parameter a should be an array');
    })

    it('return error if parameter a is an array and parameter b is a boolean true',()=>{
        const arrayMuls = arrayMul( [1,2,4,5], true);

        expect(arrayMuls).to.equal('Parameter b should be an integer');
    })

    it('return error if parameter a is a boolean true and parameter b is a boolean false',()=>{
        const arrayMuls = arrayMul( true, false);

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })

    it('return error if parameter a is a boolean true and parameter b is a boolean true',()=>{
        const arrayMuls = arrayMul( true, true);

        expect(arrayMuls).to.equal('Parameter a and b should contain an array and interger respectively');
    })
})