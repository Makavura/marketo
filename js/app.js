/* 

I add Marketo to my website via the script. The official marketo form is loaded on the page and will be hidden.
I build a Webflow form to match my Marketo form. If I have 6 fields on my Marketo form, I will create the same fields on my Webflow form
I add data attributes to to the inputs my Webflow form. Each data attribute will ‘match’ a field in my Webflow form to my hidden Marketo form
A user fills out the Webflow form and presses send
A script will send this data through the hidden marketo form on the page. The Webflow form is not submitted. The Marketo form is submitted.
If any errors are presented in the Marketo form upon submit, those must be presented in the visual Webflow form.
Be mindful of checkboxes, selects, text input, radio, etc.

*/

/* 
2 Forms

First Form
-Visible
-Webflow Made
-use data attributes in inputs that are matched to specific fields in Second Form


Second Form
-Hidden
-To be sent to Marketo


*/




var NumberInput = $('input[data-number=Number]').val();
var TextInput = $('input[data-number=Number]').val();

document.getElementsByClassName("form-1").addEventListener("submit", myFunction);

function myFunction(event) {
    alert("The form was submitted");
    event.preventDefault();
  }
  $( document ).ready(function() {
    console.log( "ready!" );

    $( ".form-1" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
      });
});