function getActivityIdea() {
    fetch("/.netlify/functions/fetch-activity")
        .then(res => res.json())
        .then(data => {
            document.getElementById("idea").textContent = data.activity
            document.body.classList.add("fun")
            document.getElementById("title").textContent = "🦾 HappyBot🦿"
        })
        .catch(error => {
            console.error("Error fetching activity:", error)
            document.getElementById("idea").textContent = "Sorry, couldn't find an activity right now!"
        })
}

document.getElementById("bored-button").addEventListener("click", getActivityIdea)