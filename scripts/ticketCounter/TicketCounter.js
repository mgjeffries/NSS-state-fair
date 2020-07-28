const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let ticketTotal = 0

export const TicketCounter = () => {
  render()
  eventHub.addEventListener("foodTicketPurchased", foodTicketEvent => {
    incrementTicketCounter()
    render()
  })
  eventHub.addEventListener("fullPackageTicketPurchased", fullPackageTicketEvent => {
    incrementTicketCounter()
    render()
  })
  eventHub.addEventListener("gameTicketPurchased", gameTicketEvent => {
    incrementTicketCounter()
    render()
  })
  eventHub.addEventListener("rideTicketPurchased", rideTicketEvent  => {
    incrementTicketCounter()
    render()
  })
  eventHub.addEventListener("sideshowTicketPurchased", sideshowTicketEvent  => {
    incrementTicketCounter()
    render()
  })

}



const incrementTicketCounter = () => ticketTotal++ 

const render = () => {
  contentTarget.innerHTML = `Total Tickets Purchased : ${ticketTotal}`
}