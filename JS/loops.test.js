var {getSumEven, checkPrimeNum, orderSelection, binarySerch, getFactorial, getSumOfNum, revNum} = require('./loops.js')

describe('getSumEven', function(){
    it('should be defined', function(){
        expect(getSumEven).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getSumEven).toBe('function')
    })
})

describe('checkPrimeNum', function(){
    it('should be defined', function(){
        expect(checkPrimeNum).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof checkPrimeNum).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(checkPrimeNum('dfxghx')).toBe('error')
    })
    it("shouldn't work without arguments", function(){
        expect(checkPrimeNum()).toBe('error')
    })
    it("should work with one argument", function(){
        expect(checkPrimeNum(3)).toBe('простое')
    })
    it("should work with more, then one argument", function(){
        expect(checkPrimeNum(4, 6, 7)).toBe('не простое')
    })
})

describe('orderSelection', function(){
    it('should be defined', function(){
        expect(orderSelection).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof orderSelection).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(orderSelection('dfxghx')).toBe('error')
    })
    it("shouldn't work without arguments", function(){
        expect(orderSelection()).toBe('error')
    })
    it("should work with one argument", function(){
        expect(orderSelection(10)).toBe(3)
    })
    it("should work with more, then one argument", function(){
        expect(orderSelection(4, 6, 7)).toBe(2)
    })
})

describe('binarySerch', function(){
    it('should be defined', function(){
        expect(binarySerch).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof binarySerch).toBe('function')
    })

    it('should work only with numbers', function(){
        expect(binarySerch('dfxghx')).toBe('error')
    })
    it("shouldn't work without arguments", function(){
        expect(binarySerch()).toBe('error')
    })
    it("should work with one argument", function(){
        expect(binarySerch(10)).toBe(3)
    })
    it("should work with more, then one argument", function(){
        expect(binarySerch(4, 6, 7)).toBe(2)
    })
})

describe('getFactorial', function(){
    it('should be defined', function(){
        expect(getFactorial).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getFactorial).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getFactorial('dfxghx')).toBe('error')
    })
    it("shouldn't work without arguments", function(){
        expect(getFactorial()).toBe('error')
    })
    it("should work with one argument", function(){
        expect(getFactorial(10)).toBe(3628800)
    })
    it("should work with more, then one argument", function(){
        expect(getFactorial(4, 6, 7)).toBe(24)
    })
})

describe('getSumOfNum', function(){
    it('should be defined', function(){
        expect(getSumOfNum).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getSumOfNum).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getSumOfNum('dfxghx')).toBe('error')
    })
    it("shouldn't work without arguments", function(){
        expect(getSumOfNum()).toBe('error')
    })
    it('should work with negative numbers', function(){
        expect(getSumOfNum(-333)).toBe(9)
    })
})

describe('revNum', function(){
    it('should be defined', function(){
        expect(revNum).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof revNum).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(revNum('dfxghx')).toBe('error')
    })
    it("shouldn't work without arguments", function(){
        expect(revNum()).toBe('error')
    })
    it("shouldn't work with negative numbers", function(){
        expect(revNum(-333)).toBe('error')
    })
    it("should work with one argument", function(){
        expect(revNum(10123)).toBe(32101)
    })
    it("should work with more, then one argument", function(){
        expect(revNum(45665, 6, 7)).toBe(56654)
    })
})