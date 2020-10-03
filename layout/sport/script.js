function valid(form){
  var fail = false;
  var name = form.name.value;
  var lastName = form.lastName.value;
  var surName = form.surName.value;
  var age = form.age.value;


  var char = /[a-z]/i;
  var int = /[0-9]/;


  if(name == "" || name == " "){
    fail = "You didn't enter your name";
  } else if(char.test(name) == false || int.test(name) == true){
    fail="You entered the name incorrectly";
  } else if(char.test(lastName) == false || int.test(lastName) == true){
    fail = "You entered the Last name incorrectly";
  } else if(char.test(surName) == false || int.test(surName) == true){
    fail = "You entered the surname incorrectly";
  } else if(char.test(age) == true || int.test(age) == false){
    fail = "You entered the age incorrectly";
  } else{
    alert("no errors");
  }

  if(fail){
    alert(fail);
  }

}

function validate(){
  {
    var RegularName=new RegExp('[A-Za-z]{2,10}');
    var userName=document.getElementById("name").value;
    var check1=RegularName.exec(userName);
    var checkName;
   if(check1===null){
    alert("Use only letters for name");
   }
   else
    { checkName=true;}


   var RegularPassword=new RegExp('[A-Za-z0-9]{6,30}');
   var userPassword=document.getElementById("lastName").value;
   var check2=RegularPassword.exec(userPassword);
   var checkPassword=false;

   if(check2===null)
   {alert("Password must have at least 6 symbols, but not more than 30")
   }else{
       checkPassword =true;
   }

    var RegularEmail=new RegExp('^[A-Za-z0-9]*@[a-z]');
    var userEmail=document.getElementById("surName").value;
    var check3=RegularEmail.exec(userEmail);
    var checkEmail;
   if(check3===null){
    alert("Your e-mail should something like markus@ukr.net")
   }
   else
    { checkEmail=true;}


   if(checkName==true && checkPassword==true && checkEmail==true){
       alert("Thank you for registration");
   }
};

var button = document.getElementById('submit');
button.addEventListener("click",validate);
}

var a = document.getElementById("logo");
a.addEventListener("mouseover",()=>{a.style.fontSize = "60px"; a.style.transition="1s";})
a.addEventListener("mouseleave",()=>{a.style.fontSize=null;})

/*lab 7*/

function style2(){
  var style1 = document.getElementById("style1");
  var style2 = document.getElementById("style2");
  var fon = document.getElementById("sport");
  var nav = document.getElementById("style2");
  var nav1 = document.getElementById("nav1");
  var nav2 = document.getElementById("nav2");
  var nav3 = document.getElementById("nav3");
  var nav4 = document.getElementById("nav4");
  var about = document.getElementById("about");
  var weuse = document.getElementById("weuse");


  style1.style.display = "none";
  style2.style.display = "inline-block";
  fon.style.display = "block";
  nav.style.color = "#ff0000";
  nav1.style.color = "#ff0000";
  nav2.style.color = "#ff0000";
  nav3.style.color = "#ff0000";
  nav4.style.color = "#ff0000";
  about.style.background = "#ff0000";
  weuse.style.background = "#ff0000";

}

function style1(){
  var style1 = document.getElementById("style1");
  var style2 = document.getElementById("style2");
  var fon = document.getElementById("sport");
  var nav = document.getElementById("style2");
  var nav1 = document.getElementById("nav1");
  var nav2 = document.getElementById("nav2");
  var nav3 = document.getElementById("nav3");
  var nav4 = document.getElementById("nav4");
  var about = document.getElementById("about");
  var weuse = document.getElementById("weuse");

  style2.style.display = "none";
  style1.style.display = "inline-block";
  fon.style.display = "none";


  nav1.style.color = "#00c1ff";
  nav2.style.color = "#00c1ff";
  nav3.style.color = "#00c1ff";
  nav4.style.color = "#00c1ff";
  about.style.background = "#161616";
  weuse.style.background = "#161616";


}
