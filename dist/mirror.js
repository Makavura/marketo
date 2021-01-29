/* 
INSTRUCTIONS

set custom form inputs with a data attribute e.g for email input set marketo=email
set custom form with a unique data attibute indicating the id of the form e.g form=mktoForm_1048


*/

$(document).ready(function () {


  /* 
  Multiple forms
  Fetch form being referred to in data-id attribute of webflow form 
  In the event that the element in reference has there value changed, find the element whose count in the form being mirrored onto matches the count of this
  element's type and set its value
  */

  /* 
  Text
  */
  document.querySelectorAll('[marketo="text"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
      console.log(e.target.value, index);
    })
  });

  /* 
  Number
  */
  document.querySelectorAll('[marketo="number"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Select
  */
  document.querySelectorAll('[marketo="select"]').forEach(function (value, index) {
    $(value).change(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Radio
  */
  document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
    $(value).change(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Checkbox
  */
  document.querySelectorAll('[marketo="checkbox"]').forEach(function (value, index) {
    $(value).change(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Textarea
  */
  document.querySelectorAll('[marketo="textarea"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Email
  */
  document.querySelectorAll('[marketo="email"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Url
  */
  document.querySelectorAll('[marketo="url"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Slider
  */
  document.querySelectorAll('[marketo="slider"]').forEach(function (value, index) {
    console.log($(value).slider("value"));
    $(value).change(function (e) {
      console.log(e.target.value, index);
    })
    $(value).slider({
      min: 0,
      max: 100,
      slide: function (event, ui) {
        console.warn(ui.value);
        console.log($(value)["form"])
      }
  })
  });
  /* 
  Date
  */
  document.querySelectorAll('[marketo="date"]').forEach(function (value, index) {
    console.log(value);
    $(value).change(function (e) {
      console.log(e.target.value, index);
    })
  });
  /* 
  Submit
  */
  document.querySelectorAll('[marketo="submit"]').forEach(function (value, index) {
    $(value).click(function (e) {
      console.log(e.target.value, index);
    })
  });


});