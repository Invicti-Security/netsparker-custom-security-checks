/* 
*  For more information about Custom Script Checks and samples, please refer to documentation: 
*  https://www.netsparker.com/support/custom-security-checks-scripting/ 
*/ 

var attacks = [];

// Resource for filenames: https://blog.sucuri.net/2017/08/mining-adminers-hackers-scan-the-internet-for-db-scripts.html
var filenames = [
        "_adminer.php", "adminer.php", "ad.php", "ad.php", "Adminer.php",
        "adminer-4.2.5.php", "adminer-4.2.5-en.php", "adminer-4.2.5-mysql-en.php", "adminer-4.2.5-mysql.php",
        "adminer-4.3.0.php", "adminer-4.3.0-en.php", "adminer-4.3.0-mysql-en.php", "adminer-4.3.0-mysql.php",
        "adminer-4.3.1.php", "adminer-4.3.1-en.php", "adminer-4.3.1-mysql-en.php", "adminer-4.3.1-mysql.php",
        "adminer-4.4.0.php", "adminer-4.4.0-en.php", "adminer-4.4.0-mysql-en.php", "adminer-4.4.0-mysql.php",
        "adminer-4.5.0.php", "adminer-4.5.0-en.php", "adminer-4.5.0-mysql-en.php", "adminer-4.5.0-mysql.php",
        "adminer-4.6.0.php", "adminer-4.6.0-en.php", "adminer-4.6.0-mysql-en.php", "adminer-4.6.0-mysql.php",
        "adminer-4.6.1.php", "adminer-4.6.1-en.php", "adminer-4.6.1-mysql-en.php", "adminer-4.6.1-mysql.php",
        "adminer-4.6.2.php", "adminer-4.6.2-en.php", "adminer-4.6.2-mysql-en.php", "adminer-4.6.2-mysql.php"
    ];
	
var vulnerableVersions = ["4.2.5", "4.3.0","4.3.1","4.4.0","4.5.0","4.6.0","4.6.1","4.6.2"]

var i=0;

filenames.forEach(function(item, key){
	var tmpObj = {
	   id: "8d07afdc-8c09-4063-a7a3-6cf30e92cc"+i,	
	   name: "Vulnerable Adminer :"+item.toString(),
	   attack: item.toString(),
   }
   attacks.push(tmpObj);
   i++;
});

function analyze(context, response) {    
    // Aim of this script is to find vulnerable Adminer DB management script on the target.
    // Adminer up to 4.6.3 is vulnerable to sensitive file disclosure through MySQL LOAD LOCAL DATA function.
    // Resarch: https://medium.com/bugbountywriteup/adminer-script-results-to-pwning-server-private-bug-bounty-program-fe6d8a43fe6f
    var adminerRegEx = />Adminer<\/a> <span class="version">(.*)<\/span>/
    var adminerVersion = response.body.match(adminerRegEx);
    if (adminerVersion) {		
		if(vulnerableVersions.indexOf(adminerVersion[1]) >= 0) {			
			var vulnerability = new Vulnerability("446bb38e-92e8-43ab-a55d-dc2f7ba4511b")
		        vulnerability.CustomFields.Add("Adminer Version", adminerVersion[1]);
			return vulnerability;
		}		
	} 
}
