/* ============================================
   GÖRGEI OS – PROFESSIONAL BOOT SEQUENCE
   ============================================ */

const bootLines = [
  "[ INFO ] Görgei OS Secure Bootloader v4.0",
  "[ INFO ] Initializing system...",
  "",
  "[ OK   ] CPU online",
  "[ OK   ] Memory check passed",
  "[ OK   ] Network interface detected",
  "",
  "[ INFO ] Loading kernel modules...",
  "[ OK   ] netstack.ko",
  "[ OK   ] firewall.ko",
  "[ OK   ] crypto.ko",
  "",
  "[ INFO ] Starting core services...",
  "[ OK   ] Network Manager",
  "[ OK   ] Intrusion Detection",
  "[ OK   ] Secure Shell Daemon",
  "",
  "[ INFO ] Decrypting user profile...",
  "[ OK   ] User: root",
  "",
  "[ INFO ] Rendering system logo...",
  ""
];

const dragon = [
"                   /\\",
"                  /  \\",
"                 |    |",
"               --:'''':--",
"                 :'_' :",
"                 _:\"\":\\___",
"      ' '      ____.' :::     ' '",
"             .'  _     :::.",
"            /   (_)      :::\\",
"           |  ,           :::|",
"           |   `-.        :::|",
"            \\      `.     :::/",
"             `.       `.  ::'",
"               `-.      `-'",
"                  `-.__.-'",
""
];

function glitchLine(line) {
  const chars = "!@#$%^&*()_+=-{}[]<>?/\\|";
  let glitched = "";
  for (let i = 0; i < line.length; i++) {
    if (Math.random() < 0.12) {
      glitched += chars[Math.floor(Math.random() * chars.length)];
    } else {
      glitched += line[i];
    }
  }
  return glitched;
}

let index = 0;
let dragonIndex = 0;
const bootText = document.getElementById("boot-text");

function typeBootLines() {
  if (index < bootLines.length) {
    bootText.innerHTML += bootLines[index] + "\n";
    index++;
    setTimeout(typeBootLines, 60 + Math.random() * 80);
  } else {
    bootText.innerHTML += "\n[ INFO ] Loading Dragon Module...\n\n";
    setTimeout(renderDragon, 400);
  }
}

function renderDragon() {
  if (dragonIndex < dragon.length) {
    const original = dragon[dragonIndex];
    const glitched = glitchLine(original);

    bootText.innerHTML += glitched + "\n";

    setTimeout(() => {
      bootText.innerHTML = bootText.innerHTML.replace(glitched, original);
    }, 120);

    dragonIndex++;
    setTimeout(renderDragon, 70);
  } else {
    bootText.innerHTML += "\n[ OK   ] Boot complete";
    bootText.innerHTML += "\n[ INFO ] Starting Login Service █";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1800);
  }
}

typeBootLines();
