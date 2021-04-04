/// 1 ///

function getSumEven() {
    var res = 0

    for (let i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            res += i
        }
    }

    return res
}

// console.log(getSumEven())

/// 2 ///

function checkPrimeNum(prime) {
    var res = ''
    if(typeof prime == 'number'){
        if (prime > 2) {
            for (let i = 2; i < prime; i++) {
                if (prime % i == 0) {
                    res = 'не простое'
                }
            }
            if (res !== 'не простое') {
                res = 'простое'
            }
        }
        else {
            res = 'простое'
        }

        return res
    }
    else return 'error'
}

// console.log(checkPrimeNum(2))
// console.log(checkPrimeNum(5))
// console.log(checkPrimeNum(9))
// console.log(checkPrimeNum(21))
// console.log(checkPrimeNum(27))
// console.log(checkPrimeNum(199))
// console.log(checkPrimeNum())


/// 3 ///
function orderSelection(a) {
    if(typeof a == 'number' && a > 0){
        var resOrder = 0
        for (let i = 1; i * i < a + 1; i++) {
            resOrder = i
        }
        return resOrder
    }
    else return 'error'
}

// console.log(orderSelection(36))
// console.log(orderSelection(9))
// console.log(orderSelection(7))
// console.log(orderSelection(4))
// console.log(orderSelection(100))


function binarySerch(num) {
    if(typeof num == 'number' && num > 0){
        var res=0
        var start = 0
        var end= num
        while(start<=end){
            var mid=(start+end)/2

            mid=Math.floor(mid)

            if(mid*mid==num){
                return mid
            }

            if(mid*mid<num){
                start=mid+1
                res=mid
            }
            else{
                end=mid-1
            }
        }
        return res
    }
    else return 'error'
}

// console.log(binarySerch(36))
// console.log(binarySerch(9))
// console.log(binarySerch(7))
// console.log(binarySerch(4))
// console.log(binarySerch(100))


/// 4 ///

function getFactorial(a) {
    if(typeof a == 'number' && a > 0){
        var factorial = 1

        for (let i = 1; i < a + 1; i++) {
            factorial = factorial * i
        }

        return factorial
    }
    else return 'error'
}

// console.log(getFactorial(10))
// console.log(getFactorial(33))
// console.log(getFactorial(5))
// console.log(getFactorial(199))

/// 5 ///

function getSumOfNum(num) {
    if(typeof num == 'number'){
        var a = 0
        var res = 0

        if(num<0){num=-1*num}

        while (num != 0) {
            a = num % 10
            res = res + a
            a = num / 10
            num = Math.floor(a)
        }

        return res
    }
    else return 'error'
}

// console.log(getSumOfNum(-123))
// console.log(getSumOfNum(234))
// console.log(getSumOfNum(12345))
// console.log(getSumOfNum(14692))
// console.log(getSumOfNum(9278))

/// 6 ///

function revNum(num) {
    if(typeof num == 'number' && num>0){
        var a = 0
        var res = ''

        while (num != 0) {
            a = num % 10
            res = res + a.toString()
            a = num / 10
            num = Math.floor(a)
        }

        return Number(res)
    }
    else return 'error'
}

// console.log(revNum(123))
// console.log(revNum(123456))
// console.log(revNum(7654321))
// console.log(revNum(321))

module.exports = {getSumEven, checkPrimeNum, orderSelection, binarySerch, getFactorial, getSumOfNum, revNum}