const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let boxX = Math.random() * (canvas.width - 30);
let boxY = 0;
let playerX = canvas.width / 2 - 20;
let score = 0;

function drawBox() {
  ctx.fillStyle = "red";
  ctx.fillRect(boxX, boxY, 30, 30);
}

function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(playerX, canvas.height - 40, 80, 20);
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBox();
  drawPlayer();
  drawScore();
  boxY += 4;

  if (
    boxY + 30 > canvas.height - 40 &&
    boxX < playerX + 80 &&
    boxX + 30 > playerX
  ) {
    score++;
    boxY = 0;
    boxX = Math.random() * (canvas.width - 30);
  }

  if (boxY > canvas.height) {
    alert("Game Over! Final Score: " + score);
    document.location.reload();
  }

  requestAnimationFrame(update);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 20;
  } else if (e.key === "ArrowRight" && playerX < canvas.width - 80) {
    playerX += 20;
  }
});

update();
