const userField = document.getElementById("user");
const passField = document.getElementById("pass");
const status = document.getElementById("status");
const loginBtn = document.getElementById("login-btn");

const USERNAME = "root";
const PASSWORD = "superdupermegauserroot";

function log(line) {
  status.textContent += line + "\n";
}

function typeText(element, text, speed, callback) {
  let i = 0;
  const interval = setInterval(() => {
    element.value += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

setTimeout(() => {
  log("[ AUTH ] Typing username...");
  typeText(userField, USERNAME, 80, () => {
    log("[ AUTH ] Typing password...");
    setTimeout(() => {
      typeText(passField, PASSWORD, 60, () => {
        log("[ AUTH ] Submitting credentials...");
        setTimeout(() => loginBtn.click(), 500);
      });
    }, 250);
  });
}, 600);

loginBtn.addEventListener("click", () => {
  log("[ AUTH ] Validating credentials...");
  setTimeout(() => {
    log("[  OK  ] Access granted");
  }, 700);

  setTimeout(() => {
    window.location.href = "main.html";
  }, 1500);
});

