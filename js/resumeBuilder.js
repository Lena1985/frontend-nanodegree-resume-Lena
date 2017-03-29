// Online Resume Project Lena Bieger

var bio = {
	"name": "Lena Bieger",
	"role": "Web Developer",	
	"contacts": 
		{
		"mobile": "0152-1234567",
		"email": "lena.bieger@icloud.com",
		"github": "Lena1985",
		"twitter": "lena@twitter",
		"location": "Munich Germany"
		},
	"welcomeMessage": "Hi everybody, welcome to my resume! I hope you like it!",
	"skills": ["HTML","CSS", "JavaScript"],
	"biopic": "images/Lena_pic.jpg"
};

var education = {
	"schools": [
		{
		"name": "Suitbertus",
		"location": "Duesseldorf, Germany",
		"degree": "Abitur",
		"majors": [" history", " geography"],
		"dates": "1996 - 2004",
		"url": "www.suitbertus.de"
		},
		{		
		"name": "EWS",
		"location": "Cologne, Germany",
		"degree": "Travel and Tourism Manager",
		"majors": [" Tourism", " Airlinemanagement"],
		"dates": "2005 - 2008",
		"url": "www.ews.de"
		}
	],
	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "January 2017 - September 2017",
		"url": "www.udacity.com"
		}
	]
};

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
		"location": "Munich; Germany",
		"description": "Creation of Flight Plans for the A340 - Pilots who were based in Munich."
		}
	]
};

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
		"images": ["images/flower-img.jpeg", "images/flower-img.jpeg"]
		}
	]
};

 

// BIO Section

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);	
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedBioPic= HTMLbioPic.replace("%data%", bio.biopic);
 	$("#header").append(formattedBioPic);
 	var formattedWelcomeMessage= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
 	$("#header").append(formattedWelcomeMessage);
	

 	//Display Skills only if there are any
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		for (var index = 0; index < bio.skills.length; index++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
			$("#skills").append(formattedSkill);
		}
	}

	// Display Contact Information TOP and FOOTER
	var formattedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub= HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedTwitter);
};

bio.display();

// WORK Section

work.display = function() {

	for(var index = 0; index < work.jobs.length; index++) {
		$("#workExperience").append(HTMLworkStart);

		//Concatenate Employer and Title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		//Display Work Information
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();

//PROJECT Section

projects.display = function() {
	
	for(var index = 0; index < projects.projects.length; index++) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
		$(".project-entry:last").append(formattedTitle);	
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[index].images.length > 0) {
			for(var imageIndex = 0; imageIndex < projects.projects[index].images.length; imageIndex++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[imageIndex]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

// EDUCATION Section

education.display = function() {
	
	for(var index = 0; index < education.schools.length; index++) {
		$("#education").append(HTMLschoolStart);
		
		//Concatenate Schoolname and Degree
		var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
		var formattedNameAndDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameAndDegree);

		//Display other School Information
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
		$(".education-entry:last").append(formattedMajors);
	}

	//Display Online Course Information
	for(var courseIndex = 0; courseIndex < education.onlineCourses.length; courseIndex++) {
		$(".education-entry:last").append(HTMLonlineClasses);


		//Concatenate title and School of Online Course
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseIndex].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseIndex].school);
		var formattedTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleAndSchool);

		//Display other Information of Online Course
		var formattedOnlineDates= HTMLonlineDates.replace("%data%", education.onlineCourses[courseIndex].date);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courseIndex].url);
	 	$(".education-entry:last").append(formattedOnlineURL);
	}
};

education.display();

//GOOGLE Map Section

$("#mapDiv").append(googleMap);