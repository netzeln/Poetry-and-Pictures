# Poetry-pictures

This Ember application offers users the chance to put words to images. After searching a database of images for a particular tag or tags, they can choose an image and put words to it. These words will be saved in a Firebase database along with a reference to the image that inspires them. Images can have multiple poems associated with them.

### Authors
* Nic Netzel
* Cassandra Culkins
* Hillary Hintzen
* Bradley Pizzimenti

## Special Setup/Installation Requirements
* You will need to sign up for a free account at [Pixabay](http://www.pixabay.com) to get an API key. See their [documentation](https://pixabay.com/api/docs/) for more details.

* _See Below for more details_

## Known Bugs

* You need to wrap any API requests with this: <pre><code> https://jsonp.afeld.me/</code></pre> as a proxy since it was not a CORS api. In addition you need to write any additional properties as URI encoded   (ex: "%26q%3DCookies"  instead of "&q=Cookies") using "encodeURIComponent".  See examples in the Api calls in the model
*

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)


## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
