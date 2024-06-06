Code examples accompanying a video series introducing working with promises by example,
["A minimum of asynchronous JavaScript - Promises"](https://www.notion.so/weareacademy/abc-A-minimum-of-asynchronous-JavaScript-Promises-d364b6efb6fb466bb724facddf31d3cb)

## Install

Run this command to install all required libraries for the demos (as specified in [./package.json](./package.json)).

`yarn`

### Database creation and population

To run the database demos you will need to:

1. create a _local_ database called `async-demo`, and then...
2. populate it using the sql in [src/dbDemo/sql/creation.sql](src/dbDemo/sql/creation.sql)

## Running the demos

To run any demo, run the following, replacing the fake path with the path to the relevant demo

`node src/path/to/demo.js`

### shortcuts

There are a few basic demos which have shortcuts - mostly to support me in recording videos.
However, note that some of the more substantial demos are not linked here, so you will likely want to use `node path/to/file` as above in order to experiment with those programs.

Here's a snapshot of what they (at one point) mapped to. Look in [./package.json](./package.json) to be sure

-   `demo1` runs [src/enquirerDemo/enquirerDemo1dWithThen.js](src/enquirerDemo/enquirerDemo1dWithThen.js)
-   `demo2` runs [src/dbDemo/dbQueryDemo1WithThen.js](src/dbDemo/dbQueryDemo1WithThen.js)
-   `demo3` runs [src/axiosDemo/axiosDemo1WithThen.js](src/axiosDemo/axiosDemo1WithThen.js)
-   `demo4` runs [src/twoPromisesDemo/twoPromisesDemo1WithAwait.js](src/twoPromisesDemo/twoPromisesDemo1WithAwait.js)
-   `demo5` runs [src/twoPromisesDemo/twoPromisesDemo2WithAwait.js](src/twoPromisesDemo/twoPromisesDemo2WithAwait.js)
-   `demo6` runs [src/loopDemo/loopDemo1WithAwait.js](src/loopDemo/loopDemo1WithAwait.js)

## Doing further experimentation

It's recommended you use this repo for your initial further experiments with enquirer, node-postgres, and axios. It is suggested you just make another directory under `src/` for your code, and either start a new js file from from scratch in there, or copy into that directory one of the demo files that's relevant to your task, and then modify it to accomplish your task.
