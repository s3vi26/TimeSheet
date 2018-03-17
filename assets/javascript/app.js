var config = {
    apiKey: "AIzaSyB_tzptnbe_-P_rbU2xQ2lpIPGrDHlCxQo",
    authDomain: "employee-data-management-706b3.firebaseapp.com",
    databaseURL: "https://employee-data-management-706b3.firebaseio.com",
    projectId: "employee-data-management-706b3",
    storageBucket: "employee-data-management-706b3.appspot.com",
    messagingSenderId: "138185452658"
  };
firebase.initializeApp(config);

var database = firebase.database();
var name = "";
var role = "";
var start = "";
var rate = "";


$("#addEmployeeBtn").on("click", function(){
    event.preventDefault();
	
	var empName = $("#employeeNameInput").val().trim();
	var empRole = $("#roleInput").val().trim();
	var empStart = $("#startInput").val().trim();
	var empRate = $("#rateInput").val().trim();

	
	var newEmp = {
		name:  empName,
		role: empRole,
		start: empStart,
		rate: empRate
	}

	
	database.ref().push(newEmp);

	
	alert("Employee successfully added");

	
	$("#employeeNameInput").val("");
	$("#roleInput").val("");
	$("#startInput").val("");
	$("#rateInput").val("");

	
	return false;
});



database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	
	var empName = childSnapshot.val().name;
	var empRole = childSnapshot.val().role;
	var empStart = childSnapshot.val().start;
	var empRate = childSnapshot.val().rate;

    $("tbody").append(`<tr><td> ${empName}</td><td>${empRole}</td><td>${empStart}</td><td> </td><td>${empRate}</td><td> </td></tr>`)
	

});