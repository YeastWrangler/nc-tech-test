import * as express from "express";
import {getCards} from "./controllers/cards.controllers.js"

export const app = express()

app.set('json spaces', 2);

app.get('/cards', async () => {
  // respond with a list of cards
  getCards
  console.log("working")
})

app.get('/cards/:cardId/:sizeId?', () => {
  // respond with card by id
})
