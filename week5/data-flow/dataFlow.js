const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!"
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one."
  }
]

// Render function to display posts
function renderPosts() {
  const postsContainer = document.getElementById("posts")
  postsContainer.innerHTML = "" // Clear previous posts

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div")
    postDiv.classList.add("post")
    postDiv.textContent = `${post.name}: ${post.text}`

    // Extension: remove post on click
    postDiv.addEventListener("click", () => {
      posts.splice(index, 1)
      renderPosts()
    })

    postsContainer.appendChild(postDiv)
  })
}

// Event: post button click
document.getElementById("submit").addEventListener("click", () => {
  const nameInput = document.getElementById("name")
  const textInput = document.getElementById("text")

  const name = nameInput.value.trim()
  const text = textInput.value.trim()

  if (!name || !text) return 

  posts.push({ name, text })

  nameInput.value = ""
  textInput.value = ""

  renderPosts()
})

// Initial render on page load
renderPosts()
