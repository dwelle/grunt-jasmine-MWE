grunt-jasmine-MWE
=================

Minimal working example for grunt-contrib-jasmine plugin

## Getting Started

Clone with:

```
git clone https://github.com/dwelle/grunt-jasmine-MWE.git
```

Run

```
npm install
```

which will install [grunt-contrib-jasmine][3a76e]  (includes `PhantomJS` headless browser), and [grunt-contrib-watch][19ac3] plugins.

[19ac3]:https://github.com/gruntjs/grunt-contrib-watch 
[3a76e]:https://github.com/gruntjs/grunt-contrib-jasmine

## Running

To test the spec (`spec/globalSpec.js`), run:

```
grunt
```

To watch for any changes to both the spec and the src file (`src/global.js`), run:

```
grunt watch-test-js
```
