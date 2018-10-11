const { expect } = require('chai');
const CamelCase = require('./index');

describe('Camel Case test', ()=>{
    it('return an error when an integer is provided',() =>{
        const CamelCases = CamelCase(20);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when a empty function is provided',() =>{
        const CamelCases = CamelCase(function(){});
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when an empty array is provided',() =>{
        const CamelCases = CamelCase([]);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when an array of integers is provided',() =>{
        const CamelCases = CamelCase([1,2,3,4,5]);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when an array of strings is provided',() =>{
        const CamelCases = CamelCase(['mocha_hot', "chai_hotter"]);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when an object is provided',() =>{
        const CamelCases = CamelCase({mocha:"cool_tr",chai:'Cool_er'});
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when a float is provided',() =>{
        const CamelCases = CamelCase(0.333);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })
    
    it('return an error when a variable of an integer is provided',() =>{
        const CamelCases = CamelCase(string = 21);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when a boolean is provided',() =>{
        const CamelCases = CamelCase(true);
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })

    it('return an error when a variable of an empty object is provided',() =>{
        const CamelCases = CamelCase({});
        
        expect(CamelCases).to.equal('Parameter word should be a string');
    })
})