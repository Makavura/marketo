/* 
Code is sourced from https://codepen.io/figureone/pen/ebea9b25946df2f00a1b1cefad154109.js

Based on https://blog.teknkl.com/adding-a-network-server-error-handler-to-marketo-forms/
*/

/*! @author Sanford Whiteman @license MIT */

window.FormsPlus = window.FormsPlus || {
    allDescriptors: {},
    allMessages: {},
    detours: {}
  };
  
  FormsPlus.onSubmitError = function(cb) {
    
    var listenPending = true;
    
    MktoForms2.whenReady(function(form) {    
      var sameOrigin = !window.MktoForms2XDIframe;
      if (sameOrigin) addSameOriginHandler(form);
      if (listenPending) listenErrors(cb, sameOrigin);    
    });
  
    function listenErrors(cb, sameOrigin) {      
       window.addEventListener("message", function(e) {
        var msg, allowedLoc, allowedOrigin;
  
        if (sameOrigin) {
          allowedLoc = document.location;
        } else {
          allowedLoc = document.createElement("A");
          allowedLoc.href = MktoForms2XDIframe.src;
        }
  
        allowedOrigin = getOrigin(allowedLoc);
        if (e.origin != allowedOrigin) return;
  
        try {
          msg = JSON.parse(e.data);
          if (msg.mktoResponse && msg.mktoResponse.error == true) {
            cb(msg.mktoResponse.data);
          }
        } catch (err) {}
      });
       
      listenPending = false;
    }
  
    function addSameOriginHandler(form) {
  
      if (!window.MutationObserver) {
        console.log("Cannot listen for named form errors in this browser.");
        return;
      }
  
      var formId = form.getId(),
          formEl = form.getFormElem()[0],
          submitEl = formEl.querySelector(".mktoButton"),
          observerConfig = {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ["disabled"]
          };
      
      var observer = new MutationObserver(function(mutations) {
        mutations
        .filter(function(mutation) {
          return mutation.oldValue == "disabled";
        })
        .forEach(function(mutation) {
          var data = {
            mktoResponse: {
              error: true,
              data: "Form ID " + formId
            }
          };
          
          var dataString = JSON.stringify(data),
            targetOrigin = getOrigin(document.location);
  
          window.postMessage(dataString, targetOrigin);
        });
      });
      
      observer.observe(submitEl, observerConfig);        
    }
    
    function getOrigin(loc){
      return loc.origin || [loc.protocol, loc.host].join("//");
    }
    
  };