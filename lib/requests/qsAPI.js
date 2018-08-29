const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:4000`
  } else {
    return `https://peaceful-dusk-38517.herokuapp.com`
  }

}

module.exports = {
  baseURL
}
