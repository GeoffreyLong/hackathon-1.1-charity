# hackathon-1.1-charity
A crowd-funded charity for CB's hackathon 1.1

## Instructions
#### Install Node.js
##### macOS (with brew)
First install brew: https://brew.sh/ and then
```bash
brew install node
```
##### CentOS
```bash
sudo yum install epel-release
sudo yum install nodejs
```
or you can go here to get the most up to date version: https://nodejs.org/en/download


#### Setup
(In the repository)
```bash
npm install
```
#### UI

Will run the UI on localhost:3000

```bash
cd client
npm install
npm run start
```


#### Backend

This will build and start the backend (localhost:3001).

```bash
npm run backend
```

Though if you are actively developing the backend you should use gulp directly
```bash
cd backend
gulp build
gulp start
^C
gulp clean
```

`gulp run` is equivalent to `gulp build` followed by `gulp start`

#### Database

If on a mac, follow this guide
https://treehouse.github.io/installation-guides/mac/mongo-mac.html 

## Data Architecture
We have users, causes, campaigns, and transactions. 

A user can create causes and campaigns if they have sponsor=true in their data object.

A sponsor (user) can create multiple causes, each causes can have multiple campaigns. Causes are like children, schools, etc, anything that needs support. If a child is a cause, and they need gifts for Christmas, this is a new campaign.

