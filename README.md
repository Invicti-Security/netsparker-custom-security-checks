
# Netsparker Custom Security Checks

The Custom Security Checks via Scripting feature allows you to extend Netsparker Standard’s vulnerability detection capabilities. It works by allowing you to write scripts that provide attack patterns, analyze HTTP responses and detect potential vulnerabilities. This repository aims to host custom security checks with the support of the community.


## How to Use

You need to move the Script folder into the Documents/Netsparker/Scripts folder to use the custom security checks in this repository.

To use this feature, Netsparker 5.4.0.25374 or a higher version must be installed.


## The Security Checks

The custom security checks in this repository will be listed with their respective authors.


# How to Write a Custom Security Check?

There are four categories in which you can define Custom Security Checks. 
  

## Active Security Checks
 Active security checks in Netsparker allow you define the attack patterns. The Netsparker attacker will then inject these attack patterns into parameters discovered by the crawler. Each attack pattern you have provided will result in an HTTP request for each parameter discovered by the crawler. You have the option to filter the type of parameters that the attack pattern will be injected, for example you may elect to attack only JSON parameters but not querystring or POST body parameters.

After the Netsparker attacker carries out the request and receives a response, you will be able to determine whether the HTTP response is vulnerable, and whether the injected attack pattern caused a vulnerability.

Here is a sample script:

```javascript
var attacks = [
  {
    id: '8613F6DB-9AD2-4E45-9B8F-308C810FF7DB',
    name: 'My New Pattern',
    attack: '%27AND+1%3dcast(0x5f21403264696c656d6d61+as+varchar(8000))+or+%271%27%3d%27',
    attackUsage: AttackUsages.Json + AttackUsages.Xml
  }
];

function analyze(context, response) {
  if (response.Body.indexOf('iNj3Ct3D') > -1) {
    return new Vulnerability(VulnerabilityType.PossibleSqlInjection);
  }
}
```

The first line of the script defines an array called `attacks` which contains the attack pattern objects. The attack patterns may have the following properties defined:

*   id (required): This is a unique identifier in GUID format. You can generate them using [Online GUID Generator](https://www.guidgenerator.com/).
*   name (required): This is the name of the pattern. It is displayed in the Scan Policy Editor.
*   attack (required): This is the attack pattern that is injected into the parameters.
*   attackUsage: This is the type of the parameter into which the attack will be injected. You can combine multiple values using the addition symbol. See the `AttackUsages` enumeration in the API docs. It defaults to `AttackUsages.QueryPost` (querystring and post parameters).
*   attackEncoded: This is a boolean property that denotes if the attack is already encoded, and therefore does not need to be encoded according to the current parameter context (for example, URL encode, XML encode). It defaults to false.

The second line of the script contains the `analyze` function that is executed for every response to the attack request made during the scan. You can conduct your analysis within this method and choose to return a new `Vulnerability` instance. The function has two parameters: context and response:

*   The context variable contains information about the current attack context, such as the vulnerable parameter and the Request instance.
*   The response variable represents the HTTP response that was returned from the web server in response to the attack request that contained the attack pattern.




## Passive Security Checks

Passive security checks do not issue any extra HTTP requests during scans. For each HTTP request that the crawler has discovered, you can write passive security check scripts to analyze the response. If the response contains any vulnerable information, this will enable you to detect a new vulnerability.

Here is a sample script:

```javascript
function analyze(context, response) {
   if (response.Body.indexOf('java.io.FileNotFoundException:') > -1) {
     return new Vulnerability(VulnerabilityType.ProgrammingErrorMessages);
   }
}
```
The `analyze` function is executed against each HTTP response that the crawler has received. The function takes two parameters: `context` and `response`:

*   The `context` variable contains information about current passive analysis context, for example whether the scan is currently in the ReCrawl phase, or the `IdentificationSource` of the request.
*   The `response` variable represents the HTTP response returned from the web server to the crawling request.


## Singular Security Checks

These checks are executed once for each scan. You are able to analyze the response of the Target URL that scan has started and raise vulnerabilities.

Here is a sample script:
```javascript
function analyze(response) {
   if (response.Headers['Server'].indexOf('Apache') > -1) {
     return new Vulnerability(VulnerabilityType.ApacheIdentified);
   }
}
```
The analyze function is executed against the HTTP response of the request to the Target URL. The function takes a single parameter, response. The response variable represents the HTTP response returned from web server in response to the Target URL request.


## Per-Directory Security Checks
  
These checks are very similar to Active Security Checks, but they work once for all directories (URL segments). Generally, you should write Per-Directory Security Checks if you want to check for the existence of certain files in the directories of the target web application, for example resources that are not linked anywhere on the web application.

Here is a sample script:
```javascript
var attacks = [
  {
    id: '5664f8d7-11b1-4c4b-a3d7-513e5b45771b',
    name: 'web.config detection',
    attack: 'web.config',
  }
];

function analyze(context, response) {
  if (response.Body.indexOf('<connectionStrings>') > -1) {
    return new Vulnerability(VulnerabilityType.WebConfigIdentified);
  }
}
```

The `attacks` array and `analyze` function work very similar to Active Security Checks. The only difference is that the `attackUsage` value of the attack patterns defaults to `AttackUsages.FullUrl`. This is required to make sure attacker appends the attack patterns to the end of each directory URL.

## Helper Functions

The Custom Checks JavaScript environment includes the following helper functions.

### netsparker.request

The `netsparker.request` function helps you create HTTP requests. There are two overloads to this function, and you can either add a `string` parameter or a `Request` parameter to this function. The function returns a `Response` instance containing the HTTP response information that has been retrieved.

```javascript
// The following makes a GET request to the specified URL
var res = netsparker.request('http://example.com/page.htm');

// The following makes a POST request, sets a parameter and a header
var request = new Request('http://example.com/action');
request.Parameters.Add(new Parameter('foo', 'bar', ParameterType.Post));
request.Headers.Add('X-CustomHeader', 'quux');
var res = netsparker.request(request);
```

### logUI

The `logUI` function logs a message to the Logs panel in Netsparker Standard.

```javascript
logUI('Hello World!');
```

### log

The `log` function logs a message to scan log file (nstrace.csv). The log message severity is Information. So, in order to be able to see this message in the log file, set logging options to Information level.

```javascript
log('Performing the HTTP request.');
```
### logInfo

The `logInfo` function logs a message to scan log file (nstrace.csv). The log message severity is Information. So, in order to be able to see this message in the log file, set logging options to Information level.

```javascript
logInfo('Performing the HTTP request.');
```

### logWarn

This `logWarn` function logs a message to scan log file (nstrace.csv). The log message severity is Warning. So, in order to be able to see this message in the log file, set logging options to Warning level.

```javascript
logWarn('Looks like the server is taking too long to respond.');
```

### logError

This `logError` function logs a message to scan log file (nstrace.csv). The log message severity is Error. So, in order to be able to see this message in the log file, set logging options to Error level.

```javascript
logError('An unexpected error has occurred.');
```

## How can I add Custom Fields to a Vulnerability?

```javascript
var vulnerability = new Vulnerability(VulnerabilityType.PossibleSqlInjection);
vulnerability.CustomFields.Add('Foo', 'Bar');
```

## Contributing

If you're going to contribute code, please read our [Contributing Guide](https://github.com/Invicti-Security/netsparker-custom-security-checks/blob/master/CONTRIBUTING.md).


## Questions

If you have a problem with writing scripts you can submit an issue through GitHub. If you have a problem with a custom security check please contact the author.


## License


This project is licensed under the MIT License - see [the LICENSE.md file](https://github.com/Invicti-Security/netsparker-custom-security-checks/blob/master/LICENSE) for details.


