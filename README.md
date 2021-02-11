# Marketo Form Mirroring 

## Introduction

The Marketo Webflow mirroring script aims to give Webflow designers freedom over custom forms that feed Marketo’s embedded forms in a page and mirrors all events, validation errors, submission success

## Features

- Mirror form values dynamically from a custom Webflow form using data attributes only :white_check_mark:
- Submit form values to Marketo via the Marketo form programmatically:white_check_mark:
- Check for form success :white_check_mark:
- Reset parent Webflow form on success of submission of Marketo form:white_check_mark:
- Supported types of inputs:white_check_mark:
  -  Select
  -  Checkbox
  -  Textarea
  -  Text
  -  Number
  -  Slider - has to be set via JQuery UI
  -  Datepicker - has to be set via JQuery UI
  -  Url
  -  Email
  -  Radio
- On success implementation:white_check_mark:
- Validation error message mirroring:white_check_mark:


## The Script(s)

The setup is dependent on two sets of scripts, one for mirroring the form values from a custom Webflow form and the other set of scripts referred to as Marketo scripts include scripts for validation error message mirroring to custom Webflow form.

- [Webflow to Marketo mirroring script](https://github.com/Makavura/marketo/blob/main/dist/mirror.ii.js)

- [Validation error message mirroring from Marketo to Webflow script](https://github.com/Makavura/marketo/blob/main/dist/mirror.ii.validate.js)

- [Submission success and submission error mirroring and handling & form clearance on submit](https://github.com/Makavura/marketo/blob/main/dist/mirror.ii.marketo.js)

## Setup Instructions

*Webflow to Marketo mirroring*
- Create a custom form and set custom id e.g `<form id="webflow"></form>`

- In the embedded script region where the Marketo form will be loaded, reference the Webflow form by setting a unique id on the form that you want to be mirrored and reference the webflow form it is going to fetch data from i.e by setting attribute `webflow-mirro-form-id` as so:

    > `<form id="mktoForm_1048" webflow-mirror-form-id="webflow"  class="form-2"></form>`

- Set form attributes to Webflow form:


    > `data-id='mktoForm_1048'`

    this is to reference the the Marketo form to be mirrored onto values by `data-id` 

- Reference form elements e.g inputs etc:

    > Setup webflow form input elements to reference their Marketo form counterparts by
     declaring the attribute  
     
    > `marketo-input-id="id_of_input_element_being_referenced_from_marketo"`

    > Remember to give elements unique ids

 
*Validation error messaging mirroring*

 - Set a webflow-mirror-form-id data attribute to marketo form e.g :

`<script src="//info.xyz.com/js/forms2/js/forms2.min.js"></script>`

`<form id="mktoForm_1048" webflow-mirror-form-id="webflow"  class="form-2"></form>`

- To customize validation error message mirrored element display:
    
    >  find all instances of `<div class='finwferror'>${errorMessage}</div>`


    > create a custom design element in webflow, inspect and copy element and in the place where you wish the error messages to be displayed, set `${errorMessage}` . Remember to contain the entire element within the ``, backticks.


## Non Webflow-native input type's element support:

*For this setup, Jquery UI is the library used*

Configure Jquery UI

In the head section copy and paste:

> `<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`

> `<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">`

Copy and paste the following just before the closing `</body>` tag:

- Datepicker
    > Create a div and set id e.g `slider-1`

    >   `<script>$('#datepicker').datepicker({dateFormat: "yy-mm-dd"});</script>`

-  Slider:

    > Create a div and set id e.g `slider-1`

    >  `<script>$(function() { $( "#slider-1" ).slider();});</script>`