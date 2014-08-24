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

which will install `grunt-contrib-jasmine` (includes `PhantomJS` headless browser), and `grunt-contrib-watch` plugins.

## Running

To test the spec (`spec/globalSpec.js`), run:

```
grunt
```

To watch for any changes to both the spec and the src file (`src/global.js`), run:

```
grunt watch-test-js
```