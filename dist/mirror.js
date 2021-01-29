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
    console.log(value, index);
    $(value).change(function (e) {
      console.log(e);
    })
  });

  /* 
  Number
  */
  document.querySelectorAll('[marketo="number"]').forEach(function (value, index) {
    // console.log(value, index);
  });
  /* 
  Select
  */
  document.querySelectorAll('[marketo="select"]').forEach(function (value, index) {
    // console.log(value, index);
  });
  /* 
  Radio
  */
  document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
    // console.log(value, index);
  });
  /* 
  Checkbox
  */
  document.querySelectorAll('[marketo="checkbox"]').forEach(function (value, index) {
    // console.log(value, index);
  });
  /* 
  Textarea
  */
  document.querySelectorAll('[marketo="textarea"]').forEach(function (value, index) {
    // console.log(value, index);
  });
  /* 
  Email
  */
  document.querySelectorAll('[marketo="email"]').forEach(function (value, index) {
    // console.log(value, index);
  });
  /* 
  Submit
  */
  document.querySelectorAll('[marketo="submit"]').forEach(function (value, index) {
    // console.log(value, index);
  });


});