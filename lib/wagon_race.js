const race = document.querySelector('div#race');
const char = document.querySelector('div#char');
const end = document.querySelector('div#end');
race.style.display = "none";
end.style.display = "none";
let p1Char = "";
let p2Char = "";

function log(arg) {
  console.log(arg);
}

function finish() {
  race.style.display = "none";
  end.style.display = "";
  const audio = new Audio('../resources/coin.mp3');
  audio.play();
  document.querySelector('body').classList.add('ending');
  document.querySelector(".btn-end").addEventListener("click", (event) => {
    location.reload();
  });
}


function choice1(tecla) {
  const p1 = document.querySelector('#player1_race td.active');
  log(p1);
  p1Char = `url("../resources/${tecla}.gif")`;
  p1.style.backgroundImage = p1Char;
}

const character1 = (key) => {
  if (key === 'z') {
    choice1("doggo");
  } else if (key === 'x') {
    choice1("flash");
  } else if (key === 'c') {
    choice1("mario");
  } else if (key === 'v') {
    choice1("megaman");
  } else if (key === 'b') {
    choice1("sonic");
  } else if (key === 'n') {
    choice1("spidey");
  }
};

function movePlayer1() {
  const player = document.querySelector('#player1_race td.active');
  const rows = document.getElementById("player1_race").getElementsByTagName("td");
  const length = rows.length;
  player.style.backgroundImage = null;
  const next = player.nextElementSibling;
  player.classList.remove('active');
  if (next === rows[length - 1]) {
    finish();
  } else {
    next.classList.add('active');
    next.style.backgroundImage = p1Char;
  }
}

function choice2(tecla) {
  const p2 = document.querySelector('#player2_race td.active');
  log(p2);
  p2Char = `url("../resources/${tecla}.gif")`;
  p2.style.backgroundImage = p2Char;
}

const character2 = (key) => {
  if (key === 'a') {
    choice2("doggo");
  } else if (key === 's') {
    choice2("flash");
  } else if (key === 'd') {
    choice2("mario");
  } else if (key === 'f') {
    choice2("megaman");
  } else if (key === 'g') {
    choice2("sonic");
  } else if (key === 'h') {
    choice2("spidey");
  }
};

function movePlayer2() {
  const player = document.querySelector('#player2_race td.active');
  const rows = document.getElementById("player2_race").getElementsByTagName("td");
  const length = rows.length;
  player.style.backgroundImage = null;
  const next = player.nextElementSibling;
  next.style.backgroundImage = p2Char;
  player.classList.remove('active');
  if (next === rows[length - 1]) {
    finish();
  } else {
    next.classList.add('active');
  }
}

document.addEventListener('keyup', (event) => {
  const key = event.key;
  character1(key);
  character2(key);
  if (key === "p") {
    movePlayer1();
  } else if (key === "q") {
    movePlayer2();
  }
});

const button1 = document.querySelector(".btn-begin");
button1.addEventListener("click", (event) => {
  race.style.display = "";
  char.style.display = "none";
});
