# Iván Peña Huguet Personal Portfolio

## Set up local environment

To fully test the page in local you need to create a .env file with the following keys:

```text
VITE_FORMSPARK_FORM_ID=key
VITE_BOTPOISON_PUBLIC_KEY=key
```

Where the FORMSPARK_FORM_ID is used to send the email from the contact form and can be found in the [formspark.com](https://formspark.io/) dashboard. And the botpoison public key is used to verify that the user is not a spam bot and can be found in the [botpoison.com](https://botpoison.com/) dashboard.
