const seachBarContainerEl = document.querySelector(".search-bar-container")

const searchEl = document.querySelector(".search")

searchEl.addEventListener("click", () => {
  seachBarContainerEl.classList.toggle("active")
})