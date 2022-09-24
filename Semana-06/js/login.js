window.onload = function () {
  var main = document.getElementById("main");
  var form = document.getElementById("form");
  var inputEmail = document.getElementById("email");
  var inputPass = document.getElementById("pass");
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
      main.appendChild(alertError);
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
      main.appendChild(alertError);
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

  inputEmail.addEventListener("blur", validateEmail);
  inputPass.addEventListener("blur", validatePass);
  form.addEventListener("focusin", normalizeInput);
};
