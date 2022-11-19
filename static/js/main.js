const buttons = document.querySelectorAll("#get-genres");
buttons.forEach(button => {
    button.addEventListener("click", getGenres);
})


async function getGenres(clickEvent) {
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");
    const actorId = clickEvent.target.dataset.actorId;
    const apiActorGenres = await dataHandler.getActorGenres(actorId);
    modalTitle.innerHTML = "Genres for actor";
    modalBody.innerHTML = apiActorGenres["genres_list"];
}


dataHandler = {
    getActorGenres: async function (actorId) {
        return await apiGet(`/api/actor/${actorId}/genres`);
    }
}

async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return await response.json();
    }
}