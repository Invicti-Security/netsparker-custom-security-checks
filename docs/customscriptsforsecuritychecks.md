# Custom scripts for security checks
You can conduct your own attacks in Invicti and raise vulnerabilities during the scan.

Invicti's default report policy includes many vulnerabilities. Thanks to these policies, Invicti can identify vulnerabilities out-of-the-box including SQL Injection, XSS, and LFI. Invicti also provides the option of writing custom security checks if you want to dive deeper into the scanning process or define application-specific tests.

## How Invicti runs security checks
Operating as a DAST, Invicti probes and examines your application from the outside like as an attacker would. 
* During testing, Invicti visits every link that its crawler detects and makes requests to all input points in detected resources, including the URLs used to reach these resources. 
* Next, Invicti performs test attacks on the target application by sending suitable attack payloads to the identified input points. 
* It analyzes the responses to detect vulnerabilities in the web application.

## Built-in and custom security checks
To identify vulnerabilities, Invicti uses thousands of built-in security checks, incorporating over a decade of continuous security research and development for maximum coverage and accuracy. But every application environment is different, so occasionally you may want to add a custom check to test application-specific assets or payloads. With its custom scripts for security checks feature, Invicti lets you write custom security checks in JavaScript. Once you add them to your account, you can use custom scripts in a custom scan policy to scan specific URLs or entire sites. 

## Types of custom security checks in Invicti
Custom security checks in Invicti fall into four categories, depending on the scope of testing and type of attack activity: 
* Active security check
* Passive security check
* Singular security check
* Per-directory security check

You can run custom security checks in Invicti Enterprise and Invicti Standard. For further information, see the following topics:
* Invicti Enterprise on-premises
* Invicti Enterprise on-demand
* Invicti Standard
