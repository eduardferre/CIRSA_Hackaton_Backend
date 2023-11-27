import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '5s', target: 100 },
    { duration: '15s', target: 100 },
    { duration: '5s', target: 1400 },
    { duration: '30s', target: 1400 },
    { duration: '5s', target: 100 },
    { duration: '30s', target: 100 },
    { duration: '5s', target: 0 }
    // { duration: '10s', target: 100 },
    // { duration: '1m', target: 100 },
    // { duration: '10s', target: 1400 },
    // { duration: '3m', target: 1400 },
    // { duration: '10s', target: 100 },
    // { duration: '3m', target: 100 },
    // { duration: '10s', target: 0 }
  ]
}

const API_BASE_URL = 'http://localhost:5212/gamedata'

export default () => {
  http.batch([
    ['GET', `${API_BASE_URL}`],
    ['GET', `${API_BASE_URL}/02978358-411e-4842-8f5a-dd4968fd63bb`]
  ])

  sleep(1)
}
