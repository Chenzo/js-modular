# Modular JavaScript Project
## what's the simpilest js we can make here?
###### No, docker, no gulp/webpack, no node or servers or anything. 

-----



$ `npm start` - This runs livereload and rollup bundling  
$ `npm run sass` - This will use node-sass to compile the SCSS folder

(you'll want to run both to continuously build the site)

http://localhost:10001/

-----



~~So, a server is required when using `type='module'` since there's cors errors. The simpilest and easiest solution was to add http-server (https://www.npmjs.com/package/http-server)~~

Turns out if we use rollup-plugin-serve and rollup-plugin-livereload we can forgo the http-server package and get auto reloading of the page

I decided against rollup-plugin-scss to avoid having too many things dependant on other people

We're just using node-sass to have the cleanest version. Then we use a SCRIPT to watch the /src/scss folder 
