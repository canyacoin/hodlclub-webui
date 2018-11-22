export default function getApiURL() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://hodlclub-api-dot-canwork-io.appspot.com'
  } else {
    return 'http://localhost:8080'
  }
}