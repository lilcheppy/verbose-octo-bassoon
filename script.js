"use strict";

const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const gameOver = document.querySelector(".game--Over");
let speed = 1000;
let i = 0;

// Return random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// let changeSpeed = function () {
//   speed = getRandomArbitrary(1500, 4000);
//   console.log(speed);
// };
// // let i;

gameOver.classList.add("hidden");

// Walking Dino

// const walking = function () {
//   i = 1;
//   dino.src = `pixil-${i}.png`;
//   setTimeout((i = 2), 2000);
//   dino.src = `pixil-${i}.png`;
// };

// setInterval((dino.src = "pixil-1.png"), 10000);
// setInterval((dino.src = "pixil-2.png"), 5000);

// Move cactus function
const moveCactus = function () {
  speed = getRandomArbitrary(1000, 2500);
  cactus.animate(
    [
      //keyframes
      { transform: "translateX(0px" },
      { transform: "translateX(-1400px)" },
    ],
    {
      //timing options
      duration: speed,
      // easing: "ease-in",
      iterations: 1,
    }
  );
};

function myLoop() {
  setTimeout(function () {
    moveCactus();
    i++;
    if (i < 100) {
      myLoop();
    }
  }, speed);
}

myLoop();

// do {
//   moveCactus();
// } while (i < 100);

// setInterval(moveCactus(), speed);

// setInterval(changeSpeed(), 200);

// setInterval(moveCactus(), speed);
// Move cactus + change speed

// let rep = 1;
// while (rep <= 100) {
//   moveCactus();
//   rep++;
// }

// Dino Jump
document.addEventListener("keypress", function (e) {
  let animationLive = false;
  if (e.key === " " && animationLive !== true) {
    console.log("Space pressed");
    // dino.classList.toggle("animate");
    animationLive = true;
    dino.animate(
      [
        //keyframes
        { transform: "translateY(0px" },
        { transform: "translateY(-300px)" },
        { transform: "translateY(0px" },
      ],
      {
        //timing options
        duration: 800,
        iterations: 1,
      }
    );
  }
});

// setInterval(moveCactus, speed);

// If Cactus & Dino Touch, Game over

const checkDead = setInterval(function () {
  let dinoPositionTop = dino.getBoundingClientRect().top;
  let cactusPositionLeft = cactus.getBoundingClientRect().left;
  if (
    cactusPositionLeft < 40 &&
    cactusPositionLeft > 0 &&
    dinoPositionTop >= 260
  ) {
    cactus.classList.add("hidden");
    gameOver.classList.remove("hidden");
    // alert("You Lose!");
  }
}, 10);
