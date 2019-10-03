// all routes related to jobs
const express = require('express');
const router = express.Router();
//job schema
const Job = require('../models/Job.model');
const auth = require('../middleware/authMiddleware');

//@route POST /job/post
//@desc add a new job
//@access private
router.post('/post', (req, res) => {
    //console.log(req);
    let job = new Job(req.body);
    job.save()
    .then(job => {
        res.status(200).json({'job': 'job posted successfully'});
    })
    .catch(error => {
        res.status(400).send('adding new job failed');
    })
})

//WHEN ACCESSING PARAMS PASSED FROM THE CLIENT - don't use params . use query - eg - req.query.email

//@route GET /job/getAll
//@desc get all jobs posted by a specified user
//@access private
router.get('/getAll', auth, (req, res) => {
    const email = req.query.email
    Job.find({poster: email }, (err, jobs) => {
        if(err)
            console.log(err);
        else    
            res.json(jobs);    
    })
    
})


module.exports = router;