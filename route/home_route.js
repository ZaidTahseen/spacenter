const { AsyncResource } = require('async_hooks')
const express = require('express')
const router = express.Router()
const Contact = require('../model/contact')
const Appointment = require('../model/bap')
const auth = require('../middleware/auth')
const User = require('../model/user')
const user = require('../model/user')
const Therapy = require('../model/therapy')
const therapy = require('../model/therapy')


router.get('/home', (req, res) => {
    res.render('home')

})


router.get('/Animation', (req, res) => {
    res.render('animation.ejs')

})

router.get('/contact_detail', auth, async (req, res) => {

    let details = await Contact.find()
    // console.log(details)
    res.render('contact_detail.ejs', { all_contact: details })

})

router.get('/Appointments', (req, res) => {
    res.render('bap.ejs')

})




router.get('/login', (req, res) => {
    res.render('login.ejs')

})

router.post('/login', async (req, res) => {
    // console.log( req.body)
    const user = await User.findOne()
    if (user.email != req.body.email) {
        return res.render('login.ejs')
    }
    else if (user.password != req.body.password) {
        return res.render('login.ejs')
    }

    req.session.isLoggedIn = true
    res.redirect('/bapdetails')

})    


router.get('/logout', async (req, res) => {
    await req.session.destroy()
    res.redirect('/home')
})

router.post('/Appointments', async (req, res) => {
    const appointment = new Appointment(req.body)
    await appointment.save()
    res.redirect('/home')

})


router.post('/therapy' , async (req, res) => {
const therapy = new Therapy(req.body)
await therapy.save()
res.redirect('/home')
})


router.get('/giftatherapy', (req, res) => {
    res.render('gat.ejs')

})

router.get('/bapdetails', auth, async (req, res) => {
    const bap = await Appointment.find()
    // console.log(bap)
    res.render('bap_details.ejs', { bap: bap })

})

router.get('/bap_delete/:id', async (req, res) => {
    // res.render('gat.ejs')
    // console.log (req.params)
    await Appointment.findByIdAndRemove(req.params.id)
    res.redirect('/home')


})

router.get('/events', (req, res) => {
    res.render('events.ejs')

})



router.get('/therapy_detail',async (req, res) => {
    const therapy = await  Therapy.find()
    res.render('therapy_detail.ejs' , {  therapy_data : therapy  })
})

router.get('/contact_delete/:id', async (req, res) => {
    let id = req.params.id
    // console.log(id)
    await Contact.findByIdAndRemove(id)
    //   await  Contact.findByIdAndDelete(id)
    res.redirect('/home')
    // res.render('')

})



router.get('/st', (req, res) => {
    res.render('st.ejs')

})
router.get('/contact', (req, res) => {
    res.render('contact.ejs')

})

router.get('/mg', (req, res) => {
    res.render('mg.ejs')

})
router.get('/gav', (req, res) => {
    res.render('voucher.ejs')

})


router.get('/detail', (req, res) => {
    res.render('details.ejs')

})


router.post('/save-contact', async (req, res) => {

    const contact = new Contact({

        firstname: req.body.first_name,
        lastname: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message


    })

    await contact.save()
    res.redirect('/home')
    // console.log('database is saved!')
})






module.exports = router



















