const sideshowTarget = document.querySelector(".sideshow")
const gamesTarget = document.querySelector(".games")
const foodTarget = document.querySelector(".food")
const ridesTarget = document.querySelector(".rides")

const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageTicketEvent => {
        render()
    })
}

const render = () => {
    const fullPackageElement = '<div class="person bigSpender"><div>'

    sideshowTarget.innerHTML += fullPackageElement
    gamesTarget.innerHTML += fullPackageElement
    foodTarget.innerHTML += fullPackageElement
    ridesTarget.innerHTML += fullPackageElement

}