# Find a user profile in Github

Sample implimentaiton to call publc API from GitHub and search required user profiles and display details including latest repositiries for matching profile


## UI library used 
ref : https://bootswatch.com/

Bootswatch library is used for rapid UI development. This library is theaming on top of bootstrap library



## Code Execution

- clone the code locally
- open code in VSCode and make sure 'live server' extention is installed in vs code
- right click on index.html file and choose 'Open with live server'

GitHub provide limited number of calls to not authenticated users whihc are sufficient for demo execution
for more API call support create OAuth App and use Secret and Access key while creating object for GitHub class and pass client_id, client_secret as params
https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app

## Sample demo GIF

![image](./GitProfileFinder.GIF)


