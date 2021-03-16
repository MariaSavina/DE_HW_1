//// arrays ////

/// 10*** ///


//// functions ////

/// 5*** ///

function getStrNumBigger(num){

    let hundredsAndOnes = ['','one', 'two', 'three', 'four', 'five', 'six ','seven', 'eight', 'nine']
    let tens=['', '','twenty','thirty','fourty','fifty', 'sixty', 'seventy','eighty','ninety']
    let teens=['ten','eleven','twelve', 'thirteen', 'fourteen', 'fifteen','sixteen','seventeen','eighteen','nineteen']
  
    if(num>999000000000 || num<0){
      return 'your number not in diapason'
    }
    else if(num == 0){
      return 'zero'
    }
    else{
      let a= String(num)
      a= a.split('')
  
      //добавляем ноли в начало массива до 12-значного числа
      let res = ''
      if(a.length < 12){
          let i = 0
          while(a.length <12){
              a.unshift('0')
              i++
          }
      }
  
      //делим массив на подмассивы по 3 элемента
      let arrNum=[]
      for(let i=0,j=3; i<a.length; i+=3,j+=3){
        let b = a.slice(i,j)
        arrNum.push(b)
      }
  
      //функция для написания числа в подмассивах
      function litArr(arr){
        let resInFunc=''
          if(arr[0]!=='0'){
            resInFunc +=hundredsAndOnes[arr[0]]+' hundred'+' '
          }
      
          if(arr[1]!=='1' && arr[1]!=='0'){
            resInFunc+=tens[arr[1]]+' '+hundredsAndOnes[arr[2]]
          }
          else if(arr[1]=='0'){
            resInFunc+=hundredsAndOnes[arr[2]]
          }
          else{
            resInFunc+=teens[arr[2]]
          }
    
        return resInFunc
      }
     
      res=(litArr(arrNum[0])!=='' ? litArr(arrNum[0])+' milliard ':'')+(litArr(arrNum[1])!=='' ? litArr(arrNum[1])+' million ':'')+(litArr(arrNum[2])!=='' ? litArr(arrNum[2])+' thouthand ':'')+litArr(arrNum[3])
  
      return res
    }
  }
  
  // console.log(getStrNumBigger(90369321099))
  // console.log(getStrNumBigger(9031099))
  // console.log(getStrNumBigger(1))
  
  /// 6*** ///
  
  function getNumFromStrBigger(word){
  
    let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred','seven hundred', 'eight hundred', 'nine hundred']
    let tens=['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let teens=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six ','seven', 'eight', 'nine']
  
    let a = word.split(' ')
    let b=[]
  
    let i=0
    while (i<a.length){
      if(a[i]=='thouthand'){
        let c=a.slice(0,i)
        a.slise()
        b.push(c)
      }
      i++
    }
  
    // if(a[1]=='hundred'){
    //   let b=a[0]+' '+a[1]
    //   a.splice(0,2,b)
    // }
  
    return a
  
    let res=0
  
    for(let i=0; i<a.length;i++){
  
      for(let j=0;j<hundreds.length;j++){
        if(a[i]==hundreds[j]){
          res+=j*100
        }
      }
      for(let k=0;k<tens.length;k++){
        if(a[i]==tens[k]){
          res+=k*10
        }
      }
      for(let m=0;m<teens.length; m++){
        if(a[i]==teens[m]){
          res+=10+m
        }
      }
      for(let l=0;l<ones.length;l++){
        if(a[i]==ones[l]){
          res+=l
        }
      }
  
    }
    return res
  
  }
  
  console.log(getNumFromStrBigger('one thouthand three hundred eighty nine'))