
class ValidForm{
    constructor(form){
        this.form = form;
        this.events();
    }

    events(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const valid = this.isValid();
        if (!valid) return;
        this.form.submit();
    }

    isValid(){
        let valid = true;
        const inputEmail = this.form.querySelector('.input-email');
        const label = inputEmail.previousElementSibling.innerHTML;

        for (let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove();
        }

        if(!inputEmail.value){
            // console.log('sem nada');
            this.createError(inputEmail, `O campo ${label} é obrigatorio`);
            valid = false;
        }
        return valid;
    }

    createError(field, err){
        console.log('ai')
        const p = document.createElement('p');
        p.classList.add('error-text');
        p.innerText = `${err}`;
        field.insertAdjacentElement('afterend' , p)
    }

}

const forms = document.querySelectorAll('.form');

forms.forEach(form =>{
    const validForm = new ValidForm(form);
});
