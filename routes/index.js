"use strict";
let express = require('express');
let router = express.Router();
let routingData = [
	{
		"name" : "Home",
		"route" : "/"
	},
	{
		"name" : "About",
		"route" : "/"
	},
	{
		"name" : "Services",
		"route" : "/"
	},
	{
		"name" : "Projects",
		"route" : "/"
	},
	{
		"name" : "Contact",
		"route" : "/"
	}


]


//Url encode middleware

router.use(express.urlencoded({extended:true}));

//Home Page

router.get('/',(req,res)=>{

	res.render('home',{
		title:"Portfolio",
		navItems:routingData
	});

});


router.get('/about',(req,res)=>{

});


module.exports = router;
