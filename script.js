document.getElementById('detectbtn').addEventListener("click", check);


function check(){
  let phoneNumber= document.getElementById("phonenum-input").value
  while (validateNumber(phoneNumber)== false){
    alert("Hi Chief! \n\nThe Phone number cannot be blank and it MUST be an 11 Digits Nigeria Phone Number \n\n Thanks")
    return
  }

  detectNumber(phoneNumber)
}

function validateNumber(phoneNumber) {
  let maxLength = 11;
  if (phoneNumber == null) {
    return false;
  }else if(phoneNumber.length > maxLength) {
    return false;
  } else if (phoneNumber.length < maxLength) {
    return false;
  } else {
    return true;
  }
}




function detectNumber(phoneNumber) {
 
   networkCode =Number(phoneNumber.slice(0,4)) 
  console.log(networkCode)

  let logo =  document.querySelector("img"); 
  logo.src = "";

  if (
    networkCode == 703|| 
    networkCode == 706|| 
    networkCode == 803|| 
    networkCode == 806|| 
    networkCode == 810|| 
    networkCode == 813||
    networkCode == 814||
    networkCode == 816||
    networkCode == 903||
    networkCode == 906||
    networkCode == 913){
      logo.src = '/images/mtn.png';
  } else if (
    networkCode == 705||
    networkCode == 805||
    networkCode == 807||
    networkCode == 811||
    networkCode == 815||
    networkCode == 905){
      logo.src = '/images/glo.png';
  } else if (
    networkCode == 701||
    networkCode == 708||
    networkCode == 802||
    networkCode == 808||
    networkCode == 812||
    networkCode == 902||
    networkCode == 907||
    networkCode == 901){
      logo.src = '/images/airtel.png';
  } else if (
    networkCode == 809||
    networkCode == 817||
    networkCode == 818||
    networkCode == 908||
    networkCode == 909){
      logo.src = '/images/9mobile.png';
  } else if (
    networkCode == 804){
      logo.src = '/images/ntel.png';
  } else if (
    networkCode == 702){
      logo.src = '/images/smile.png';
  } else {
    logo.src = '/images/unknown.png';
  }
  
}




