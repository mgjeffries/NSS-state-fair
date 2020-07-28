const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", rideTicketEvent => {
        render()
    })
}

const render = () => {
    contentTarget.innerHTML +=`
    <div class="person rider"><div>
    `
}