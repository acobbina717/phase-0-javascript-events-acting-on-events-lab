// Your code here
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#d8003e"
dodger.style.border = "inset #21911b 3px"

function moveDodgerLeft() {
  const leftPx = dodger.style.left
  const left = parseInt(leftPx)
  if (left > 0) {
    dodger.style.left = `${Math.max(0, left - 14)}px`
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

function moveDodgerRight() {
  const rightPx = dodger.style.left
  const right = parseInt(rightPx)
  if (right < 360) {
    dodger.style.left = `${Math.min(354, right + 14)}px`
    console.log(`right:${right}`)
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight()
  }
})

function moveDodgerUp() {
  const upPx = dodger.style.bottom
  const up = parseInt(upPx)
  if (up < 380) {
    dodger.style.bottom = `${Math.min(374, up + 14)}px`
    console.log(`up:${up}`)
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    moveDodgerUp()
  }
})

function moveDodgerDown() {
  const downPx = dodger.style.bottom
  const down = parseInt(downPx)
  if (down < 380) {
    dodger.style.bottom = `${Math.max(0, down - 14)}px`
    console.log(`down:${down}`)
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    moveDodgerDown()
  }
})

