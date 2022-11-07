const fs = require('fs/promises')

function fetchCards(){

cardFile = fs.readFile(`/Users/yeastwrangler/Northercoders/projects/New_Emac/nc-tech-test/src/data/cards.json`, "utf-8").then((cards) => {
    const parsedCards = JSON.parse(cards)
    console.log(parsedCards)
}).then
templateFile = fs.readFile(`/Users/yeastwrangler/Northercoders/projects/New_Emac/nc-tech-test/src/data/templates.json`, "utf-8").then((file) => {
        const parsedTemplate = JSON.parse(file)
        console.log(parsedTemplate)
       
}).then((parsedCards, parsedTemplate) => {
    console.log(parsedTemplate)
    cardWithUrl = parsedCards.map((card) => {
        return card.pages.map((page) => {
            if (page.title === "Front Cover") { 
                return parsedTemplate.map((item) => {
                    if(item.id === page.templateId) {
                         card.imageUrl = item.imageUrl 
                    }
                })
            } 
        })
        })

        modifiedCardsObj = cardWithUrl.map((card)=> {
            return {title: card.title, card_id: card.id, imageUrl: card.imageUrl}
        })
    return modifiedCardsObj.JSON
        
})
}
console.log(fetchCards())


