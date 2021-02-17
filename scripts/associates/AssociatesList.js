import { useCriminals } from "../criminals/CriminalProvider"

export const AssociatesList = (criminal) => {
    const contentContainer = document.querySelector(".associatesContainer")
    console.log(criminal)
    const HTMLRep = `
    <h1>Known associates for ${criminal.name} </h1>
    ${criminal.known_associates.map(associate => {
        return `<section class ="associate__container">
        <div class="associate__name">${associate.name}</div>
        <div class ="associate__alibi"`
    })}`
    contentContainer.innerHTML = HTMLRep

}

const eventHub =document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {
    const selectCriminalId = event.detail.criminalId
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectCriminalId)
    AssociatesList(selectedCriminal)
})