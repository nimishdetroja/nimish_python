type="text/javascript">
		function checkfname()
		{
			var f=document.frm.fname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
				//alert("please enter first name");
			{
			 	document.getElementById("fname").innerHTML="please enter first name";
			}
			else if(!reg.test(f))
			{
				document.getElementById("fname").innerHTML="please enter only alphabets";
			}
			else
			{
				document.getElementById("fname").innerHTML="";
			}
		}
		function checklname()
		{
			var f=document.frm.lname.value;
			var reg=/^[A-Za-z]+$/;
			if(f=="")
			{
			 	document.getElementById("lname").innerHTML="please enter last name";
			}
			else if(!reg.test(l))
			{
				document.getElementById("lname").innerHTML="please enter only alphabets";
			}
			else
			{
				document.getElementById("lname").innerHTML="";
			}
		}
		function checkemail()
		{
			var f=document.frm.email.value;
			var reg=/^[A-Za-z0-9-_.]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
			if(f=="")
			{
			 	document.getElementById("email").innerHTML="please enter email";
			}
			else if(!reg.test(f))
			{
				document.getElementById("email").innerHTML="please enter valid email";
			}
			else
			{
				document.getElementById("email").innerHTML="";
			}
		}
		function checkMobile()
		{
			var f=document.frm.mobile.value;
			var reg=/^\d{10}$/;
			if(f=="")
			{
			 	document.getElementById ("mobile").innerHTML="please enter mobile";
			}
			else if(!reg.test(f))
			{
				document.getElementById("mobile").innerHTML="please enter 10 digits numbers only";
			}
			else
			{
				document.getElementById("mobile").innerHTML="";
			}
		}
		function checkpassword()
		{
			var f=document.frm.password.value;
			var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
			if(f=="")
			{
			 	document.getElementById("password").innerHTML="please enter password";
			}
			else if(!reg.test(f))
			{
				document.getElementById("password").innerHTML="min 1 digit,upper, lower,special(8,15)";
			}
			else
			{
				document.getElementById("password").innerHTML="";
			}
		}
		function checkCpassword()
		{		
			var v1=document.frm.password.value;
			var v2=document.frm.cpassword.value;
			
			if(v2=="")
			{
			 	document.getElementById("cpassword").innerHTML="please enter confirm password"
			}
			else if(v1!=v2)
			{
				document.getElementById("cpassword").innerHTML="password and confirm password doesn't match";
			}
			else
			{
				document.getElementById("cpassword").innerHTML="";
			}
		} 	  	