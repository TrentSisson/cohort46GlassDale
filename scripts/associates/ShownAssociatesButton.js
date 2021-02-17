import { AssociatesList } from "./AssociatesList.js"
export const ShowAssociatesButton = (criminal) => {
<button id="associates--${criminal.id}">Associate Alibis</button>
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {
    if (event.target.id.startswith("associates--")){
        const [prefix, criminalId] = event.target.id.split("--")
        const customEvent = new customEvent("AssociatesClicked", {
            detail: {
                criminalId: parsInt(criminalId)
            }
        })
    }
})