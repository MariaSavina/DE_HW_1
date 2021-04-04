/// 1 ///

function minEl(arr){
    if(Array.isArray(arr) && arr.length != 0){
    var minEl = arr[0]
    for( var i=0; i < arr.length+1; i++){
        if(arr[i]<minEl){
            minEl=arr[i]
        }
    }
    return minEl
    }
    else return 'error'
}

// console.log(minEl([5, 48, 3, 10, 11]))
// console.log(minEl([10, 4, 22, 6, 2, 1]))
// console.log(minEl([54, 101, 88, 22]))


/// 2 ///

function maxEl(arr){
    if(Array.isArray(arr) && arr.length != 0){
    var maxEl = arr[0]

    for( var i=0; i<arr.length+1;i++){
        if(arr[i]>maxEl){
            maxEl=arr[i]
        }
    }
    return maxEl
    }
    else return "error"
}

// console.log(maxEl([5, 48, 3, 10, 11]))
// console.log(maxEl([10, 4, 22, 6, 2, 1]))
// console.log(maxEl([54, 101, 88, 22]))

/// 3 ///

function minInd(arr){
    if(Array.isArray(arr) && arr.length != 0){
    var minInd = 0

    for( var i=1; i<arr.length+1;i++){
        if(arr[minInd]>arr[i]){
            minInd=i
        }
    }

    return minInd
    }
    else return "error"
}

// console.log(minInd([5, 48, 3, 10, 11]))
// console.log(minInd([10, 4, 22, 6, 2, 1]))
// console.log(minInd([54, 101, 88, 22]))


/// 4 ///

function maxInd(arr){
    if(Array.isArray(arr) && arr.length != 0){
    var maxInd = 0

    for( var i=1; i<arr.length+1;i++){
        if(arr[maxInd]<arr[i]){
            maxInd=i
        }
    }

    return maxInd
    }
    else return "error"
}

// console.log(maxInd([5, 48, 3, 10, 11]))
// console.log(maxInd([10, 4, 22, 6, 2, 1]))
// console.log(maxInd([54, 101, 88, 22]))

/// 5 ///

function sumElOdd(arr){
    if(Array.isArray(arr) && arr.length != 0){
    var res = 0

    for(var i=0 ; i<arr.length; i++){
        if(i%2 !== 0){
            res += arr[i]
        }
    }
    return res
    }
    else return "error"
}

// console.log(sumElOdd([5, 48, 3, 10, 11]));
// console.log(sumElOdd([2, 4, 10, 33, 12]))
// console.log(sumElOdd([13, 4, 22, 46, 33]))


/// 6 ///

function arrRev(arr){
    if(Array.isArray(arr) && arr.length != 0){

    var newArr=[]
    for(var i=arr.length-1;i>-1;i--){
        newArr.push(arr[i])
    }
    return newArr
    }
    else return "error"
}

// console.log(arrRev([2, 4, 12, 14, 88, 2, 1]))
// console.log(arrRev([83, 2, 53, 12]))
// console.log(arrRev([3,7,1,7]))


/// 7 ///

function countOddElem(arr){
    if(Array.isArray(arr) && arr.length != 0){
        var count = 0
        for(var i=0 ; i<arr.length; i++){
            if(i%2 !==0){
                count += 1
            }
        }
        return count
    }
    else return 'error'
}

// console.log(countOddElem([12, 4, 26, 44, 26, 11, 12]))


/// 8 ///

function revHalf(arr){
    
/////при нечетной длинне массива, забирает в первую половину на один элемент больше
    // let halfArr = Math.round(arr.length/2)
    
    // let firstHalf = arr.slice(0,halfArr)
    // let secondHalf = arr.slice(halfArr,arr.length)

    // let reversedHalf = secondHalf.concat(firstHalf)
    
    // return reversedHalf



/////при нечетной длинне массива, средний элемент оставляет на месте, оставшиеся половины меняет местами

    // var halfArr = Math.round(arr.length/2)
    // var reversedHalf
    // var firstHalf
    // var secondHalf
    // if(arr.length%2==0){
    //     firstHalf = arr.slice(0,halfArr)
    //     secondHalf = arr.slice(halfArr,arr.length)
    //     reversedHalf = secondHalf.concat(firstHalf)
    // }
    // else{
    //     firstHalf = arr.slice(0,halfArr-1)
    //     secondHalf = arr.slice(halfArr,arr.length)
    //     reversedHalf= secondHalf.concat(firstHalf)
    //     reversedHalf.splice(halfArr-1,0,arr[halfArr-1])
    // }
    // return reversedHalf


    if(Array.isArray(arr) && arr.length != 0){

        var halfArr = Math.round(arr.length/2)
        var reversedHalf=[]
        for(var i=halfArr; i<arr.length;i++){
            reversedHalf.push(arr[i])
        }
            reversedHalf.push(arr[halfArr-1])
        for(var j=0; j<halfArr-1;j++){
            reversedHalf.push(arr[j])
        }

        return reversedHalf
    }
    else return 'error'
}

// console.log(revHalf([1, 2, 3, 4]))
// console.log(revHalf([34, 22, 1, 12, 65]))
// console.log(revHalf([3,7,1,7]))


/// 9 ///

function bubbleSort(arr){
    if(Array.isArray(arr) && arr.length != 0){

        var newArr = []

        for(var j=0;j<arr.length;){
            for(var i=0; i<arr.length; i++){
                if(arr[i]>arr[i+1]){
                    var f = arr[i]
                    arr[i] =arr[i+1]
                    arr[i+1] =  f
                }
            }
            newArr[arr.length-1]=arr[arr.length-1]
            arr.pop()
        }
        return newArr
    }
    else return "error"
}

// console.log('bubble ', bubbleSort([5, 48, 3, 10, 11, 2, 15]))
// console.log('bubble ', bubbleSort([4, 25, 12, 6, 44]))
// console.log('bubble ', bubbleSort([34, 12, 33, 21]))


function selSort(arr){
    if(Array.isArray(arr) && arr.length != 0){

        var newArr=[]

        for(let j=0;j<arr.length;){
            var res = arr[0]
            indexRes = 0
                for( var i=0; i<arr.length+1;i++){
                    if(arr[i]<res){
                        res=arr[i]
                        indexRes = i
                    }
                }
            newArr.push(res);
            arr.splice(indexRes, 1);
        }

        return newArr
    }
    else return 'error'
}

// console.log('select ', selSort([5, 48, 3, 10, 11, 2, 15]))
// console.log('select ', selSort([4, 25, 12, 6, 44]))
// console.log('select ', selSort([34, 12, 33, 21]))


function insSort(arr){
    if(Array.isArray(arr) && arr.length != 0){

        for (var i = 1; i < arr.length; i++) {
            var t = arr[i];
            var j = i;
            while (j > 0 && arr[j - 1] > t) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = t;
        }
        return arr
    }
    else return 'error'
}

// console.log('insert ', insSort([5, 48, 3, 10, 11, 2, 15]))
// console.log('insert ', insSort([4, 25, 12, 6, 44]))
// console.log('insert ', insSort([34, 12, 33, 21]))

module.exports = {minEl, maxEl, minInd, maxInd, sumElOdd, arrRev, countOddElem, revHalf, bubbleSort, selSort, insSort}