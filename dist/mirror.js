/* 
SETUP INSTRUCTIONS

set custom form inputs with a data attribute to match intended type e.g for email input set marketo=email
set custom form with a unique data attibute indicating the id of the marketo form e.g form=mktoForm_1048
Script is fully dynamic and only dependent on data attributes
*/

$(document).ready(function () {
  /* 
  Text
  */
  document.querySelectorAll('[marketo="text"]').forEach(function (value, index) {
    $(value).keyup(function (e) {
      console.log($(this).data('marketoid'));
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
    $(value).change(function (e) {
      for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
        if (key == "id") {
          $(`#${value} :input[type="number"]`)[index].value = e.target.value;
        }
      }
    })
  });
  /* 
  Radio
  */
  document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
    let _web = [];
    let _ = [];
    $(value).change(function (e) {
      if ($(this)[0]["form"]["id"] == e.target.form.id) {
        document.querySelectorAll('[marketo="radio"]').forEach(function (element, indice) {
          if ($(element)[0]["form"]["id"] == e.target.form.id) {
            _web.push($(element)[0]["id"]);
          }
        })

        for (const [key, val] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if (key == "id") {

            document.querySelectorAll('[marketo="radio"]').forEach(function (value, index) {
              if ($(value)[0]["form"]["id"] == val) {
                _.push($(this)[0]["id"]);
              }
            })

            for (let count = 0; count < _web.length; count++) {
              if (_web[count] == e.target.id) {
                if ($(this).is(":checked")) {
                  $(`#${val} :input[type="radio"]`)[count].checked = true;
                }
                else if ($(this).is(":not(:checked)")) {
                  $(`#${val} :input[type="radio"]`)[count].checked = false;
                }
              }
            }

          }
        }
      }
    })
  });
  /* 
  Select inputs mirrored on change
  */
  $('select').change(function (e) {
    let _web = [];
    let _ = [];
    $('select').each(function (index, value) {
      if ($(this)[0]["form"]["id"] == e.target.form.id) {
        _web.push($(this)[0]["id"]);
        if ($(this)[0]["id"] == e.target.id) {
          $('select').each(function (i, element) {
            for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
              if (key == "id") {
                $('select').each(function (indice, val) {
                  if ($(this)[0]["form"]["id"] == value) {
                    _.push($(this)[0]["id"]);
                  }
                })
                for (let count = 0; count < _web.length; count++) {
                  if (_web[count] == e.target.id) {
                    document.getElementById(_[count]).value = e.target.value;
                    document.getElementById(_[count]).setAttribute("selected", "selected");
                  }
                }
              }
            }
          });
        }
      }
    });
  })
  /* 
  Checkbox
  */
  document.querySelectorAll('[marketo="checkbox"]').forEach(function (value, index) {
    let _web = [];
    let _ = [];
    $(value).change(function (e) {
      if ($(this)[0]["form"]["id"] == e.target.form.id) {
        document.querySelectorAll('[marketo="checkbox"]').forEach(function (element, indice) {
          if ($(element)[0]["form"]["id"] == e.target.form.id) {
            _web.push($(element)[0]["id"]);
          }
        })

        for (const [key, val] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
          if (key == "id") {

            document.querySelectorAll('[marketo="checkbox"]').forEach(function (value, index) {
              if ($(value)[0]["form"]["id"] == val) {
                _.push($(this)[0]["id"]);
              }
            })

            for (let count = 0; count < _web.length; count++) {
              if (_web[count] == e.target.id) {
                if ($(this).is(":checked")) {
                  $(`#${val} :input[type="checkbox"]`)[count].checked = true;
                }
                else if ($(this).is(":not(:checked)")) {
                  $(`#${val} :input[type="checkbox"]`)[count].checked = false;
                }
              }
            }

          }
        }
      }
    })
  });
  /* 
  Textarea
  */
  document.querySelectorAll('[marketo="textarea"]').forEach(function (value, index) {

    $(value).keyup(function (e) {
      let _web = [];
      let _ = [];
      document.querySelectorAll('[marketo="textarea"]').forEach(function (element, indice) {
        if ($(element)[0]["form"]["id"] == e.target.form.id) {
          _web.push($(element)[0]["id"]);
        }
      })
      for (const [key, val] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
        if (key == "id") {
          document.querySelectorAll('textarea').forEach(function (el, ind) {
            if ($(el)[0]["form"]["id"] == val) {
              _.push($(el)[0]["id"]);
            }
          })
          for (let count = 0; count < _web.length; count++) {
            if (_web[count] == e.target.id) {
              document.getElementById(_[count]).value = e.target.value;
            }
          }
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
          $(`#${value} :input[type="email"]`)[index].value = e.target.value;
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
      e.preventDefault();
      for (const [key, value] of Object.entries(document.getElementById($(this).closest('form')[0]["id"])["dataset"])) {
        if (key == "id") {
          $(`#${value}`).submit();
        }
      }
    })
  });

});

