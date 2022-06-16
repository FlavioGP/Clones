const inputs = document.querySelectorAll('.input-email');

const handleFocus = function ( { target } ){
   const span = target.previousElementSibling;
   span.classList.add('span-active');
   target.classList.add('input-focused');
}

const handleFocusout = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    target.classList.remove('input-focused');
}

inputs.forEach((input)=>{
    input.addEventListener('focus', handleFocus);
    input.addEventListener('focusout', handleFocusout);
});
