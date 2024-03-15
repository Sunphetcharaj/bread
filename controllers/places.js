const router = require('express').Router()

router.get('/new', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant.webp'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Dining-Room'
      }]
    res.render('places/new', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

module.exports = router