const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', (clickEvent) => {
    
    if (clickEvent.target.id === "rideTicket" ) {
        const ticketPurchased = new CustomEvent ("rideTicketPurchased")
        eventHub.dispatchEvent(ticketPurchased)
    }
    else if (clickEvent.target.id === "foodTicket" ) {
        const ticketPurchased = new CustomEvent ("foodTicketPurchased")
        eventHub.dispatchEvent(ticketPurchased)
    }
    else if (clickEvent.target.id === "gameTicket") {
        const ticketPurchased = new CustomEvent ("gameTicketPurchased")
        eventHub.dispatchEvent(ticketPurchased)   
    }
    else if (clickEvent.target.id === "sideshowTicket") {
        const ticketPurchased = new CustomEvent ("sideshowTicketPurchased")
        eventHub.dispatchEvent(ticketPurchased)   
    }
    else if (clickEvent.target.id === "fullPackageTicket") {
        const ticketPurchased = new CustomEvent ("fullPackageTicketPurchased")
        eventHub.dispatchEvent(ticketPurchased)   
    }
    
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

