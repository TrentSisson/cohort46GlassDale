export const Criminal = (criminal) => {
    return `
    <section class = "criminalCard">
    <h2 class = "criminalCard__name"> ${criminal.name}</h2>
    <p class = "criminalCard__age"><b>Age:</b> ${criminal.age}</p>
    <p class = "criminalCard__conviction"><b>Crime:</b> ${criminal.conviction}</p>
    <p><b>Term Start:</b> ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
    <p><b>Term End:</b> ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    </section>
    `
}