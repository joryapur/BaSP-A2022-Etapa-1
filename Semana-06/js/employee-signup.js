window.onload = function () {
  var main = document.getElementById("main");
  var form = document.getElementById("form");
  var inputFirstName = document.getElementById("firstName");
  var inputPostalCode = document.getElementById("postalCode");
  var inputEmail = document.getElementById("email");
  var inputPass = document.getElementById("pass");
  var inputRepeatPass = document.getElementById("repeatPass");
  var submit = document.getElementById("submit");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var alertError = document.createElement("h3");
  alertError.classList.add("redAlert");

  function containsNums(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function notNumber(val) {
    val = parseInt(val);
    if (isNaN(val)) {
      return true;
    } else {
      return false;
    }
  }

  function upperCaseInString(word) {
    for (var i = 0; i < word.length; i++) {
      if (
        word.charAt(i) == word.charAt(i).toUpperCase() &&
        isNaN(word.charAt(i))
      ) {
        return true;
      }
    }
    return false;
  }
  //aca falta agregarle algo porque si es un simbolo no funciona, si es un numero no importa
  //porque esta la otra funcion de numeros

  function isLetters(word) {
    if (word.toUpperCase() !== word.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  function validateFirstName() {
    var nameLength = inputFirstName.value.length;
    var nameValue = inputFirstName.value;
    var nameLengthValid = nameLength > 3 && nameLength < 50;
    var numbs = containsNums(nameValue);
    var letters = isLetters(nameValue);
    if (!nameLengthValid || numbs) {
      inputFirstName.classList.add("invalidValue");
      alertError.innerText = "Incorrect username or password";
      form.appendChild(alertError);
      return false;
    } else {
      inputFirstName.classList.add("validValue");
      return true;
    }
  }

  function validatePostalCode() {
    var postalLength = inputPostalCode.value.length;
    var postalValue = inputPostalCode.value;
    var postalLengthValid = postalLength < 4 || postalLength > 5;
    var notNums = notNumber(postalValue) == true;
    if (postalLengthValid || notNums) {
      inputPostalCode.classList.add("invalidValue");
      alertError.innerText = "Incorrect username or password";
      form.appendChild(alertError);
      return true;
    } else {
      inputPostalCode.classList.add("validValue");
      return false;
    }
  }

  function validateEmail() {
    if (emailExpression.test(inputEmail.value)) {
      inputEmail.classList.add("validValue");
      return true;
    } else {
      inputEmail.classList.add("invalidValue");
      alertError.innerText = "Incorrect username or password";
      form.appendChild(alertError);
    }
  }

  function validatePass() {
    var passLength = inputPass.value.length;
    var passValue = inputPass.value;
    var upperInPass = upperCaseInString(passValue);
    var numInPass = containsNums(passValue);
    if (passLength >= 8 && passLength <= 30 && numInPass && upperInPass) {
      inputPass.classList.add("validValue");
      return true;
    } else {
      inputPass.classList.add("invalidValue");
      alertError.innerText = "Incorrect username or password";
      form.appendChild(alertError);
      return false;
    }
  }

  function validateRepeat() {
    var passOk = validatePass() == true;
    var pass1 = inputPass.value;
    var passRepeat = inputRepeatPass.value;
    if (passOk) {
      if (pass1 === passRepeat) {
        inputRepeatPass.classList.add("validValue");
        return true;
      } else {
        inputRepeatPass.classList.add("invalidValue");
        alertError.innerText = "Incorrect username or password";
        form.appendChild(alertError);
        return false;
      }
    } else {
      inputRepeatPass.classList.add("invalidValue");
      alertError.innerText = "Incorrect username or password";
      form.appendChild(alertError);
      return false;
    }
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    alertError.innerText = "";
  }

  submit.onclick = function (e) {
    e.preventDefault();
    var mailIsOk = validateEmail(inputEmail.value);
    var passIsOk = validatePass(inputPass.value);
    if (passIsOk && mailIsOk) {
      alert(
        "Email: " + inputEmail.value + " " + "Password: " + inputPass.value
      );
    } else {
      alert("Incorrect Username or Password");
    }
  };

  inputFirstName.addEventListener("blur", validateFirstName);
  inputPostalCode.addEventListener("blur", validatePostalCode);
  inputEmail.addEventListener("blur", validateEmail);
  inputPass.addEventListener("blur", validatePass);
  inputRepeatPass.addEventListener("blur", validateRepeat);
  form.addEventListener("focusin", normalizeInput);
};