function validate() {
	var checkUname = document.getElementById('user_name');
	var checkEmail = document.getElementById('user_email');
	if(checkUname.value==0) {
		document.getElementById('username_error').style.color = "#C80404";
		document.getElementById('username_error').innerHTML = "Please enter a username.";
	} else {
		document.getElementById('username_error').style.color = "green";
		document.getElementById('username_error').innerHTML = "All good!";
	}
	if(checkEmail.value==0) {
		document.getElementById('useremail_error').style.color = "#C80404";
		document.getElementById('useremail_error').innerHTML = "Please enter an email address.";
	} else {
		document.getElementById('useremail_error').style.color = "green";
		document.getElementById('useremail_error').innerHTML = "All good!";
	}
}

function valpassword() {
	var checkPass = document.getElementById('user_pass');
	var checkRepPass = document.getElementById('rep_pass');
	if(checkPass.value<6){
		document.getElementById('passHelp').style.color = "#C80404";
		document.getElementById('passHelp').innerHTML = "Must be at least 6 characters long.";
	}
	if(checkRepPass.value!=checkPass.value){
		document.getElementById('reppass_error').style.color = "#C80404";
		document.getElementById('reppass_error').innerHTML = "Please enter the same password as above.";
	} 
	if (checkRepPass.value==checkPass.value){
		document.getElementById('reppass_error').style.color = "green";
		document.getElementById('reppass_error').innerHTML = "All good!";		
	}
}