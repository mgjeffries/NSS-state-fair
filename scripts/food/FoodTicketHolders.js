const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    
    eventHub.addEventListener("foodTicketPurchased", foodTicketEvent => {
        render()
    })
}

const render = () => {
    contentTarget.innerHTML +=`
    <div class="person eater"><div>
    `
}