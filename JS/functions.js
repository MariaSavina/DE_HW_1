/// 1 ///

function getDay(a){
  if(typeof a == 'number'){
      switch (a) {
    case 1:
      return( 'Mon' );

    case 2:
      return( 'Tue' );

    case 3:
      return( 'Wed' );

    case 4:
      return( 'Thu' );

    case 5:
      return( 'Fri' );  

    case 6:
      return( 'Sat' );  

    case 7:
      return( 'Sun' );  

    default:
      return( 'Try again' );
    }
  }
  else return 'error'
}

// console.log(getDay(2))
// console.log(getDay(10))
// console.log(getDay(7))

/// 2 ///

function getDistance(ax=0, ay=0, az=0, bx=0, by=0, bz=0){
  if(typeof ax !== 'number' || typeof ay !== 'number' || typeof az !== 'number' || typeof bx !== 'number' || typeof by !== 'number' || typeof bz !== 'number'){
    return "error"
  }
  else{  
    
    var res = 0
      
      // res= Math.sqrt(Math.pow(bx-ax, 2)+Math.pow(by-ay, 2)+Math.pow(bz-az, 2))

      res=((bx-ax)**2+(by-ay)**2+(bz-az)**2)**0.5
      return res
  }
}

// console.log(getDistance(2, 3, 6 , -2, 4, 7))
// console.log(getDistance(-22, 0, 0 , -48, 4, 0))
// console.log(getDistance(1,1,1,3,1,1))


/// 3 ///

function getStrNum(num){
  if(num>999 || num<0){
    return 'your number not in diapason'
  }
  else if(num == 0){
    return 'ноль'
  }
  else{
    var a= String(num)
    var res = ''
    if(a.length < 3){
        var i = 0
        while(a.length <3){
            a='0'+a
            i++
        }
    }

    switch (a[0])
    {
      case '1': res='сто '; break;
      case '2': res = 'двести '; break;
      case '3': res = 'триста '; break;
      case '4': res = 'четыреста '; break;
      case '5': res = 'пятьсот '; break;
      case '6': res = 'шестьсот '; break;
      case '7': res = 'семьсот '; break;
      case '8': res = 'восемьсот '; break;
      case '9': res = 'девятьсот '; break;
      default: break;
    }
    if(a[1]==1){
      switch (a[2])
      {
        case '0': res+='десять'; break;
        case '1': res +='одинадцать'; break;
        case '2': res += 'двенадцать'; break;
        case '3': res += 'тринадцать'; break;
        case '4': res += 'четырнвдцать'; break;
        case '5': res += 'пятнадцать'; break;
        case '6': res += 'шестнадцать'; break;
        case '7': res += 'семнадцать'; break;
        case '8': res += 'восемнадцать'; break;
        case '9': res += 'девятнадцать'; break;
        default: break;
      }
    }
    else{
      switch (a[1])
      {
        case '2': res += 'двадцать '; break;
        case '3': res += 'тридцать '; break;
        case '4': res += 'сорок '; break;
        case '5': res += 'пятьдесят '; break;
        case '6': res += 'шестьдесят '; break;
        case '7': res += 'семьдесят '; break;
        case '8': res += 'восемьдесят '; break;
        case '9': res += 'девяносто '; break;
        default: break;
      }
      switch (a[2])
      {
        case '1': res +='один'; break;
        case '2': res += 'два'; break;
        case '3': res += 'три'; break;
        case '4': res += 'четыре'; break;
        case '5': res += 'пять'; break;
        case '6': res += 'шесть'; break;
        case '7': res += 'семь'; break;
        case '8': res += 'восемь'; break;
        case '9': res += 'девять'; break;
        default: break;
      }
    }
    return res
  }
}

// console.log(getStrNum(123))
// console.log(getStrNum(23))
// console.log(getStrNum(715))
// console.log(getStrNum(200))
// console.log(getStrNum(0))
// console.log(getStrNum(1000))
// console.log(getStrNum(-123))

function getStrNum2(num){
  var hundredsAndOnes = ['','one', 'two', 'three', 'four', 'five', 'six ','seven', 'eight', 'nine']
  var tens=['', '','twenty','thirty','fourty','fifty', 'sixty', 'seventy','eighty','ninety']
  var teens=['ten','eleven','twelve', 'thirteen', 'fourteen', 'fifteen','sixteen','seventeen','eighteen','nineteen']
  if( typeof num !== 'number'){
    return "error"
  }
  if(num>999 || num<0){
    return 'your number not in diapason'
  }
  else if(num == 0){
    return 'zero'
  }
  else{
    var a= String(num)
    a= a.split('')

    var res = ''
    if(a.length < 3){
        var i = 0
        while(a.length <3){
            a.unshift('0')
            i++
        }
    }

    if(a[0]!=='0'){
      res +=hundredsAndOnes[a[0]]+' hundred'+' '
    }

    if(a[1]!=='1' && a[1]!=='0'){
      res+=tens[a[1]]+' '+hundredsAndOnes[a[2]]
    }
    else if(a[1]=='0'){
      res+=hundredsAndOnes[a[2]]
    }
    else{
      res+=teens[a[2]]
    }

    return res
  }
}

// console.log(getStrNum2(1))
// console.log(getStrNum2(15))
// console.log(getStrNum2(48))
// console.log(getStrNum2(204))
// console.log(getStrNum2(123))
// console.log(getStrNum2(513))


/// 4 ///

function getNumFromStr(word){
    var a = word.split(' ')
    var b=0

    if(a.length == 3){
        switch (a[0])
        {
            case 'сто': b+=100; break;
            case 'двести': b+=200; break;
            case 'триста': b+=300; break;
            case 'четыреста': b+=400; break;
            case 'пятьсот': b+=500; break;
            case 'шестьсот': b+=600; break;
            case 'семьсот': b+=700; break;
            case 'восемьсот': b+=800; break;
            case 'девятьсот': b+=900; break;
        }
        switch(a[1])
        {
            case 'двадцать': b+=20; break;
            case 'тридцать': b+=30; break;
            case 'сорок': b+=40; break;
            case 'пятьдесят': b+=50; break;
            case 'шестьдесят': b+=60; break;
            case 'семьдесят': b+=70; break;
            case 'восемьдесят': b+=80; break;
            case 'девяносто': b+=90; break;
        }
        switch(a[2])
        {
            case 'один': b+=1; break;
            case 'два': b+=2; break;
            case 'три': b+=3; break;
            case 'четыре': b+=4; break;
            case 'пять': b+=5; break;
            case 'шесть': b+=6; break;
            case 'семь': b+=7; break;
            case 'восемь': b+=8; break;
            case 'девять': b+=9; break;
            default: return'try again';
        }
    }
    else if(a.length == 2){
        switch(a[0]){
            case 'сто': b+=100; break;
            case 'двести': b+=200; break;
            case 'триста': b+=300; break;
            case 'четыреста': b+=400; break;
            case 'пятьсот': b+=500; break;
            case 'шестьсот': b+=600; break;
            case 'семьсот': b+=700; break;
            case 'восемьсот': b+=800; break;
            case 'девятьсот': b+=900; break;
            case 'двадцать': b+=20; break;
            case 'тридцать': b+=30; break;
            case 'сорок': b+=40; break;
            case 'пятьдесят': b+=50; break;
            case 'шестьдесят': b+=60; break;
            case 'семьдесят': b+=70; break;
            case 'восемьдесят': b+=80; break;
            case 'девяносто': b+=90; break;
        }
        switch(a[1]){
            case 'двадцать': b+=20;break;
            case 'тридцать': b+=30; break;
            case 'сорок': b+=40; break;
            case 'пятьдесят': b+=50; break;
            case 'шестьдесят': b+=60; break;
            case 'семьдесят': b+=70; break;
            case 'восемьдесят': b+=80; break;
            case 'девяносто': b+=90; break;
            case 'один': b+=1; break;
            case 'два': b+=2; break;
            case 'три': b+=3; break;
            case 'четыре': b+=4; break;
            case 'пять': b+=5; break;
            case 'шесть': b+=6; break;
            case 'семь': b+=7; break;
            case 'восемь': b+=8; break;
            case 'девять': b+=9; break;
            case 'одинадцать': b+=11;break;
            case 'двенадцать': b+=12; break;
            case 'тринадцать': b+=13; break;
            case 'четырнадцать': b+=14; break;
            case 'пятнадцать': b+=15; break;
            case 'шестнадцать': b+=16; break;
            case 'семнадцать': b+=17; break;
            case 'восемнадцать': b+=18; break;
            case 'девятнадцать': b+=19; break;
            default: return 'try again';
            }
        }
        else if(a.length == 1){
            switch(a[0]){
            case 'сто': b+=100; break;
            case 'двести': b+=200; break;
            case 'триста': b+=300; break;
            case 'четыреста': b+=400; break;
            case 'пятьсот': b+=500; break;
            case 'шестьсот': b+=600; break;
            case 'семьсот': b+=700; break;
            case 'восемьсот': b+=800; break;
            case 'девятьсот': b+=900; break;
            case 'десять': b+=10; break;
            case 'двадцать': b+=20; break;
            case 'тридцать': b+=30; break;
            case 'сорок': b+=40; break;
            case 'пятьдесят': b+=50; break;
            case 'шестьдесят': b+=60; break;
            case 'семьдесят': b+=70; break;
            case 'восемьдесят': b+=80; break;
            case 'девяносто': b+=90; break;
            case 'одинадцать': b+=11;break;
            case 'двенадцать': b+=12; break;
            case 'тринадцать': b+=13; break;
            case 'четырнадцать': b+=14; break;
            case 'пятнадцать': b+=15; break;
            case 'шестнадцать': b+=16; break;
            case 'семнадцать': b+=17; break;
            case 'восемнадцать': b+=18; break;
            case 'девятнадцать': b+=19; break;
            case 'один': b+=1; break;
            case 'два': b+=2; break;
            case 'три': b+=3; break;
            case 'четыре': b+=4; break;
            case 'пять': b+=5; break;
            case 'шесть': b+=6; break;
            case 'семь': b+=7; break;
            case 'восемь': b+=8; break;
            case 'девять': b+=9; break;
            case 'ноль': b=0; break;
            default: return 'try again';
            }
        }
        else{
            return 'try again'
        }
        return b
}

// console.log(getNumFromStr('двести двадцать три'))
// console.log(getNumFromStr('девятьсот тридцать пять'))

// console.log(getNumFromStr('сто одинадцать'))
// console.log(getNumFromStr('двести двадцать'))
// console.log(getNumFromStr('триста одинадцать'))
// console.log(getNumFromStr('сорок восемь'))
// console.log(getNumFromStr('четыреста пять'))

// console.log(getNumFromStr('двадцать'))
// console.log(getNumFromStr('девятьсот'))
// console.log(getNumFromStr('пятнадцать'))
// console.log(getNumFromStr('три'))
// console.log(getNumFromStr('ноль'))

// console.log(getNumFromStr('тысяча двести двадцать три'))
// console.log(getNumFromStr('fsghrghs fghrfg'))

function getNumFromStr2(word){

  var hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred','seven hundred', 'eight hundred', 'nine hundred']
  var tens=['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  var teens=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six ','seven', 'eight', 'nine']

  if( typeof word !== 'string'){
    return "error"
  }
  var a = word.split(' ')

  if(a[1]=='hundred'){
    var b=a[0]+' '+a[1]
    a.splice(0,2,b)
  }

  var res=null

  for(var i=0; i<a.length;i++){

    for(var j=0;j<hundreds.length;j++){
      if(a[i]==hundreds[j]){
        res+=j*100
      }
    }
    for(var k=0;k<tens.length;k++){
      if(a[i]==tens[k]){
        res+=k*10
      }
    }
    for(var m=0;m<teens.length; m++){
      if(a[i]==teens[m]){
        res+=10+m
      }
    }
    for(var l=0;l<ones.length;l++){
      if(a[i]==ones[l]){
        res+=l
      }
    }

  }
  if(res==null){
    return 'error'
  }
  return res
}

// console.log(getNumFromStr2('three hundred eighty nine'))
// console.log(getNumFromStr2('five hundred nine'))
// console.log(getNumFromStr2('five hundred ten'))
// console.log(getNumFromStr2('three hundred twenty'))
// console.log(getNumFromStr2('ninety nine'))
// console.log(getNumFromStr2('fourteen'))
// console.log(getNumFromStr2('zero'))
// console.log(getNumFromStr2('ten'))
// console.log(getNumFromStr2('nine hundred sixteen'))
// console.log(getNumFromStr2('three hundred five'))
// console.log(getNumFromStr2('fgbxfbfg'))


module.exports = {getDay, getDistance, getStrNum2, getNumFromStr2}
