/// 1 ///

let multiSum = function (a=0,b=0){
  if(typeof a == 'number'&& typeof b== 'number'){
    if(a%2 == 0){
    return a*b;
    }
    else return a+b;
  }
  else return 'error'
}

// console.log(multiSum(2,5))
// console.log(multiSum(11,6))
// console.log(multiSum(-5,4))
// console.log(multiSum(3))


/// 2 ///

function getQuarter(x=0,y=0){
  if(typeof x == 'number'&& typeof y == 'number'){
    if(x > 0 && y > 0){return "your point in the first quarter"}
    else if(x<0 && y>0){return "your point in the second quarter"}
    else if(x<0 && y<0){return "your point in the third quarter"}
    else if(x>0 && y<0){return "your point in the fourth quarter"}
    else if(x>0 && y==0){return "your point between first and fourth quater"}
    else if(x==0 && y>0){return "your point between first and second quater"}
    else if(x<0 && y==0){return "your point between second and third quater"}
    else if(x==0 && y<0){return "your point between third and fourth quater"}
    else {return "your point at the beginning of the coordinate axes"}
  }
  else return 'error'
}


// console.log(getQuarter(1,5))
// console.log(getQuarter(-8,6))
// console.log(getQuarter(-3,-5))
// console.log(getQuarter(10,-36))
// console.log(getQuarter(0,0))
// console.log(getQuarter(6,0))
// console.log(getQuarter(0,7))
// console.log(getQuarter(-26,0))
// console.log(getQuarter(0,-7))

/// 3 ///

function sumPosNum(c=0,d=0,e=0){
  if(typeof c == 'number'&& typeof d == 'number' && typeof e == 'number'){
    var res3 = 0
    
    if (c>0){
        res3 +=c
    }
    if(d>0){
        res3 +=d
    }
    if(e>0){
        res3 +=e
    }
    
    if (res3 >0){return res3}
    else return'there is no any positive number'
  }
  else return 'error'
}

// console.log(sumPosNum(0,0,0))
// console.log(sumPosNum(-3,6,0))
// console.log(sumPosNum(2,3,4))
// console.log(sumPosNum(-8,10,2))


/// 4 ///

function calcExp(a=0,b=0,c=0){
    // return((Math.max(a*b*c,a+b+c))+3)
  if(typeof a == 'number' && typeof b == 'number' && typeof c == 'number'){
    var res = (a*b*c)>(a+b+c) ? (a*b*c)+3 : (a+b+c)+3
    return res
  }
  else return 'error'
}

// console.log(calcExp(1,2,3))
// console.log(calcExp(3,6,2))
// console.log(calcExp(-2,0,1))
// console.log(calcExp(-1,-2,-3))


/// 5 ///

function getMark(rating){
  if(typeof rating == 'number'){
    switch (true) {
          case (rating >= 0 && rating <= 19):
            return( 'F' );
        
          case (rating >= 20 && rating <= 39):
            return( 'E' );
        
          case (rating >= 40 && rating <= 59):
            return( 'D' );
        
          case (rating >= 60 && rating <= 74):
            return( 'C' );
        
          case (rating >= 75 && rating <= 89):
            return( 'B' );
        
          case (rating >= 90 && rating <= 100):
            return( 'A' );
        
          default:
            return( 'Try again' );
        }
  }
  else return 'error'
}

// console.log(getMark(4))
// console.log(getMark(22))
// console.log(getMark(59))
// console.log(getMark(60))
// console.log(getMark(81))
// console.log(getMark(100))
// console.log(getMark(120))
// console.log(getMark(-5))

module.exports = {multiSum, getQuarter, sumPosNum, calcExp, getMark}
