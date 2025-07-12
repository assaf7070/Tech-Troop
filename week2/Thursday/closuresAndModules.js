
//Ex1

const StringFormatter = function() {
    const capitalizeFirst = function(str) { 
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const toSkewerCase = function(str) {
        return str.split(" ").join("-")
    }

    return {
        capitalizeFirst,
        toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box

//Ex2

const Bank = function() {
    let money = 500
    const depositCash = function(amout) {
        money+=amout
    }
    const checkBalance = function() {
        console.log(money)
        return money
    }

    return { 
        deposit : depositCash,
        showBalance : checkBalance
    }



}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


//Ex3

const SongsManager = function() {
    let songs = {}
    const baseURL = "https://www.youtube.com/watch?v="
    const addSong = function (songName, url) { 
        const videoId = url.split("v=")[1]
        songs[songName] = videoId
    }

    const getSong = function(songName) { 
        console.log(baseURL+songs[songName])
    }

    return{
        addSong,getSong
    }

}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
