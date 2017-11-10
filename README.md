# hackathon-1.1-charity
A crowd-funded charity for CB's hackathon 1.1

## Instructions
####Install Node.js
#####macOS (with brew)
First install brew: https://brew.sh/ and then
```bash
brew install node
```
#####CentOS
```bash
sudo yum install epel-release
sudo yum install nodejs
```
or you can go here to get the most up to date version: https://nodejs.org/en/download


####Setup
(In the repository)
```bash
npm install
```
####UI
- ???
- Profit

####Backend
This will build and start the backend.
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