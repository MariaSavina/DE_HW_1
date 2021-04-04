var {getDay, getDistance, getStrNum2, getNumFromStr2} = require('./functions.js')

describe('getDay', function(){
    it('should be defined', function(){
        expect(getDay).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getDay).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getDay('sfbs')).toBe('error')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(1)).toBe('Mon')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(2)).toBe('Tue')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(3)).toBe('Wed')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(4)).toBe('Thu')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(5)).toBe('Fri')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(6)).toBe('Sat')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(7)).toBe('Sun')
    })
    it("shouldn't work correct with numbers not from diapason 1-7", function(){
        expect(getDay(38)).toBe('Try again')
    })
    it("shouldn't work correct with negative numbers", function(){
        expect(getDay(-1438)).toBe('Try again')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(7)).not.toBe('Fri')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(3)).not.toBe('Fri')
    })
    it('should work correct with numbers from diapason 1-7', function(){
        expect(getDay(2)).not.toBe('Sun')
    })
})

describe('getDistance', function(){
    it('should be defined', function(){
        expect(getDistance).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getDistance).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getDistance('sfbs')).toBe('error')
    })
    it('should work only with numbers', function(){
        expect(getDistance(1,2,4,'fds',4)).toBe('error')
    })
    it('should work even without any args', function(){
        expect(getDistance()).toBe(0)
    })
    it('should work only with one args', function(){
        expect(getDistance(4)).toBe(4)
    })
    it('should work only with two args', function(){
        expect(getDistance(4,2)).toBe(4.47213595499958)
    })
    it('should work only with three args', function(){
        expect(getDistance(4,2,1)).toBe(4.58257569495584)
    })
    it('should work only with four args', function(){
        expect(getDistance(4,1,1,1)).toBe(3.3166247903554)
    })
    it('should work only with five args', function(){
        expect(getDistance(1,-2,1,0,4)).toBe(6.164414002968976)
    })
    it('should work with six args', function(){
        expect(getDistance(1,1,1,3,1,1)).toBe(2)
    })
})

describe('getStrNum2', function(){
    it('should be defined', function(){
        expect(getStrNum2).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getStrNum2).toBe('function')
    })
    it('should work only with numbers', function(){
        expect(getStrNum2('sfbs')).toBe('error')
    })
    it('should work only with arguments', function(){
        expect(getStrNum2()).toBe('error')
    })
    it('should work only with numbers from 0 till 999', function(){
        expect(getStrNum2(12532)).toBe('your number not in diapason')
    })
    it("shouldn't work with negative numbers", function(){
        expect(getStrNum2(-5)).toBe('your number not in diapason')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(0)).toBe('zero')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(15)).toBe('fifteen')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(48)).toBe('fourty eight')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(204)).toBe('two hundred four')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(123)).toBe('one hundred twenty three')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(513)).toBe('five hundred thirteen')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(513)).not.toBe('one hundred')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(3)).not.toBe('four hundred three')
    })
    it("shouldn't work correct with numbers from 0 till 999", function(){
        expect(getStrNum2(22)).not.toBe('twenty seven')
    })
})

describe('getNumFromStr2', function(){
    it('should be defined', function(){
        expect(getNumFromStr2).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof getNumFromStr2).toBe('function')
    })
    it('should work only with strings', function(){
        expect(getNumFromStr2(53)).toBe('error')
    })
    it('should work only with arguments', function(){
        expect(getNumFromStr2()).toBe('error')
    })
    it("shouldn't work only with words, which doesn't mean number ", function(){
        expect(getNumFromStr2('gserfrgdf')).toBe('error')
    })
    it('should work correct with arguments, which mean number', function(){
        expect(getNumFromStr2('five hundred nine')).toBe(509)
    })
    it('should work correct with four words string, which mean number', function(){
        expect(getNumFromStr2('three hundred eighty nine')).toBe(389)
    })
    it('should work correct with one word string, which mean number', function(){
        expect(getNumFromStr2('fourteen')).toBe(14)
    })
    it('should work correct with two word string, which mean number', function(){
        expect(getNumFromStr2('ninety nine')).toBe(99)
    })
    it('should work correct with one word string, which mean number', function(){
        expect(getNumFromStr2('two')).not.toBe(99)
    })
    it('should work correct with three word string, which mean number', function(){
        expect(getNumFromStr2('five hundred ten')).not.toBe(99)
    })
})