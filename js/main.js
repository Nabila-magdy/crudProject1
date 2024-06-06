/*crud create , read , update , delete */
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteURL");
var container;

if (localStorage.getItem("container")) {
   container = JSON.parse(localStorage.getItem("container"));
   display();
} else {
   container = [];
}
function getInfo() {
   if (urlValidation() === true && nameValidation() === true) {
      info = {
         name: siteName.value,
         url: siteUrl.value,
      }
      container.push(info);
      // console.log(container);
      saveToLocalStorage();
      clear();
      display();

   } else{
      console.log("error");
   }   
}

function display() {
   cartona = "";
   for (var i = 0; i < container.length; i++) {
      cartona += `<tr>
     <td>${i + 1}</td>
      <td>${container[i].name}</td>
      <td><button class="btn btn-green" onclick="visitUrl(${i})"><i class="fa-solid fa-eye me-1"></i> Visit</button></td>
      <td><button class="btn btn-dang" onclick="deletinfo(${i})"><i class="fa-regular fa-trash-can me-1"></i> Delete</button></td> 
      </tr> `
   }
   document.getElementById("tableBody").innerHTML = cartona;
}

function clear() {
   siteName.value = "";
   siteUrl.value = "";
}

function deletinfo(index) {
   container.splice(index, 1);
   saveToLocalStorage();
   display();
}

function saveToLocalStorage() {
   localStorage.setItem("container", JSON.stringify(container))
}

function visitUrl(index) {
 console.log(container[index].url);
   alert("open console")
   //كدا مسكته باقي اروحله بقا بقااااا
}
function urlValidation() {
   var regex = /(https):\/\/[a-zA-Z0-9]{3,}\.com/
   if (regex.test(siteUrl.value)) {
      siteUrl.classList.add("is-valid");
      siteUrl.classList.remove("is-invalid");
      return true;
   } else {
      siteUrl.classList.add("is-invalid");
      siteUrl.classList.remove("is-valid");
      return false;
   }
}
function nameValidation() {
   var regex = /^\w{3,6}$/
   if (regex.test(siteName.value)) {
      siteName.classList.add("is-valid");
      siteName.classList.remove("is-invalid");
      return true;
   } else {
      siteName.classList.add("is-invalid");
      siteName.classList.remove("is-valid");
      return false;
   }
}