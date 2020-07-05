
document.getElementById('topRight').addEventListener('click',signIn);
function signIn(){
    alert(`I'm Using JavaScript!`);
};
// .......................................................................

function email (){
    alert('An email has been sent to ' + document.getElementById('email').value );
};
document.getElementById('tryFree').addEventListener('click', email);

// eventlistener (click) listens for the tryFree button to be pushed
// runs the email function
// alert 'words... + value input into the email box in the html document
document.getElementById('tryFree3').addEventListener('click',email);