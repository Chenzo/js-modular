# Modular JavaScript Project
## what's the simpilest js we can make here?
###### No, docker, no gulp/webpack, no node or servers or anything. I just want to write pure ES6 javascript, have it bundled together, minified and have a dev server running. 

Everything in the WWW folder can go to the web

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

It's likely we can remove the WWW (DIST) folder from the repo to something like netlify or cloudflare pages can just build when this repo gets pushed. But I'm not going to do that to keep this project simple for now.



12/26/2020 - this is where I'm going to leave this repo since it's probably the cleanest and smallest/basic version of this I can have. - Vince

