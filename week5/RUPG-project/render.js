class Renderer {
  renderMainUser(user) {
    $("#user-img").attr("src", user.picture)
    $("#user-name").text(user.name)
    $("#user-location").text(`${user.city}, ${user.state}`)
  }

  renderFriends(friends) {
    const $list = $("#friends-list")
    $list.empty()
    friends.forEach(friend => {
      $list.append(`<li>${friend.name}</li>`)
    })
  }

  renderQuote(quote) {
    $("#quote").text(quote)
  }

  renderPokemon(pokemon) {
    $("#pokemon-name").text(pokemon.name)
    $("#pokemon-img").attr("src", pokemon.image)
  }

  renderAbout(about) {
    $("#about-text").text(about)
  }
}
