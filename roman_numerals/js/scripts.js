var array = [];

var m_convert = function(input){
  if(input.toString()[0] === "1"){
    input = input.replace('1', 'M');

    array.push(input.substring(0 , 1));
    // console.log(input.substring(1));
    return input.substring(1);
  }
  else if(input.toString()[0] === "2"){
    input = input.replace('2', 'MM');
    array.push(input.substring(0 , 2));
    // console.log(input.substring(2));
    return input.substring(2);
  }
  else if(input.toString()[0] === "3"){
    input = input.replace('3', 'MMM');
    array.push(input.substring(0 , 3));
    // console.log(input.substring(3));
    return input.substring(3);
  }
};

var d_convert = function(input){
  if(input.toString()[0] === "9"){
    input = input.replace('9', 'CM');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "8"){
    input = input.replace('8', 'DCCC');
    array.push(input.substring(0 , 4));
    console.log(input.substring(4));
    console.log(array);
    return input.substring(4);
  }
  else if(input.toString()[0] === "7"){
    input = input.replace('7', 'DCC');
    array.push(input.substring(0 , 3));
    console.log(input.substring(3));
    console.log(array);
    return input.substring(3);
  }
  else if(input.toString()[0] === "6"){
    input = input.replace('6', 'DC');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "5"){
    input = input.replace('5', 'D');
    array.push(input.substring(0));
    console.log(input.substring(1));
    console.log(array);
    return input.substring(1);
  }
  else if(input.toString()[0] === "4"){
    input = input.replace('4', 'CD');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "3"){
    input = input.replace('3', 'CCC');
    array.push(input.substring(0 , 3));
    console.log(input.substring(3));
    console.log(array);
    return input.substring(3);
  }
  else if(input.toString()[0] === "2"){
    input = input.replace('2', 'CC');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "1"){
    input = input.replace('1', 'C');
    array.push(input.substring(0, 1));
    console.log(input.substring(1));
    console.log(array);
    return input.substring(1);
  }
  else if(input.toString()[0] === "0"){
    input = input.replace('0', '');
    return input.substring(1)
  }

};
var l_convert = function(input){
  if(input.toString()[0] === "9"){
    input = input.replace('9', 'XC');
    input = input.replace('0', '');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "8"){
    input = input.replace('8', 'LXXX');
    input = input.replace('0', '');
    array.push(input.substring(0 , 4));
    console.log(input.substring(4));
    console.log(array);
    return input.substring(4);
  }
  else if(input.toString()[0] === "7"){
    input = input.replace('7', 'LXX');
    input = input.replace('0', '');
    array.push(input.substring(0 , 3));
    console.log(input.substring(3));
    console.log(array);
    return input.substring(3);
  }
  else if(input.toString()[0] === "6"){
    input = input.replace('6', 'LX');
    input = input.replace('0', '');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "5"){
    input = input.replace('5', 'L');
    input = input.replace('0', '');
    array.push(input.substring(0));
    console.log(input.substring(1));
    console.log(array);
    return input.substring(1);
  }
  else if(input.toString()[0] === "4"){
    input = input.replace('4', 'XL');
    input = input.replace('0', '');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "3"){
    input = input.replace('3', 'XXX');
    input = input.replace('0', '');
    array.push(input.substring(0 , 3));
    console.log(input.substring(3));
    console.log(array);
    return input.substring(3);
  }
  else if(input.toString()[0] === "2"){
    input = input.replace('2', 'XX');
    input = input.replace('0', '');
    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "1"){
    input = input.replace('1', 'X');
    input = input.replace('0', '');
    array.push(input.substring(0, 1));
    console.log(input.substring(1));
    console.log(array);
    return input.substring(1);
  }
  else if(input.toString()[0] === "0"){
    return input.substring(1);
  }
};

var x_convert = function(input){
  if(input.toString()[0] === "9"){
    input = input.replace('9', 'IX');

    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "8"){
    input = input.replace('8', 'VIII');

    array.push(input.substring(0 , 4));
    console.log(input.substring(4));
    console.log(array);
    return input.substring(4);
  }
  else if(input.toString()[0] === "7"){
    input = input.replace('7', 'VII');

    array.push(input.substring(0 , 3));
    console.log(input.substring(3));
    console.log(array);
    return input.substring(3);
  }
  else if(input.toString()[0] === "6"){
    input = input.replace('6', 'VI');

    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "5"){
    input = input.replace('5', 'V');

    array.push(input.substring(0));
    console.log(input.substring(1));
    console.log(array);
    return input.substring(1);
  }
  else if(input.toString()[0] === "4"){
    input = input.replace('4', 'IV');

    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "3"){
    input = input.replace('3', 'III');

    array.push(input.substring(0 , 3));
    console.log(input.substring(3));
    console.log(array);
    return input.substring(3);
  }
  else if(input.toString()[0] === "2"){
    input = input.replace('2', 'II');

    array.push(input.substring(0 , 2));
    console.log(input.substring(2));
    console.log(array);
    return input.substring(2);
  }
  else if(input.toString()[0] === "1"){
    input = input.replace('1', 'I');

    array.push(input.substring(0));
    console.log(input.substring(1));
    console.log(array);
    return input.substring(1);
  }
  else if(input.toString()[1] === "0"){
    input = input.replace('0', '');
    return input.substring(1);
  }
};

var filter = function(input){

};

$(document).ready(function(){
  $("form#mainform").submit(function(event){
    event.preventDefault();
    var input = $("input#numerals").val();
    // input = input.split("");
    input = input.replace(/[^0-9.]/g, "");
    console.log(input);

    if(input.length === 4){
      // d_convert(m_convert(input));
      var total = x_convert(l_convert(d_convert(m_convert(input))));
      total = array.join("");
      console.log(total);
    }
    else if(input.length === 3){
      var total = x_convert(l_convert(d_convert(input)));
      total = array.join("");
      console.log(total);
    }
    else if(input.length === 2){
      var total = x_convert(l_convert(input));
      total = array.join("");
      console.log(total);
    }
    else if(input.length === 1){
      var total = x_convert(input);
      total = array.join("");
      console.log(total);
    }


  });
});
