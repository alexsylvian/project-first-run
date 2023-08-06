const twilightZone = [
      {
        id: 1,
        episode: 101,
        title: "Where is Everybody?",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjM4NzA0OTMyNF5BMl5BanBnXkFtZTgwMDA2OTEyMjE@._V1_.jpg",
        synopsis: "In the first episode ever made of The Twilight Zone, a man finds himself totally alone in a small town. His panic escalates into terror as he desperately looks for an explanation.",
        rating: "5/5"
      },
      {
        id: 2,
        episode: 102,
        title: "One For The Angels",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNGUzYTNjMTYtOTI0Zi00ZTE1LTlhZGUtMjZjYjZjZWM3MTJmXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg",
        synopsis: "A sidewalk pitchman's deal with Death may cost a young girl her life.",
        rating: "2.5/5"
      },
      {
        id: 3,
        episode: 103,
        title: "Mr. Denton on Doomsday",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDk2MjIxYjctZjIwMS00NjI2LWJjZGUtMmNhNGZlYmY4N2JlXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg",
        synopsis: "A jaded gunslinger finds a magic potion that restores his shooting skill but brings an end to his fast-drawing career.",
        rating: "3/5"
      },
      {
        id: 4,
        episode: 104,
        title: "The Sixteen-Millimeter Shrine",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZTk3NzgyMTUtY2E2MS00NjcwLTgyOGQtN2Y2OTY3YzAzYmJiXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
        synopsis: "A forgotten star of the '30's uses her old movies to re-create the spirit of her heyday.",
        rating: "4.5/5"
      },
      {
        id: 5,
        episode: 105,
        title: "Walking Distance",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZDc3ZGE2Y2EtNGVkMi00MGY5LTgwNjItYmYzMTYzNjgwYzM2XkEyXkFqcGdeQXVyMTE0Nzk5NzM4._V1_.jpg",
        synopsis: "Rod Serling makes me cry like a little baby.",
        rating: "5/5",
      }
    ]

    const blue = document.getElementsByTagName('body')[0]

const userObj = {
    name:"Steve",
    email:"steve@steve.com"
}

/*function submitData(name, email) {
    return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then((objName) => {document.body.innerHTML = objName["id"]})
}

submitData()*/