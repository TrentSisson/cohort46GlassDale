import { useConvictions, getConvictions } from "./ConvictionProvider.js"
  
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

// Get a reference to the DOM element where the <select> will be render
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", event =>{
  if (event.target.id === "crimeSelect") {
    const customEvent = new CustomEvent("crimeChosen", {
      detail: {
        crimeThatWasChosen: event.target.value
      }
    })
    eventHub.dispatchEvent(customEvent)
  }

})
export const ConvictionSelect = () => {
  // Trigger fetching the API data and loading it into application state
  getConvictions()
    .then(() => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
  /*
      Use interpolation here to invoke the map() method on
      the convictionsCollection to generate the option elements.
      Look back at the example provided above.
  */
 // TO DO: FIGURE OUT WHAT THIS IS {something.map()}
  contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
            convictionsCollection.map(convictionObject => {
                const convictionName = convictionObject.name
                return `<option>${convictionName}</option>`
            
            }).join("")
        }
        
        </select>
    `
}