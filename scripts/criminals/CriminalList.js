import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from  "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

export const CriminalList = () => {
    getCriminals()
    .then(()=> {
        const criminalArray = useCriminals()
        render(criminalArray)
      
        
        })
      }

eventHub.addEventListener("crimeChosen",event => {
  if (event.detail.crimeThatWasChosen !== "0"){
    const criminalArray = useCriminals()
    const matchingCriminals = criminalArray.filter(criminal => {
      return criminal.conviction === event.detail.crimeThatWasChosen
    })
    render(matchingCriminals)

  }
})

const render = criminalCollection => {

  criminalsContainer.innerHTML = criminalCollection.map(criminal => Criminal(criminal)).join("")
}