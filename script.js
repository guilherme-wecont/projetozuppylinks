function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./Assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Logo Zuppy preta")
  } else {
    img.setAttribute("alt", "Logo Zuppy roxa")
  }
}
