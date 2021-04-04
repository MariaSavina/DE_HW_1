var {minEl, maxEl, minInd, maxInd, sumElOdd, arrRev, countOddElem, revHalf, bubbleSort, selSort, insSort} = require('./arrays.js')

describe('minEl', function(){
    it('should be defined', function(){
        expect(minEl).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof minEl).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(minEl(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(minEl()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(minEl([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(minEl([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(minEl([2])).toBe(2)
    })
    it('should work with various length array', function(){
        expect(minEl([3,7,1,7,9])).toBe(1)
    })
})

describe('maxEl', function(){
    it('should be defined', function(){
        expect(maxEl).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof maxEl).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(maxEl(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(maxEl()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(maxEl([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(maxEl([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(maxEl([2])).toBe(2)
    })
    it('should work with various length array', function(){
        expect(maxEl([3,7,1,7,9])).toBe(9)
    })
})

describe('minInd', function(){
    it('should be defined', function(){
        expect(minInd).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof minInd).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(minInd(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(minInd()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(minInd([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(minInd([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(minInd([2])).toBe(0)
    })
    it('should work with various length array', function(){
        expect(minInd([3,7,1,7,9])).toBe(2)
    })
})

describe('maxInd', function(){
    it('should be defined', function(){
        expect(maxInd).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof maxInd).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(maxInd(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(maxInd()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(maxInd([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(maxInd([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(maxInd([2])).toBe(0)
    })
    it('should work with various length array', function(){
        expect(maxInd([3,7,1,7,9])).toBe(4)
    })
})

describe('sumElOdd', function(){
    it('should be defined', function(){
        expect(sumElOdd).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof sumElOdd).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(sumElOdd(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(sumElOdd()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(sumElOdd([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(sumElOdd([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(sumElOdd([2])).toBe(0)
    })
    it('should work with various length array', function(){
        expect(sumElOdd([3,7,1,7,9])).toBe(14)
    })
})

describe('arrRev', function(){
    it('should be defined', function(){
        expect(arrRev).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof arrRev).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(arrRev(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(arrRev()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(arrRev([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(arrRev([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(arrRev([2])).toStrictEqual([2])
    })
    it('should work with various length array', function(){
        expect(arrRev([3,7,1,7,9])).not.toStrictEqual([3,7,1,7,9])
    })
    it('should work with odd length array', function(){
        expect(arrRev([3,7,1,7,9])).toStrictEqual([9,7,1,7,3])
    })
    it('should work with even length array', function(){
        expect(arrRev([3,7,1,7])).toStrictEqual([7,1,7,3])
    })
})

describe('countOddElem', function(){
    it('should be defined', function(){
        expect(countOddElem).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof countOddElem).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(countOddElem(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(countOddElem()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(countOddElem([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(countOddElem([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(countOddElem([2])).toBe(0)
    })
    it('should work with various length array', function(){
        expect(countOddElem([3,7,1,7,9])).toBe(2)
    })
})

describe('revHalf', function(){
    it('should be defined', function(){
        expect(revHalf).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof revHalf).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(revHalf(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(revHalf()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(revHalf([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(revHalf([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(revHalf([2])).toStrictEqual([2])
    })
    it('should work with various length array', function(){
        expect(revHalf([3,7,1,7,9])).not.toStrictEqual([7,9,7,3,1])
    })
    it('should work with odd length array', function(){
        expect(revHalf([3,7,1,7,9])).toStrictEqual([7,9,1,3,7])
    })
    it('should work with even length array', function(){
        expect(revHalf([3,7,1,7])).toStrictEqual([1,7,7,3])
    })
})

describe('bubbleSort', function(){
    it('should be defined', function(){
        expect(bubbleSort).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof bubbleSort).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(bubbleSort(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(bubbleSort()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(bubbleSort([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(bubbleSort([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(bubbleSort([2])).toStrictEqual([2])
    })
    it('should work with various length array', function(){
        expect(bubbleSort([3,7,1,7,9])).not.toStrictEqual([7,9,7,3,1])
    })
    it('should work with odd length array', function(){
        expect(bubbleSort([3,7,1,7,9])).toStrictEqual([1,3,7,7,9])
    })
    it('should work with even length array', function(){
        expect(bubbleSort([3,7,1,7])).toStrictEqual([1,3,7,7])
    })
})

describe('selSort', function(){
    it('should be defined', function(){
        expect(selSort).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof selSort).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(selSort(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(selSort()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(selSort([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(selSort([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(selSort([2])).toStrictEqual([2])
    })
    it('should work with various length array', function(){
        expect(selSort([3,7,1,7,9])).not.toStrictEqual([7,9,7,3,1])
    })
    it('should work with odd length array', function(){
        expect(selSort([3,7,1,7,9])).toStrictEqual([1,3,7,7,9])
    })
    it('should work with even length array', function(){
        expect(selSort([3,7,1,7])).toStrictEqual([1,3,7,7])
    })
})

describe('insSort', function(){
    it('should be defined', function(){
        expect(insSort).toBeDefined()
    })
    it('should be a function', function(){
        expect(typeof insSort).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(insSort(2352)).toBe('error')
    })
    it('should work only with argument', function(){
        expect(insSort()).toBe('error')
    })
    it('should work only with argument', function(){
        expect(insSort([3,4,5])).not.toBe('error')
    })
    it('should work with empty array', function(){
        expect(insSort([])).not.toBe(0)
    })
    it('should work with various length array', function(){
        expect(insSort([2])).toStrictEqual([2])
    })
    it('should work with various length array', function(){
        expect(insSort([3,7,1,7,9])).not.toStrictEqual([7,9,7,3,1])
    })
    it('should work with odd length array', function(){
        expect(insSort([3,7,1,7,9])).toStrictEqual([1,3,7,7,9])
    })
    it('should work with even length array', function(){
        expect(insSort([3,7,1,7])).toStrictEqual([1,3,7,7])
    })
})