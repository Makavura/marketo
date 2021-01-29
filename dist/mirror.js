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
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="text"]')[index].value = e.target.value;
          }
        }
    })
  });

  /* 
  Number
  */
  document.querySelectorAll('[marketo="number"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="number"]')[index].value = e.target.value;
          }
        }
    })
  });
  /* 
  Select
  */
  document.querySelectorAll('[marketo="select"]').forEach(function (value, index) {
    $(value).change(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="select"]')[index].value = e.target.value;
          }
        }
    })
  });
  /* 
  Radio
  */
  document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
    $(value).change(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="radio"]')[index].value = e.target.value;
          }
        }
      })
  });
  /* 
  Checkbox
  */
  document.querySelectorAll('[marketo="checkbox"]').forEach(function (value, index) {
    $(value).change(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="checkbox"]')[index].value = e.target.value;
          }
        }
    })
  });
  /* 
  Textarea
  */
  document.querySelectorAll('[marketo="textarea"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="textarea"]')[index].value = e.target.value;
          }
        }
      })
  });
  /* 
  Email
  */
  document.querySelectorAll('[marketo="email"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="email"]')[index].value = e.target.value;
          }
        }
      })
  });
  /* 
  Url
  */
  document.querySelectorAll('[marketo="url"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="url"]')[index].value = e.target.value;
          }
        }
      })
  });
  /* 
  Slider
  */
  document.querySelectorAll('[marketo="slider"]').forEach(function (value, index) {
    $(value).change(function (e) {
      console.log(e.target.value, index);
    })
    $(value).slider({
      min: 0,
      max: 100,
      slide: function (event, ui) {
        for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if(key == "id"){
            $('#mktoForm_1048 :input[type="range"]')[index].value = ui.value
          }
        }
      }
  });
  });
  /* 
  Date
  */
  document.querySelectorAll('[marketo="date"]').forEach(function (value, index) {
    $(value).change(function (e) {
      for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
        if(key == "id"){
          $('#mktoForm_1048 :input[type="date"]')[index].value = e.target.value;
        }
      }
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