// Online Resume Project Lena Bieger

var bio = {
 	"name": "Lena Bieger",
 	"role": "Web Developer",
 	"welcomeMessage": "Hi everybody, welcome to my resume! I hope you like it!",
 	"skills": ["HTML","CSS", "JavaScript"],
 	"bioPic": "images/Lena_pic.jpg",
	"contacts": 
	 	{
	 	"mobile": "0152-1234567",
	 	"email": "lena.bieger@icloud.com",
	 	"github": "Lena1985",
	 	"twitter": "lena@twitter",
	 	"location": "Munich Germany"
	 	}
}

var work = {
	"jobs": [
		{
		"employer": "Stone Code Killers",
		"title": "Web Developer",
		"location": "Munich, Germany",
		"dates": "Since December - still in Progress",
		"description": "I am developing Homepages. I am using HTML, CSS and JavaScript to do this."
		
		},
		{	
		"employer": "Lufthansa German Airlines",
		"title": "Flight Plan Creator",
		"dates": "April 2008 - December 2016",
		"location":"Munich; Germany",
		"description": "Creation of Flight Plans for the A340 - Pilots who were based in Munich."
		}
	]
}

var projects = {
	"projects": [
		{
		"title": "Project 1 - The Mountain Project",
		"dates": "2015",
		"description": "This was my first project and it went very well!",
		"images": ["images/mountain-img.jpeg"]
		},
		{
		"title": "Project 2 - The Flower Project",
		"dates": "2016",
		"description": "This was my second project and it went very well!",
		"images": ["images/flower-img.jpeg"]
		}
	]
}

 var education = {
	"schools": [
		{
		"name": "Suitbertus",
		"location": "Duesseldorf, Germany",
		"degree": "Abitur",
		"majors": [" history", " geography"],
		"dates":"1996 - 2004"
		},
		{		
		"name": "EWS",
		"location": "Cologne, Germany",
		"degree": "Travel and Tourism Manager",
		"majors": [" Tourism", " Airlinemanagement"],
		"dates":"2005 - 2008"
		}
	],
	"onlineCourses": [
		{
		"title":"Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "January 2017 - September 2017",
		"url": "www.udacity.com"
		}
	]
}

// BIO Section

function displayBio () {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedBiopic= HTMLbioPic.replace("%data%", bio.bioPic);
 	$("#header").append(formattedBiopic);
 	var formattedWelcomeMessage= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 	$("#header").append(formattedWelcomeMessage);
	

 	//Display Skills only if there are any
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	// Display Contact Information
	var formattedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGitHub= HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
}

displayBio();

// WORK Section

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		//Concatenate Employer and Title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		//Display Work Information
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}	

displayWork();

//PROJECT Section

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);	
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

displayProjects();

// EDUCATION Section

function displayEducation() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		//Concatenate Schoolname and Degree
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameAndDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameAndDegree);

		//Display other School Information
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
	}

	//Display Online Course Information
	for(course in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);


		//Concatenate title and School of Online Course
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleAndSchool);

		//Display other Information of Online Course
		var formattedOnlineDates= HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	 	$(".education-entry:last").append(formattedOnlineURL);
	}
}

displayEducation();

//GOOGLE Map Section

$("#mapDiv").append(googleMap);


// The INTERNATIONALIZE Button

function inName(name) {
	
	name =  name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " "+name[1];
}

$("#main").append(internationalizeButton);

