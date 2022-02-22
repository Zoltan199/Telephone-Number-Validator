function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if(str.match(regex))return true
  else return false;
}



//^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$

//let regex2 = /(^\d{3})([-])(\d{3})([-])(\d{4}$) /;
//let a = "554-5595";
//console.log(regex.test(a));//

telephoneCheck("555-555-5555");
