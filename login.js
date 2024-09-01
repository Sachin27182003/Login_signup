
  document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });


  function getdata(){

    const data = JSON.parse(localStorage.getItem("data"))  || {"dataList": []};
    console.log(data);
    return data;
  }

  function addToLocalStorage(info){
    const data = getdata();


    data.dataList.push(info);
    localStorage.setItem("data", JSON.stringify(data));
  }


  document.addEventListener("DOMContentLoaded", () => {
   console.log("hello world")

   const signup_button = document.getElementById("sign-up");
   const name_up = document.getElementById("name_up");
   const email_up = document.getElementById("email_up");
   const password_up = document.getElementById("password_up");


   const validateForm = () => {

    const email_test = /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    const password_test = /^(?=.*[a-z])(?=.*[A-Z])(?=.*0-9)[a-zA-Z0-9]{8,}$/;

    

    if(name_up.value === '' ){
         alert("name can't be blank");
         return false;
    } else if (email_up.value === ''){
         alert("email can't be blank");
         return false;
    }else if (!email_test.test(email_up.value)){
          alert("Invalid Email address");
          return false;
    } else if (password_up.value === '' ){
         alert("password can't be blank");
         return false;
    } else if (password_test.test(password_up.value)){
        alert("password must contain 8 characters incuding atleast a digit an aphabet combination of upper and lower case")
        return false;
    } else {
      return true;
     }

   }

   password_up.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && validateForm()){
        login(); 
    }
})

  signup_button.addEventListener("click", (event) => {
      if(validateForm()){
        login();
      }
  })


  function login(){
      const name__up = name_up.value;
      const email__up = email_up.value; 
      const password__up = password_up.value;


    addToLocalStorage({Name: name__up, Email: email__up, Password: password__up});
        name_up.value = '';
        email_up.value = '';
        password_up.value = '';
 }






  })



  