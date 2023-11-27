import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  vus: 1,
  duration: '15s',
  thresholds: {
    http_req_duration: ['p(99)<400']
  }
}

const API_BASE_URL = 'http://localhost:5212/gamedata'

export default () => {
  http.batch([
    ['GET', `${API_BASE_URL}`],
    ['GET', `${API_BASE_URL}/02978358-411e-4842-8f5a-dd4968fd63bb`]
  ])

  let game = {
    gameName: 'test',
    category: 'test',
    totalBets: 1000,
    totalWins: 500,
    averageBetAmount: 10,
    popularityScore: 7,
    lastUpdated: Date.now() // Add the timestamp to the object
  }

  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let response = http.post(`${API_BASE_URL}`, JSON.stringify(game))
  console.log(response.json())

  game = {
    id: response.body.id,
    gameName: 'testUpdated',
    category: 'test',
    totalBets: 1000,
    totalWins: 500,
    averageBetAmount: 10,
    popularityScore: 7,
    lastUpdated: response.body.lastUpdated
  }

  response = http.put(`${API_BASE_URL}/${game.id}`, game)

  http.del(`${API_BASE_URL}/${response.body.id}`)

  sleep(1)
}
