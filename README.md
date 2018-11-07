# myPosts
![demo](./docs/demo.gif)

A Vue.js app that consumes posts from an API and then displays those posts, and lets the user filter the posts by finding even or odd IDs.

This app has been tested with the following Node.js + NPM versions:
```
$ node -v
v10.13.0
$ npm -v
6.4.1
```

  

# Getting Started
To run this app, go ahead and clone this project
by running 

```$ git clone https://github.com/southernspice/Posts.git```

and then go into the newly created directory with this command:

```$ cd Posts```

Next, we need to install all of our dependencies.

```$ npm install```

# Testing the app

Let's go ahead and run our server-side test, to make sure our 
connection is working properly:

```$ npm test ```

If all goes well, you should see that both your tests pass:

```    
$ npm test

> server@1.0.0 test /Users/Desktop/workdir/Posts
> mocha -R spec server/test/spec.js --exit



  loading express
::ffff:127.0.0.1 - - [07/Nov/2018:18:19:22 +0000] "GET /posts HTTP/1.1" 200 27520 "-" "node-superagent/3.8.3"
    ✓ responds to /posts (199ms)
::ffff:127.0.0.1 - - [07/Nov/2018:18:19:23 +0000] "GET / HTTP/1.1" 200 11 "-" "node-superagent/3.8.3"
    ✓ responds to /


  2 passing (1s)

```

Next, we have to build our client-side app. Go ahead and go into the 
client app, and install dependencies with the following command:

```
$ cd client
$ npm install
```

Once the dependencies are finished installing, go ahead and test the client
app with the following command:

```$ npm test```

If all goes well, you should get some output like this: 
```
HelloWorld.vue
    ✓ should render correct contents

Posts.vue
    ✓ should render correct contents
    ✓ should have a button to filter by even postID
    ✓ should have a button to filter by odd postID

Running:  default e2e tests
    ✔ Element <#app> was visible after 67 milliseconds.
    ✔ Testing if element <.hello> is present.
    ✔ Testing if element <h1> contains text: "Welcome to Your Vue.js App".
    ✔ Testing if element <img> has count: 1

OK. 4 assertions passed. (13.501s)

```

# Running the app

Go back into the main directory, `Posts`. Now, we 
can go ahead and start our server now, with the following command:

```$ npm start```

Just to make sure our server-side app is working, go ahead and 
open your broswer to `localhost:8081`. You should see `hello world`
printed to the screen. If you go to `localhost:8081/posts` you will
see a lot of JSON that will be rendered on our client app. Great,
looks like we are ready to see our client app.

In a different terminal window, go ahead and start the client-app:

```
$ cd Posts/client
$ npm run dev
```

If everything went well, you should see something like this:

```
 Compiled successfully in 6867ms                               10:34:24 AM

 I  Your application is running here: http://localhost:8080
 ```


This means that you can go ahead and open your browser to
`localhost:8080` to see the home page of the app. It's just the
Vue.js boilerplate, nothing to see there.


Go ahead and go to `localhost:8080/#/posts` to see our app.
If you go there, the app should make a call to the jsonplaceholder API
and retrieve 100 posts. There are buttons on the top to filter the 
posts - either by evenID or oddID. Go ahead and play with those buttons -
once you are done, you can click on `getAllPosts` to get back to the 
original 100 posts.

To watch and see the full functionality of the app, go ahead and 
check out the gif at the top of the README. This is how your app
should behave once you have installed all the dependencies and 
ran the server and client apps. 

Thanks for reading!
