
const apiManager = new APIManager()
const renderer = new Renderer()

$(document).ready(() => {

    $("#generate-btn").on("click", async () => {
        await apiManager.fetchMainUserAndFriends()
        await apiManager.fetchKanyeQuote();
        await apiManager.fetchPokemon();
        await apiManager.fetchAbout();
        renderer.renderMainUser(apiManager.data.mainUser)
        renderer.renderFriends(apiManager.data.friends)
        renderer.renderQuote(apiManager.data.quote)
        renderer.renderPokemon(apiManager.data.pokemon)
        renderer.renderAbout(apiManager.data.about)

        $(".profile-card, .quote-section, .pokemon-section, .about-section, .friends-section").show()

    })

    loadSavedUsersDropdown()

})


//Extensions:

function loadSavedUsersDropdown() {
    const $dropdown = $("#saved-users-dropdown")
    $dropdown.empty()

    const users = JSON.parse(localStorage.getItem("users")) || {}

    //default
    $dropdown.append(`<option value="">-- Select Saved User --</option>`)

    Object.keys(users).forEach(name => {
        $dropdown.append(`<option value="${name}">${name}</option>`)
    })
}

// Save current user
$("#save-btn").on("click", () => {

    if (!apiManager.data.mainUser) {
        alert("Please generate a user before saving.")
        return
    }
    
    const users = JSON.parse(localStorage.getItem("users")) || {}

    const currentUser = {
        mainUser: apiManager.data.mainUser,
        friends: apiManager.data.friends,
        quote: apiManager.data.quote,
        pokemon: apiManager.data.pokemon,
        about: apiManager.data.about
    }

    const key = currentUser.mainUser.name

    users[key] = currentUser
    localStorage.setItem("users", JSON.stringify(users))

    loadSavedUsersDropdown()
    alert(`User saved as "${key}"`)
})


// Load user
$("#load-btn").on("click", () => {
    const selectedKey = $("#saved-users-dropdown").val()
    if (!selectedKey) return

    const users = JSON.parse(localStorage.getItem("users")) || {}
    const userData = users[selectedKey]
    if (!userData) {
        alert("User not found.")
        return
    }

    apiManager.data = userData
    renderer.renderMainUser(userData.mainUser)
    renderer.renderFriends(userData.friends)
    renderer.renderQuote(userData.quote)
    renderer.renderPokemon(userData.pokemon)
    renderer.renderAbout(userData.about)
})


