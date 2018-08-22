const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:3000`
  } else {
    return `https://vast-dusk-36802.herokuapp.com/`
  }

}

module.exports = {
  baseURL
}
