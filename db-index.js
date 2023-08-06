console.log('before')
fetch('http://localhost:3000/twilightZone/2')
.then(res => console.log(res))
console.log('after')
console.log(fetch('http://localhost:3000/twilightZone/2'))

document.getElementById('episode-guide').addEventListener('submit', handleSubmit)

//Event Handlers
function handleSubmit(e){
    e.preventDefault()
    let episodeObj ={
        episode:e.target.episode.value,
        title:e.target.title.value,
        imageUrl:e.target.image_url.value,
        synopsis:e.target.synopsis.value,
        rating:parseFloat(e.target.rating.value)
    }
    renderOneEpisode(episodeObj)
    watchEpisode(episodeObj)
}

//DOM Render Functions
function renderOneEpisode(episode){
    //Build Animal
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
        <img src="${episode.imageUrl}">
        <div class="content">
            <h4>${episode.title}</h4>
            <p>
                A <span class="rating">${episode.rating}</span>/5 Rating.
            <p>
            <p>${episode.synopsis}</p>
        </div>
        <div class="buttons">
            <button id ='highRate'> Rate Higher </button>
            <button id ='lowRate'> Rate Lower </button>
            <button id ='delete'> Delete </button>
        </div>

    `

    card.querySelector('#highRate').addEventListener('click', () => {
        if(episode.rating < 5)
        episode.rating+= .5
        card.querySelector('span').textContent = episode.rating
        updateRating(episode)
    })

    card.querySelector('#lowRate').addEventListener('click', () => {
        if(episode.rating > 0)
        episode.rating-= .5
        card.querySelector('span').textContent = episode.rating
        updateRating(episode)
    })

    card.querySelector('#delete').addEventListener('click', () => {
        const confirmed = window.confirm('Are You Sure?')
        if (confirmed) {
        card.remove()
        deleteEpisode(episode)
        }
    })

    document.querySelector('#episode-list').appendChild(card)
}

//Fetch Requests
function getAllEpisodes(){
    fetch('http://localhost:3000/twilightZone')
    .then(res => res.json())
    .then(twilightZone => twilightZone.forEach(episode => renderOneEpisode(episode)))
}

//Initial Render
//Get Data and Render Our Episodes to the DOM
function initialize() {
    //twilightZone.forEach(episode => renderOneEpisode(episode))
}
//document.addEventListener('DOMContentLoaded', initialize);
getAllEpisodes()

console.log(fetch("http://api.open-notify.org/astros.json"))
fetch("http://api.open-notify.org/astros.json")
//.then(function (res){
//    return res.json()
//})
.then(res => res.json()) //REMEMBER THE () AFTER THE .JSON
.then(data => console.log(data))

function readID() {
    const form = document.getElementById('find-episode')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('id')

        console.log(input.value)

        fetch(`http://localhost:3000/twilightZone/${input.value}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            renderOneEpisode(data)
        })
    })
}
document.addEventListener('DOMContentLoaded', readID)

setTimeout(() => console.log('Hello World!'), 3000); // 0 Milliseconds!!
console.log("No, me first");

function watchEpisode(episodeObj){
    if (episodeObj.episode){
    console.log(JSON.stringify(episodeObj))
    fetch('http://localhost:3000/twilightZone',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(episodeObj)
    })
    .then(res => res.json())
    .then(episode => console.log(episode))
    .catch((error) => {document.body.innerHTML(error)}
)}else{console.log('nothing')}
}

function updateRating(episodeObj){
    fetch(`http://localhost:3000/twilightZone/${episodeObj.id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(episodeObj)
    })
    .then(res => res.json())
    .then(episode => console.log(episode))
}

function deleteEpisode(episodeObj){
    fetch(`http://localhost:3000/twilightZone/${episodeObj.id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(episodeObj)
    })
    .then(res => res.json())
    .then(episode => console.log(episode))
}