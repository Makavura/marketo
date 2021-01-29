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
        if (key == "id") {
          $(`#${value} :input[type="text"]`)[index].value = e.target.value;
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
        if (key == "id") {
          $(`#${value} :input[type="number"]`)[index].value = e.target.value;
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
        if (key == "id") {

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
        if (key == "id") {

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
        if (key == "id") {

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
        if (key == "id") {
          $(`#${value} :input[type="textarea"]`)[index].value = e.target.value;
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
        if (key == "id") {
          $(`#m${value} :input[type="email"]`)[index].value = e.target.value;
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
        if (key == "id") {
          $(`#${value} :input[type="url"]`)[index].value = e.target.value;
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
          if (key == "id") {
            $(`#${value} :input[type="range"]`)[index].value = ui.value
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
        if (key == "id") {
          $(`#${value} :input[type="date"]`)[index].value = e.target.value;
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


  /* 
                Select inputs mirrored on change
        */
  $('select').change(function (e) {
    console.log(e.target.form.id)

    let _web = [];
    let _ = [];
    $('select').each(function (index, value) {
      if ($(this)[0]["form"]["id"] == e.target.form.id) {
        _web.push($(this)[0]["id"]);
        if ($(this)[0]["id"] == e.target.id) { // each select input should have unique id
          $('select').each(function (i, element) {
            for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
              if (key == "id") {
                $('select').each(function (indice, val) {
                  if ($(this)[0]["form"]["id"] == value) {
                    _.push($(this)[0]["id"]);
                  }
                })
                for (let i = 0; i < _web.length; i++) {
                  if (_web[i] == e.target.id) {
                    document.getElementById(value)[i].value = e.target.value;
                    document.getElementById(value)[i].setAttribute("selected", "selected");
                  }
                }

              }
            }
          })
        }
      }
    });

    $('select').each(function (index, value) {

      if (value["id"] = e.target.id) {



      }
      document.getElementById(_[i]).value = e.target.value;
      document.getElementById(_[i]).setAttribute("selected", "selected");
    })
  })

});

