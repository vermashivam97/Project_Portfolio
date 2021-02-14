"use strict";
let express = require('express');
let router = express.Router();
let routingData = [
	{
		"name" : "Home",
		"route" : "/",
		"font" : "fa fa-home"
		
	},
	{
		"name" : "About",
		"route" : "/about",
	"font" : "fa fa-user"
	},
	{
		"name" : "Services",
		"route" : "/services",
		"font" : "fa fa-tasks"
	},
	{
		"name" : "Projects",
		"route" : "/projects",
		"font" : "fa fa-terminal"
	},
	{
		"name" : "Contact",
		"route" : "/contact",
		"font" : "fa fa-id-badge"
		
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
res.render('about',{
		title:"Portfolio",
		navItems:routingData
	});
});

router.get('/services',(req,res)=>{
res.render('services',{
		title:"Portfolio",
		navItems:routingData
	});
});

router.get('/projects',(req,res)=>{
res.render('projects',{
		title:"Portfolio",
		navItems:routingData
	});
});
router.get('/contact',(req,res)=>{
res.render('contact',{
		title:"Portfolio",
		navItems:routingData
	});
});

router.post('/contact',(req,res)=>{
	res.redirect('/');
});




module.exports = router;
