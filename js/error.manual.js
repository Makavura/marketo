/* 

Source: https://blog.teknkl.com/adding-a-network-server-error-handler-to-marketo-forms/

Adding a network/server error handler to Marketo Forms
By Sanford Whiteman Sep 7th 2017 Tags: Marketo forms, JS, event handling, FormsPlus
While Forms 2.0 fires JS events at validation time, (pre-)submission time, and post-submission success, it lacks an event for a failed POST.

So in the rare-but-not-impossible case that someone loses connectivity between viewing the form and clicking Submit 
(say, they load the page and then move into a cellular dead zone) there isn't any way to respond 
to that failure, and the person won't know it happened.

In JavaScript, we can't listen for the absence of events, of course (that's the thing about event-driven programming) and while in theory you could set a timer 
and see if onSuccess ran after an arbitrary number of seconds, that's really fragile. (I wouldn't roll out anything like that: best-guess timers are a major code smell.)

Interestingly, embedded Forms 2.0 forms (but not named Forms 2.0 forms on Marketo LPs) do emit an event on POST failure — 
but it looks like someone abandoned the code partway through (budget?) and never added the listener part, or what I'm going to call today onSubmitError.

You can download the FormsPlus::onSubmitError library here. Include that file in a <script> (please don't src it directly from CodePen but put it on your own server!)

Then, you'll have a new event that you can listen for like this:

FormsPlus.onSubmitError(function(error) {
  alert("A network or server error was detected on posting form data: " + error);
});
The contents of the error variable will change depending on context: on embedded forms, it'll be the actual network error, 
like Server Unreachable but on named forms on Marketo LPs it's the form ID. Confusing, I know. But the most important thing is you now have an event you can catch. 
Truth is, you don't need to show the user the error. An alert like “Error posting form: Please refresh the page and try again” will do.

Remember, onSubmitError is for network and server errors, like a TCP/IP timeout/reset or a down server returning 404 or 500. It's not for catching a messed-up code error 
that stops the form data from going on the wire in the first place.

FOR THE LEARNERS
I had to do a lot of reverse engineering to figure this out and I doubt you'd make use of the code anywhere else. But for the really curious, here's some code anatomy.

First, we need to know whether the form is embedded (representing a cross-origin post) or native on a Marketo LP (which uses a same-origin post). 
A couple of ways to detect this, but looking for the existence of the cross-origin IFRAME (id="MktoForms2XDIFrame") is as easy as any:

  MktoForms2.whenReady(function(form) {    
    var sameOrigin = !window.MktoForms2XDIframe;
    if (sameOrigin) addSameOriginHandler(form);
    if (listenPending) listenErrors(cb, sameOrigin);    
  });
As noted above, the cross-origin case already has a POST failure handler built in. 
So instead of reinventing the wheel, we're going to pick up the existing handler if we're cross-origin. 
Otherwise, we have to add a handler (done by the addSameOriginHandler function) and the hack to do that is so hacky I'm not going to reprint it here.

After we have handlers for both form variants, we then listen for the events pumped out by the handler. 
The event format is the same in both cases: it's a postMessage text payload that's valid JSON.

When turned into a JS object, the event has some easily identified mkto properties. 
So we just need to make sure the event came from the proper window (a security measure):

  if (e.origin != allowedOrigin) return;

  try {
    msg = JSON.parse(e.data);
    if (msg.mktoResponse && msg.mktoResponse.error == true) {
      cb(msg.mktoResponse.data);
    }
  } catch (err) {}
'bout the only thing teachable above is that if you're parsing text that may or may not be valid JSON 
(it may be a freeform string) and isn't an exception if it's not JSON, remember to use try/catch to swallow the SyntaxError.
*/