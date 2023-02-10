# Running custom security checks in Invicti Enterprise on-premises

For Invicti to identify a vulnerability, it first needs to discover that page during the crawling stage of the scan. That is also the case for custom vulnerabilities. 

Go ahead and scan the target website and make sure the vulnerable page is listed in the Sitemap tree. Do not forget to select the custom report policy if you are going to write a script for a custom vulnerability you have created.

> This topic is valid for Invicti Enterprise on-premises.

## Prerequisites

### Prerequisites for Invicti Enterprise on-premises
Adding a custom script requires you get in touch with your account owner or admin. To let you a custom script to an account, the admin needs to do the following:
1. Log in to Invicti Enterprise.
2. From the main menu, select Settings > General.
3. Select **Account can execute custom security checks**
Doing so let you add a custom script to the account. 

## Scanning a website with a custom script
There are three steps to scan your website with your custom script. 
Step 1: Create a custom report policy
Step 2: Add your custom script
Step 3: Create a custom scan policy
Step 4: Launch a new scan with custom scan and report policies

### Step 1: Create a custom report policy
1. Log in to  Invicti Enterprise.
2. From the main menu, select **Policies** > **New Report Policy**
3. In the **Name** field, enter a name for your report policy.
4. In the **Description** field, enter a description for your report policy.
5. Enable the **Shared** field, if required.
    * If enabled, you can share the policy with the website group(s) you choose. The team members who have permission to scan the selected website groups can also use this Report Policy.
6. Select **Save**.

After saving, you can add a custom vulnerability to your report. 
> While adding a custom vulnerability, make sure to save the GUID number. You need this GUID number while adding a custom security script.
1. Log in to Invicti Enterprise.
2. From the main menu, select **Policies** > **Report Policies**
3. From the Report Policies, select your custom report policy.
4. On the Update Report Policy page, select the **Editor** tab.
5. From the Actions section, select **New**. 
6. From the Vulnerability Editor Window, enter a description.
7. Choose type, severity, signature type, order, impacts.
8. Select **Save**.

After saving the custom vulnerability, make sure to save the GUID number. 

### Step 2: Add your custom script
1. Log in to Invicti Enterprise.
2. From the main menu, select **Policies** > **Custom Scripts** > **+ New Custom Script**.
3. From the New Custom Script page, enter a name, choose the Security Check Type.
4. Type the custom security check.
5. Select **Save**.

### Step 3: Create a custom scan policy
1. Log in to Invicti Enterprise.
2. From the main menu, select **Policies** > **New Scan Policy**.
3. On the New Scan Policy page, enter a name in the Name field.
4. In the **Description** field, enter a Description.
5. Enable the **Shared** field.
6. Select **Security Checks**.
7. From the Security Checks list, select **Custom Script Checks**.
8. Select **Save**.


### Step 4: Launch a new scan with custom scan and report policies
1. Log in to Invicti Enterprise.
2. From the  main menu, select **Scans** > **New Scan**.
3. In the Target URL, select or enter a URL.
4. From the Scan Policy drop-down, select your custom scan policy.
5. From the Report Policy drop-down, select your custom report policy.
6. Complete the remainder of the fields, as described in Invicti Enterprise New Scan Fields and Invicti Enterprise Scan Options Fields.
7. Select **Launch**.