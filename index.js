let postsArray = []

function renderPosts(){
    let html = ""
    for (post of postsArray){
        html += `
            <h3>${post.title }</h3>
            <p>${post.body }</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

function resetForm(){
    document.getElementById("my-form").reset()
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
    postsArray = data.slice(0, 5)
    renderPosts()
})


document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }


fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => response.json())
    .then(post => {
        postsArray.unshift(post)
        renderPosts()
        resetForm()
    })

})

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q={lagos}")
    .then(response => response.json)
    .then(data => {
        console.log(data)
        document.getElementById("weather-list").innerHTML = data.weather
    })