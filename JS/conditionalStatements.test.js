var {multiSum, getQuarter, sumPosNum, calcExp, getMark} = require('./conditionalStatements.js')

describe('multiSum', function(){
    it('should be defined', function(){
        expect(multiSum).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof multiSum).toBe('function')
    })
    it('should work with two arguments', function(){
        expect(multiSum(4,2)).toBe(8)
    })
    it('should work with two arguments', function(){
        expect(multiSum(3,4)).toBe(7)
    })
    it('should work only with numbers', function(){
        expect(multiSum('4', '5')).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(multiSum('6',2)).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(multiSum(1,'gf')).toBe('error')
    })
    it('should work without arguments', function(){
        expect(multiSum()).toBe(0)
    })
    it('should work with one argument', function(){
        expect(multiSum(3)).toBe(3)
    })
    it('should work with one argument', function(){
        expect(multiSum(4)).toBe(0)
    })
})

describe('getQuarter', function(){
    it('should be defined', function(){
        expect(getQuarter).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getQuarter).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getQuarter('4', '5')).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(getQuarter('6',2)).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(getQuarter(1,'gf')).toBe('error')
    })
    it('should work without arguments', function(){
        expect(getQuarter()).toBe("your point at the beginning of the coordinate axes")
    })
    it('should work with one argument', function(){
        expect(getQuarter(3)).toBe('your point between first and fourth quater')
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(1,3)).toBe("your point in the first quarter")
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(-2,5)).toBe("your point in the second quarter")
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(-2,-6)).toBe("your point in the third quarter")
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(3.1,-4)).toBe("your point in the fourth quarter")
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(0,2)).toBe("your point between first and second quater")
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(-2.4, 0)).toBe("your point between second and third quater")
    })
    it('should work with two different arguments', function(){
        expect(getQuarter(0,-3)).toBe("your point between third and fourth quater")
    })
    it('should work correct with two different arguments', function(){
        expect(getQuarter(0,4)).not.toBe("your point between third and fourth quater")
    })
    it('should work correct with two different arguments', function(){
        expect(getQuarter(-2.4, 0)).not.toBe("your point between third and fourth quater")
    })
})

describe('sumPosNum', function(){
    it('should be defined', function(){
        expect(sumPosNum).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof sumPosNum).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(sumPosNum('4', '5','-2')).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(sumPosNum('6',2, -1)).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(sumPosNum(1,'gf',7)).toBe('error')
    })
    it('should work without arguments', function(){
        expect(sumPosNum()).toBe('there is no any positive number')
    })
    it('should work with one argument', function(){
        expect(sumPosNum(3)).toBe(3)
    })
    it('should work with two argument', function(){
        expect(sumPosNum(4,3)).toBe(7)
    })
    it('should work negative arguments', function(){
        expect(sumPosNum(-2,-5.3, -5)).toBe('there is no any positive number')
    })
})

describe('calcExp', function(){
    it('should be defined', function(){
        expect(calcExp).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof calcExp).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(calcExp('4', '5','-2')).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(calcExp('6',2, -1)).toBe('error')
    })
    it("shouldn't work even with one agrg not number", function(){
        expect(calcExp(1,'gf',7)).toBe('error')
    })
    it('should work without arguments', function(){
        expect(calcExp()).toBe(3)
    })
    it('should work with one arguments', function(){
        expect(calcExp(3)).toBe(6)
    })
    it('should work with two arguments', function(){
        expect(calcExp(2,4)).toBe(9)
    })
    it('should work with negative arguments', function(){
        expect(calcExp(-3,1,1)).toBe(2)
    })
})

describe('getMark', function(){
    it('should be defined', function(){
        expect(getMark).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getMark).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getMark('4')).toBe('error')
    })
    it('should work with interval 0-19', function(){
        expect(getMark(4)).toBe('F')
    })
    it('should work with interval 20-39', function(){
        expect(getMark(35)).toBe('E')
    })
    it('should work with interval 40-59', function(){
        expect(getMark(50)).toBe('D')
    })
    it('should work with interval 60-74', function(){
        expect(getMark(60)).toBe('C')
    })
    it('should work with interval 75-89', function(){
        expect(getMark(88)).toBe('B')
    })
    it('should work with interval 90-100', function(){
        expect(getMark(98)).toBe('A')
    })
    it("shouldn't work with negative numbers", function(){
        expect(getMark(-3)).toBe('Try again')
    })
    it("shouldn't work with numbers bigger then 100", function(){
        expect(getMark(174)).toBe('Try again')
    })
})