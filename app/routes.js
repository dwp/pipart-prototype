//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/gfs-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['gfs-required']

  // Check whether the variable matches a condition
  if (howManyBalls == "yes"){
    // Send user to next page
    res.redirect('/pages/appeals-response/appeals-issues-raised')
  } else {
    // Send user to ineligible page
    res.redirect('/pages/appeals-response/appeals-issues-raised-2')
  }

})

router.post('/another-benefits', function (req, res) {

  var benefitsAnswer = req.session.data['another-benefit']

  // Check whether the variable matches a condition
  if (benefitsAnswer == "Yes"){
    // Send user to next page
    res.redirect('/pages/appeals-response/appeals-benefit-answer')
  } else {
    // Send user to ineligible page
    res.redirect('/pages/appeals-response/appeals-case-summary')
  }

})