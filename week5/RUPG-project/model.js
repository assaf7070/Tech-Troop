class APIManager {
  constructor() {
    this.data = {}
  }

  async fetchMainUserAndFriends() {
    const res = await fetch('https://randomuser.me/api/?results=7')
    const json = await res.json()
    const [mainUser, ...friends] = json.results

    this.data.mainUser = {
      name: `${mainUser.name.first} ${mainUser.name.last}`,
      city: mainUser.location.city,
      state: mainUser.location.state,
      picture: mainUser.picture.large
    }

    this.data.friends = friends.map(user => ({
      name: `${user.name.first} ${user.name.last}`
    }))
  }
}

