# README #

This project contains the code for the QuikIntro demo application.  This is a single-page app, written using Google's  Polymer framework [http://www.polymer-project.org].  The [Get Started](https://www.polymer-project.org/docs/start/getting-the-code.html) section describes how to install tools like bower, and additional webcomponents that you may need.


###  Code Organization ###
The index.html page is the main entry point.  Polymer (and other 3rd party) compounds are in the **bower_components** directory.  Customized QuickIntro components are in the **qi-components** directory.  Each subdirectory contains the CSS, HTML and JavaScript for a single component.  Each component starts with **qi** to differentiate it from other components.  Additional 3rd party components can be installed using the **bower install** command.

The **data** directory contains data files like **contacts.json** which give you an idea of what the data will look like coming from a RESTful request.  The corresponding **qi-contact-panel** is responsible for invoking the request, and binding the resultant response to individual **qi-contact-card** instances.


### Install dependencies ####

Task requires you to have [nodeJS](https://nodejs.org/download/), [Ruby](http://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/download.html) installed. If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal. When you've confirmed you have Ruby installed, run `gem install sass` to install Sass.

Needed only one time

    npm install
    npm install grunt-cli -g

Everytime (use any one of the following default: grunt server )

    grunt server
    grunt server --target=production (to automatically update the ajax url to point to production)
    grunt build (if you want to use python or other web server)


### Development Information ###

  1. Never edit css file directly, always make sure create/edit a scss file and import '../sass/_config'.
  2. when you are running `grunt server` and editing scss file, grunt will recompile the scss to css ( No need to stop and run again)
  3. Ajax urls can be edited from qi_components/qi-global/dev.html (or) qi_components/qi-global/dev.html ( dont edit global.html as it is gonna overwritten)


### Useful Docs ###
* ApiGee LinkedIn API: https://apigee.com/console/linkedin
* LinkedIn Basic Profile Fields: https://developer.linkedin.com/docs/fields/basic-profile
* LinkedIn Position Fields https://developer.linkedin.com/docs/fields/positions
* LinkedIn Company Fields: https://developer.linkedin.com/docs/fields/companies
* Meetup.com API: http://www.meetup.com/meetup_api/
* Android Beacon Library: http://altbeacon.github.io/android-beacon-library/
* Cordova Beacon API: http://plugins.cordova.io/#/package/com.unarin.cordova.beacon
* Twitter API: https://dev.twitter.com/overview/documentation

### Polymer Docs ###
We currently use Google's Polymer library for developing web components.  You'll find more information here:

* [Polymer](http://polymer-project.org)
* [Polymer Migration Documentation](https://www.polymer-project.org/1.0/docs/migration.html)
* [Polymer Themes](https://polymerthemes.com/sky/)
* [Expand.js -- Polymer components](http://expandjs.com/)


### Setup (Not needed anymore as we run server directly from grunt task) ###
To run the application, simply type:
**python -M SimpleHTTPServer**