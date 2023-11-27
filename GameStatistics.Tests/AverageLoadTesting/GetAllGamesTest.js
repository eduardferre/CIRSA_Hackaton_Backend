import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '20s', target: 100 },
    { duration: '40s', target: 100 },
    { duration: '20s', target: 0 }
    // { duration: '5m', target: 100 },
    // { duration: '10m', target: 100 },
    // { duration: '5m', target: 0 }
  ],
  thresholds: {
    http_req_durations: ['p(99)<150']
  }
}

export default () => {
  http.get('http://localhost:5212/gamedata')
  sleep(1)
}
