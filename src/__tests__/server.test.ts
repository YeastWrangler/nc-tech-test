import * as request from 'supertest'
import { app } from '../server'

test('returns matching card title', async () => {
  const response = await request(app).get('/cards')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(expect.objectContaining({
    title: 'card 1 title',
    image_Url: "",
    card_id: "card001"
  }))
})
