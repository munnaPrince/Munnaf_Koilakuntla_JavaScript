function formvalid() {
  var uname = document.registration.username;
  var email = document.registration.email;
  var pass1 = document.registration.password;
  var pass2 = document.registration.password1;
  var mSex = document.registration.mSex;
  var fSex = document.registration.fSex;
  var mobileNumber = document.registration.mobileno;
  var dateof = document.registration.dob;

  if(validusername(uname))
  {
    if(validemail(email))
    {
      if(validpass(pass1,pass2))
      {
        if(validgender(mSex,fSex))
        {
          if(validmobilenumber(mobileNumber)){
            if(ValidateDOB(dateof))
            {
              alert("all fields are correct");
            }

          }
        }
      }
    }
  }
  return false;
}
function validmobilenumber(num1) {
  var num = num1.value;
  if(num.length<0 && num.length>10){
    alert("enter correct mobile number");
    num1.focus();
    return false;
  }
  var le =  /^[0-9]+$/;
  if(num.match(le)){
    return true;
  }
  else{
    alert("enter only numbers ");
    num1.focus();
    return false;
  }
}
function validgender(m,f) {
  var c =0;
  if(m.checked){
    c++;
  }
  if(f.checked){
    c++;
  }
  if(c==0){
    alert("choose the gender");
    return false;
  }
  else if (c==2) {
    alert("choose the gender properly");
    m.focus();
    return false;
  }
  return true;
}
function validpass(pass11,pass21) {
  var pass1 = pass11.value;
  var pass2 = pass21.value;
  if(pass1!= pass2){
    alert("enter the same password in confirm password");
    pass21.focus();
    return false;
  }
  if(pass1==""){
    alert("password cannot be empty");
    pass11.focus();
    return false;
  }
  if(pass2==""){
    alert("password cannot be empty");
    pass21.focus();
    return false;
  }

  if(pass1==pass2){
    return true;
  }
}
function validemail(email1) {
  var email = email1.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailformat))
  {
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    email1.focus();
    return false;
  }
}
function validusername(uname) {
  var name = uname.value;
  var l = /^[A-Za-z]+$/;
  if(name.match(l)){
    return true;
  }
  else{
    alert("enter only alphabets");
    uname.focus();
    return false;
  }
}
function ValidateDOB(dateof) {
        var lblError = document.getElementById("lblError");
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

        //Check whether valid dd/MM/yyyy Date Format.
        if (regex.test(dateof.value)) {
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            var dtCurrent = new Date();
            lblError.innerHTML = "Eligibility 18 years ONLY."
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                return false;
            }

            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return false;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return false;
                    }
                }
            }
            lblError.innerHTML = "";
            return true;
        } else {
            lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
            return false;
        }
    }
