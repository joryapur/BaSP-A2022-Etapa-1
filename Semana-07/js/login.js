window.onload = function () {
  var inputEmail = document.getElementById("email");
  var inputPass = document.getElementById("pass");
  var passwordError = document.getElementById("passwordError");
  var emailError = document.getElementById("emailError");
  var submit = document.getElementById("submit");
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

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

  function showValid(field) {
    field.classList.add("validValue");
  }

  function showInvalid(input, p, msg) {
    p.innerHTML = msg;
    input.classList.add("invalidValue");
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    if (e.target == inputEmail) {
      emailError.innerHTML = "";
    } else {
      passwordError.innerHTML = "";
    }
  }

  function validateEmail() {
    if (emailExpression.test(inputEmail.value)) {
      showValid(inputEmail);
      return true;
    } else {
      showInvalid(inputEmail, emailError, "Valid E-mail required");
    }
  }

  function validatePass() {
    var passLength = inputPass.value.length;
    var passValue = inputPass.value;
    var upperInPass = upperCaseInString(passValue);
    var numInPass = containsNums(passValue);
    if (passLength >= 8 && passLength <= 30 && numInPass && upperInPass) {
      showValid(inputPass);
      return true;
    } else {
      showInvalid(
        inputPass,
        passwordError,
        "More than 3 chars,1 number and Uppercase required"
      );
    }
  }

  submit.onclick = function (e) {
    e.preventDefault();
    var mailIsOk = validateEmail(inputEmail.value);
    var passIsOk = validatePass(inputPass.value);
    if (passIsOk && mailIsOk) {
      fetch(
        "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" +
          inputEmail.value +
          "&password=" +
          inputPass.value
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          if (response.success == true) {
            alert("Successfully login:   " + response.msg);
          } else {
            throw new Error(response.msg);
          }
        })
        .catch(function (err) {
          alert(err);
        });
    } else {
      var msg = "";
      if (emailError.innerHTML.length > 4) {
        msg += "Incorrect Email";
      }
      if (passwordError.innerHTML.length > 4) {
        msg += " Incorrect password";
      }
      alert(msg);
    }
  };

  inputEmail.addEventListener("blur", validateEmail);
  inputPass.addEventListener("blur", validatePass);
  inputEmail.addEventListener("focus", normalizeInput);
  inputPass.addEventListener("focus", normalizeInput);
};
