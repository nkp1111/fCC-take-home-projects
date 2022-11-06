const express = require('express')
const axios = require('axios')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

const url = 'https://weather-proxy.freecodecamp.rocks/api/current'

const getWeather = (url, lat, lon) => {
  let latLong = `?lat=${lat}&lon=${lon}`
  axios.get(url + latLong)
    .then(data => console.log(data.data))
    .catch(err => {
      console.log(err)
    })
}

getWeather(url, 35, 139)

app.get('/', (req, res) => {
  let whether
  res.render('index', { whether })
})

app.listen('3000', () => {
  console.log('App on port 3000');
})