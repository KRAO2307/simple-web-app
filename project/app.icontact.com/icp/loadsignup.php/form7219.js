document.write("<style>\n.link,\n.link a,\n.signupframe\n{\n	color: #226699;\n	font-family: Arial, Helvetica, sans-serif;\n	font-size: 13px;\n	}\n	.link,\n	.link a {\n		text-decoration: none;\n		}\n	.signupframe {\n		border: 1px solid #000000;\n		background: #ffffff;\n		}\n.signupframe .required {\n	font-size: 10px;\n	}\n<\/style>\n<form method=\"post\" action=\"https://app.icontact.com/icp/signup.php\" name=\"icpsignup\" id=\"icpsignup6139\" accept-charset=\"UTF-8\" onsubmit=\"return verifyRequired6139();\" >\n<input type=\"hidden\" name=\"redirect\" value=\"https://www.icontact.com/www/signup/thanks.html\">\n<input type=\"hidden\" name=\"errorredirect\" value=\"https://www.icontact.com/www/signup/error.html\">\n\n<div id=\"SignUp\">\n<table width=\"260\" class=\"signupframe\" border=\"0\" cellspacing=\"0\" cellpadding=\"5\">\n	<tr>\n      <td valign=\"top\" align=\"right\">\n        <span class=\"required\">*<\/span>&nbsp;Email\n      <\/td>\n      <td align=\"left\">\n        <input type=\"text\" name=\"fields_email\">\n      <\/td>\n    <\/tr>\n	<tr>\n      <td valign=\"top\" align=\"right\">\n        &nbsp;First Name\n      <\/td>\n      <td align=\"left\">\n        <input type=\"text\" name=\"fields_fname\">\n      <\/td>\n    <\/tr>\n	<tr>\n      <td valign=\"top\" align=\"right\">\n        &nbsp;Last Name\n      <\/td>\n      <td align=\"left\">\n        <input type=\"text\" name=\"fields_lname\">\n      <\/td>\n    <\/tr>\n    <input type=\"hidden\" name=\"listid\" value=\"68739\">\n    <input type=\"hidden\" name=\"specialid:68739\" value=\"JKCG\">\n\n    <input type=\"hidden\" name=\"clientid\" value=\"1109943\">\n    <input type=\"hidden\" name=\"formid\" value=\"6139\">\n    <input type=\"hidden\" name=\"reallistid\" value=\"1\">\n    <input type=\"hidden\" name=\"doubleopt\" value=\"1\">\n    <tr>\n      <td>&nbsp;<\/td>\n      <td><span class=\"required\">*<\/span> = Required Field<\/td>\n    <\/tr>\n    <tr>\n      <td>&nbsp;<\/td>\n      <td><input type=\"submit\" name=\"Submit\" value=\"Submit\"><\/td>\n    <\/tr>\n    <\/table>\n<\/div>\n<\/form>\n<script type=\"text/javascript\">\n\nvar icpForm6139 = document.getElementById(\'icpsignup6139\');\n\nif (document.location.protocol === \"https:\")\n\n	icpForm6139.action = \"https://app.icontact.com/icp/signup.php\";\n\nfunction verifyRequired6139() {\n	if (icpForm6139[\"fields_email\"].value == \"\") {\n		icpForm6139[\"fields_email\"].focus();\n		alert(\"The Email field is required.\");\n		return false;\n	}\n\n	if (icpForm6139[\"fields_email\"].value && icpForm6139[\"fields_email\"].value !== \"\") {\n		icpForm6139[\"fields_email\"].value = icpForm6139[\"fields_email\"].value.trim();\n	}\n\n\n\n\n\n	return true;\n}\n\nfunction validDate6139(value) {\n\n	if (value == \"\") {\n		return true;\n	}\n\n	var dateSections = value.split(\'/\');\n	if (dateSections.length != 3) {\n		return false;\n	}\n\n	var month = dateSections[0];\n	if (month && (month.length > 2 || month < 1 || month > 12)) {\n		return false;\n	}\n\n	var day = dateSections[1];\n	if (day && (day.length > 2 || day < 1 || day > 31)) {\n		return false;\n	}\n\n	var year = dateSections[2];\n	if (!year || (year && year.length != 4)) {\n		return false;\n	}\n\n	var dateValue = new Date(value);\n	if (month != (dateValue.getMonth()+1) || day != dateValue.getDate() || year != dateValue.getFullYear()) {\n		return false;\n	}\n\n	return true;\n}\n<\/script>\n");