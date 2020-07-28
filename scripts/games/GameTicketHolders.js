const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
  eventHub.addEventListener("gameTicketPurchased", gameTicketEvent => {
    render()
  })
}

const render = () => {
  contentTarget.innerHTML +=`
  <div class="person player"><div>
  `
}