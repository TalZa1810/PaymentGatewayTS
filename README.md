# PaymentGatewayTS


I created this troubleshooter in order to help agents answering tickets. 
I added useful links in the navigation bar (which was designed using bootstrap). 

This troubleshooter is basicly like a state machine. 
Each form has a unique ID so that whenever a user clickes on the button, the relevant form is generated on the fly. 

Moreover, in order to prevent lots of code changes in the future (for example in case there's a need to add extra forms)-
I added the parent attribute dynamically before building the actual form. 
