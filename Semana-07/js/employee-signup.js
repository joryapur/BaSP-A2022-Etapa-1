window.onload = function () {
  var form = document.getElementById("form");
  var inputFirstName = document.getElementById("firstName");
  var inputLastName = document.getElementById("lastName");
  var inputDNI = document.getElementById("dni");
  var inputPhone = document.getElementById("phone");
  var inputBirthDate = document.getElementById("birthDate");
  var inputCity = document.getElementById("city");
  var inputAddress = document.getElementById("address");
  var inputPostalCode = document.getElementById("postalCode");
  var inputEmail = document.getElementById("email");
  var inputPass = document.getElementById("pass");
  var inputRepeatPass = document.getElementById("repeatPass");
  var submit = document.getElementById("submit");

  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var invalidAlert = document.createElement("p");
  var node = document.createTextNode("");
  invalidAlert.classList.add("error-msg");

  function fillWithSaved() {
    if (localStorage.getItem("Email")) {
      inputEmail.value = localStorage.getItem("Email");
    }
    if (localStorage.getItem("Pass")) {
      inputPass.value = localStorage.getItem("Pass");
    }
    if (localStorage.getItem("Address")) {
      inputAddress.value = localStorage.getItem("Address");
    }
    if (localStorage.getItem("City")) {
      inputCity.value = localStorage.getItem("City");
    }
    if (localStorage.getItem("Date of birth")) {
      inputBirthDate.value = localStorage.getItem("Date of birth");
    }
    if (localStorage.getItem("DNI")) {
      inputDNI.value = localStorage.getItem("DNI");
    }
    if (localStorage.getItem("First Name")) {
      inputFirstName.value = localStorage.getItem("First Name");
    }
    if (localStorage.getItem("Last Name")) {
      inputLastName.value = localStorage.getItem("Last Name");
    }
    if (localStorage.getItem("Phone")) {
      inputPhone.value = localStorage.getItem("Phone");
    }
    if (localStorage.getItem("Postal code")) {
      inputPostalCode.value = localStorage.getItem("Postal code");
    }
    if (localStorage.getItem("Confirm Password")) {
      inputRepeatPass.value = localStorage.getItem("Confirm Password");
    }
  }

  fillWithSaved();

  function containsNums(string) {
    var nums = "0123456789";
    for (var i = 0; i < string.length; i++) {
      if (nums.indexOf(string.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function isNumber(val) {
    var valOk = val * 3;
    if (valOk) {
      return true;
    } else {
      return false;
    }
  }

  function spaceInString(chars) {
    var space = " ";
    for (var i = 0; i < chars.length; i++) {
      if (space.indexOf(chars.charAt(i), 0) != -1) {
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

  function isNotLetter(string) {
    for (var i = 0; i < string.length; i++) {
      char = string[i];
      if (char.toUpperCase() == char.toLowerCase()) {
        return true;
      }
    }
  }

  function showValid(field) {
    field.classList.add("validValue");
  }

  function showInvalid(field, msg) {
    field.classList.add("invalidValue");
    node.textContent = msg;
    invalidAlert.appendChild(node);
    field.parentNode.insertAdjacentElement("beforebegin", invalidAlert);
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    invalidAlert.remove();
  }

  function validateFirstName() {
    nameLength = inputFirstName.value.length;
    nameValue = inputFirstName.value;
    nameLengthValid = nameLength > 3 && nameLength < 50;
    notNumbs = containsNums(nameValue) == false;
    onlyLetters = isNotLetter(nameValue) == undefined;
    if (nameLengthValid && notNumbs && onlyLetters) {
      showValid(inputFirstName);
      return true;
    } else {
      showInvalid(inputFirstName, "Between 3 & 50 chars. Only letters");
    }
  }

  function validateLastName() {
    lastNameLength = inputLastName.value.length;
    lastNameValue = inputLastName.value;
    lastNameLengthValid = lastNameLength > 3 && lastNameLength < 50;
    notNumbs = containsNums(lastNameValue) == false;
    onlyLetter = isNotLetter(lastNameValue) == undefined;
    if (lastNameLengthValid && notNumbs && onlyLetter) {
      showValid(inputLastName);
      return true;
    } else {
      showInvalid(inputLastName, "Between 3 & 50 chars. Only letters");
    }
  }

  function validateDNI() {
    dniLength = inputDNI.value.length;
    dniValue = inputDNI.value;
    dniLengthValid = dniLength > 7 && dniLength < 10;
    onlyNums = isNumber(dniValue);
    if (onlyNums && dniLengthValid) {
      showValid(inputDNI);
      return true;
    } else {
      showInvalid(inputDNI, "8 or 9 numbers");
    }
  }

  function validatePhone() {
    phoneLength = inputPhone.value.length;
    phoneValue = inputPhone.value;
    phoneLengthValid = phoneLength === 10;
    onlyNums = isNumber(phoneValue);
    if (onlyNums && phoneLengthValid) {
      showValid(inputPhone);
      return true;
    } else {
      showInvalid(inputPhone, "10 numbers");
    }
  }

  function validateCity() {
    cityLength = inputCity.value.length;
    cityValue = inputCity.value;
    cityLengthValid = cityLength > 3;
    if (cityLengthValid) {
      showValid(inputCity);
      return true;
    } else {
      showInvalid(inputCity, "More than 3 chars. Alphanumeric allowed");
    }
  }

  function validateAddress() {
    addressLength = inputAddress.value.length;
    addressValue = inputAddress.value;
    addressLengthValid = addressLength > 5;
    numInAddress = containsNums(addressValue);
    addressSpace = spaceInString(addressValue);
    if (addressLengthValid && numInAddress && addressSpace) {
      showValid(inputAddress);
      return true;
    } else {
      showInvalid(
        inputAddress,
        "More than 5 chars(included numbers and space)"
      );
    }
  }

  function validateBirthDate() {
    birthDateLength = inputBirthDate.value.length;
    birthDateValue = inputBirthDate.value;
    birthDateValid = birthDateValue !== "";
    if (birthDateValid) {
      showValid(inputBirthDate);
      return true;
    } else {
      inputBirthDate.classList.add("invalidValue");
      node.textContent = "Date required";
      invalidAlert.appendChild(node);
      inputBirthDate.parentNode.insertAdjacentElement(
        "afterbegin",
        invalidAlert
      );
    }
  }

  function validatePostalCode() {
    postalLength = inputPostalCode.value.length;
    postalValue = inputPostalCode.value;
    postalLengthValid = postalLength === 4 || postalLength === 5;
    onlyNums = isNumber(postalValue);
    if (onlyNums && postalLengthValid) {
      showValid(inputPostalCode);
      return true;
    } else {
      showInvalid(inputPostalCode, "Between 4 & 5 chars. Only numbers");
    }
  }

  function validateEmail() {
    if (emailExpression.test(inputEmail.value)) {
      showValid(inputEmail);
      return true;
    } else {
      showInvalid(inputEmail, "Valid E-mail required");
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
        "More than 3 chars,1 number and Uppercase required"
      );
    }
  }

  function validateRepeat() {
    var passOk = validatePass() == true;
    var pass1 = inputPass.value;
    var passRepeat = inputRepeatPass.value;
    if (passOk) {
      if (pass1 === passRepeat) {
        showValid(inputRepeatPass);
        return true;
      } else {
        showInvalid(inputRepeatPass, "Enter the same value as in password");
      }
    } else {
      var rpassLength = inputRepeatPass.value.length;
      var rpassValue = inputRepeatPass.value;
      var rupperInPass = upperCaseInString(rpassValue);
      var rnumInPass = containsNums(rpassValue);
      if (rpassLength >= 8 && rpassLength <= 30 && rnumInPass && rupperInPass) {
        showValid(inputRepeatPass);
        return true;
      } else {
        showInvalid(
          inputRepeatPass,
          "More than 3 chars,1 number and Uppercase required"
        );
      }
    }
  }

  function normalizeInput(e) {
    e.target.classList.remove("invalidValue");
    invalidAlert.remove();
  }

  submit.onclick = function (e) {
    e.preventDefault();
    if (
      validateFirstName(inputFirstName.value) &&
      validateLastName(inputLastName.value) &&
      validateDNI(inputDNI) &&
      validatePhone(inputPhone) &&
      validateBirthDate(inputBirthDate) &&
      validateCity(inputCity) &&
      validateAddress(inputAddress) &&
      validatePostalCode(inputPostalCode) &&
      validateRepeat(inputRepeatPass) &&
      validateEmail(inputEmail.value) &&
      validatePass(inputPass.value)
    ) {
      var infoUser = {
        FirstName: inputFirstName.value,
        LastName: inputLastName.value,
        Dni: inputDNI.value,
        Phone: inputPhone.value,
        BirthDate: inputBirthDate.value,
        City: inputCity.value,
        Address: inputAddress.value,
        PostalCode: inputPostalCode.value,
        Email: inputEmail.value,
        Password: inputPass.value,
      };
      var correctDate =
        birthDateValue.substring(5, 7) +
        "/" +
        birthDateValue.substring(8) +
        "/" +
        birthDateValue.substring(0, 4);
      fetch(
        "https://basp-m2022-api-rest-server.herokuapp.com/signup/?email=" +
          inputEmail.value +
          "&password=" +
          inputPass.value +
          "&name=" +
          inputFirstName.value +
          "&lastName=" +
          inputLastName.value +
          "&dni=" +
          inputDNI.value +
          "&dob=" +
          correctDate +
          "&phone=" +
          inputPhone.value +
          "&address=" +
          inputAddress.value +
          "&zip=" +
          inputPostalCode.value +
          "&city=" +
          inputCity
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          alert(
            response.msg +
              "     This data was sent:   " +
              JSON.stringify(infoUser, null, 4)
          );
          localStorage.setItem("Email", inputEmail.value),
            localStorage.setItem("Pass", inputPass.value),
            localStorage.setItem("First Name", inputFirstName.value),
            localStorage.setItem("Last Name", inputLastName.value),
            localStorage.setItem("DNI", inputDNI.value),
            localStorage.setItem("Date of birth", correctDate),
            localStorage.setItem("Phone", inputPhone.value),
            localStorage.setItem("Address", inputAddress.value),
            localStorage.setItem("Postal code", inputPostalCode.value),
            localStorage.setItem("City", inputCity.value),
            localStorage.setItem("Confirm Password", inputRepeatPass.value);
        })
        .catch(function (err) {
          alert(err);
        });
    } else {
      alert("Incorrect values");
    }
  };

  inputFirstName.addEventListener("blur", validateFirstName);
  inputLastName.addEventListener("blur", validateLastName);
  inputDNI.addEventListener("blur", validateDNI);
  inputPhone.addEventListener("blur", validatePhone);
  inputBirthDate.addEventListener("blur", validateBirthDate);
  inputCity.addEventListener("blur", validateCity);
  inputAddress.addEventListener("blur", validateAddress);
  inputPostalCode.addEventListener("blur", validatePostalCode);
  inputEmail.addEventListener("blur", validateEmail);
  inputPass.addEventListener("blur", validatePass);
  inputRepeatPass.addEventListener("blur", validateRepeat);
  form.addEventListener("focusin", normalizeInput);
};
