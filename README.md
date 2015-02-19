# README #

This project contains the code for the QuikIntro demo application.  This is a single-page app, written using Google's  Polymer framework [http://www.polymer-project.org].  The [Get Started](https://www.polymer-project.org/docs/start/getting-the-code.html) section describes how to install tools like bower, and additional webcomponents that you may need.


###  Code Organization ###
The index.html page is the main entry point.  Polymer (and other 3rd party) compounds are in the **bower_components** directory.  Customized QuickIntro components are in the **quikintro** directory.  Each subdirectory contains the CSS, HTML and JavaScript for a single component.  Each component starts with **qi** to differentiate it from other components.

The root directory contains data files like **contacts.json** which give you an idea of what the data will look like coming from a RESTful request.  The corresponding **qi-contact-panel** is responsible for invoking the request, and binding the resultant response to individual **qi-contact-card** instances.

### Setup ###
To run the application, simply type:
**python -M SimpleHTTPServer**