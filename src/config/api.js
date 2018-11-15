export default function getApiURL() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://stackoverflow.com'
  } else {
    return 'http://localhost:8080'
  }
}