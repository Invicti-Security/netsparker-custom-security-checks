var dict = {
    "Slack Token v1.x": /(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32})/,
    "Slack Token":/(xoxe\.xoxp-[0-9]{1}-[A-Za-z0-9]{160,180})/,
    "Slack Webhook":/https:\/\/hooks.slack.com\/services\/T[a-zA-Z0-9_]{8,10}\/B[a-zA-Z0-9_]{8,10}\/[a-zA-Z0-9_]{24}/,
    "RSA private key": /-----BEGIN RSA PRIVATE KEY-----/,
    "SSH (DSA) private key": /-----BEGIN DSA PRIVATE KEY-----/,
    "SSH (EC) private key": /-----BEGIN EC PRIVATE KEY-----/,
    "PGP private key block": /-----BEGIN PGP PRIVATE KEY BLOCK-----/,
    "Amazon MWS Auth Token": /amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
    "AWS AppSync GraphQL Key": /da2-[a-z0-9]{26}/,
    "Amazon AWS API Key":/(A3T[A-Z0-9]|AKIA|AGPA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/,
    "Amazon AWS Secret Key":/(?i:aws_secret_access_key|amazon_secret_access_key|access_key_secret|aws_secret_key|secret_access_key|aws_ses_secret_access_key|secret_key).{0,50}([0-9a-zA-Z\/+]{40})/,
    "Amazon SES SMTP Password":/(?i)(amazon_smtp|amazon_ses_smtp|amazon_ses_smtp_password|smtp_password).{0,50}([0-9A-Za-z]{44})/,
    "Amazon Cognito JWT": /eyJraWQiOiI[0-9a-zA-Z+/=]{40}$/,
    "Facebook Access Token": /EAACEdEose0cBA[0-9A-Za-z]+/,
    "Facebook OAuth": /[fF][aA][cC][eE][bB][oO][oO][kK].{0,20}['|\"][0-9a-f]{32}['|\"]/,
    "Facebook App Secret": /(?i:facebook_secret|app_secret|client_secret|fb_app_secret|facebook_app_secret).{0,5}([0-9a-f]{32})/,
    "Facebbook App ID": /(?i:access_token|fb_access_token|facebook_access_token|app_token|fb_app_token|facebook_app_token)((:\")|(\':\'))(\d{15}|\w{27})((\")|(\'))/,
    "GitHub": /[gG][iI][tT][hH][uU][bB].{0,20}['|\"][0-9a-zA-Z]{35,40}['|\"]/,
    "Github Auth Creds": /https:\/\/[a-zA-Z0-9]{40}@github\.com/,
    "Github Private": /((?:ghp|gho|ghu|ghs|ghr)_[a-zA-Z0-9]{36,255})/,
    "Google Cloud Platform OAuth": /[0-9]+-[0-9A-Za-z_]{32}\\.apps\\.googleusercontent\\.com/,
    "Google OAuth Access Token":/ya29\.[0-9A-Za-z\-_]{100,}/,
    "Heroku API Key": /(?i)heroku(.{0,20})?[''"][0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}[''"]/,
    "Json Web Token" : /eyJ[A-Za-z0-9-_=]+\.eyJ[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_+\/=]*/, 
    "MailChimp API Key":/(?i:apikey|mailchimp)(.{0,50})[0-9a-f]{32}-us[0-9]/,
    "MailGun API Key":/(?i)(mailgun).{0,30}(key-[0-9a-zA-Z]{32})/,
    "Password in URL": /[a-zA-Z]{3,10}:\/\/[^/\\s:@]{3,20}:[^/\\s:@]{3,20}@.{1,100}[\"'\\s]/,
    "PayPal Braintree Access Token": /access_token\\$production\\$[0-9a-z]{16}\\$[0-9a-f]{32}/,
    "Paypal Access Token2":/access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}/,
    "Picatic API Key": /sk_live_[0-9a-z]{32}/,
    "Stripe API Key": /sk_live_[0-9a-zA-Z]{24}/,
    "Stripe Restricted API Key": /rk_live_[0-9a-zA-Z]{24}/,
    "Square Access Token": /sq0atp-[0-9A-Za-z\\-_]{22}/,
    "Square OAuth Secret": /sq0csp-[0-9A-Za-z\\-_]{43}/,
    "Telegram Bot API Token":/(?i)(telegram|bot).{0,50}([0-9]{9}:[a-zA-Z0-9_-]{35})/,
    "Twitter API Secret Key":/(?i)(secret_key|twitter_secret_key|twitter_secret|twitter_api_secret_key|access_token_secret_twitter).{0,5}([0-9a-zA-Z]{43}|[0-9a-zA-Z]{50})/,
    "Twitter Access Token Secret":/(?i)(access_token|access_token_secret|token_secret|twitter_access_token_secret|access_token_secret_twitter)((\":\")|(\':\'))([0-9a-zA-Z]{45})/,
    "SendGrid API Key":/SG\.[0-9A-Za-z\-_]{22}\.[0-9A-Za-z\-_]{43}/,
    "NuGet API Key":/(?i:nuget|nuget_api_key|api_key).{0,50}oy2[a-z0-9]{43}/,
    "LinkedIn API Key":/(?i)linkedin_secret(.{0,20})?[''\"][0-9a-z]{16}[''\"]/,
    "Database Connection String - MongoDB - MySQL":/((?:mongodb\+srv|mongodb|mysql):\/\/[a-zA-z0-9-]{1,}:[a-zA-z0-9-]{1,}@[a-zA-Z0-9\.]{1,}(?:\.|\:)(?:[A-z0-9]{1,}))/,
    "Database Connection String - PostgreSQL":/((?:postgresql|postgres):\/\/[a-zA-z0-9-]{1,}:[a-zA-z0-9-]{6,}@[a-zA-Z0-9-]{1,})/,
    "JDBC Database Connection String":/(jdbc:(mongodb|mysql|postgresql|sqlserver):\/{2})(?:([^@\/?#\s]+)@)?([^\/?#\s]+)?(?:\/([^?#\s]*))?(?:[?]([^#\s]+))?/,
    "WordPress Authentication Key/Salt":/(?i)define(.{0,20})?(DB_CHARSET|NONCE_SALT|LOGGED_IN_SALT|AUTH_SALT|NONCE_KEY|DB_HOST|DB_PASSWORD|AUTH_KEY|SECURE_AUTH_KEY|LOGGED_IN_KEY|DB_NAME|DB_USER)(.{0,20})?[''|"].{10,120}[''|"]/,
    "Symfony Application Secret":/(?i:app_secret|secret|symfony)(?::|=)(?:\"|'|)([a-zA-Z0-9]{32})/,
    "Mapbox Token":/(sk\.eyJ1Ijoi[0-9A-Za-z\\-_\\.]{79,100})/,
    "Sentry Auth Token":/(?i:sentry_auth_token|auth_token)((:\")|(\':\'))([0-9A-Za-z]{64})/,
    "Teams Webhook":/https:\/\/outlook\.office\.com\/webhook\/[0-9a-f-]{36}@/,
    "Teams Webhook":/(https:\/\/[a-zA-Z0-9]{1,7}\.webhook\.office\.com\/(?:webhook.{1,3}|webhook)\/[0-9a-f-]{36}@)/,
    "Twilio API Key":/(?i:twilio|twilio_token|twilio_api_token)(.{0,50})SK[0-9a-fA-F]{32}/,
    "SonarQube User Token":/(?i)sonar.{0,5}("|'|`)?[0-9a-f]{40}("|'|`)?/,
    "Nexmo Secret":/(?i)nexmo.{0,50}([0-9a-f]{16})/,
    "Devise Secret Key":/(?i)(devise|secret).{0,50}([0-9a-f]{128})/,
    "Gitlab Personal Access Token":/(?i)(glpat-)([a-zA-Z0-9_-]{20})/,
    "Consul Token":/(?i)(consul_token).{0,50}([0-9a-zA-Z\\+=\/]{24})/,
    "Omise Secret Key":/(skey_(?i).{0,15}[0-9a-zA-Z]{19})/,
    "NPM Access Token":/(?i:npm_token)\s{0,1}:\s{0,1}([a-zA-z0-9]{8}-[a-zA-z0-9]{4}-[a-zA-z0-9]{4}-[a-zA-z0-9]{4}-[a-zA-z0-9]{12})/,
    "Artifactory": /(?i)artifactory.{0,50}(\\\"|'|`)?[a-zA-Z0-9=]{112}(\\\"|'|`)?/,
    "CodeClimate": /(?i)codeclima.{0,50}(\\\"|'|`)?[0-9a-f]{64}(\\\"|'|`)?/,
    "Google GCM Service Account": /((\\\"|'|`)?type(\\\"|'|`)?\\\\s{0,50}(:|=>|=)\\\\s{0,50}(\\\"|'|`)?service_account(\\\"|'|`)?,?)/,

    "Generic API Key": /[aA][pP][iI]_?[kK][eE][yY].{0,20}['|\"][0-9a-zA-Z]{32,45}['|\"]/,
    "Generic Secret": /[sS][eE][cC][rR][eE][tT].{0,20}['|\"][0-9a-zA-Z]{32,45}['|\"]/,
}

function analyze(context, response) {

	//Function that calculates entropy. 
    function entropy(str) {
        const len = str.length

        //Build a frequency map from the string.
        const frequencies = Array.from(str)
            .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})

        return Object.keys(frequencies).map(e => frequencies[e])
            .reduce((sum, f) => sum - f / len * Math.log2(f / len), 0)
    }
	
    for (var key in dict) {
        var value = dict[key];
        isMatch = response.body.match(value);
		
		//Checking if response has a sensitive data and entropy value bigger than 3.
        if (isMatch && entropy(isMatch[0]) >= 3) {
			
			//Raising vulnerability with details.
            var vuln = new Vulnerability("fe7b5cd5-6d76-423e-9e80-53b805ed59e6");
           
            vuln.CustomFields.Add("Sensitive Data Type", String(key));
            vuln.CustomFields.Add("Sensitive Data", String(isMatch[0]));
            vuln.CustomFields.Add("Entropy", String(entropy(isMatch[0])));
            return vuln;

        } // return vuln;  // If you don't want to check with entropy just return without condition below.
        else if (isMatch) {
            logUI("Warning! Secret Found (with Regex) but not reported due to Shannon Entropy value");
            return;
        }
    };

}
