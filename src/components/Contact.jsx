import React from 'react';

    function Contact() {
        return (
            <div id='contact'>
                <h1>Cadastro</h1>
                <form>
                <input type='text' placeholder='Nome' required/>
                <input type='text' placeholder='e-mail' required/>

                <textarea placeholder='Mensagem (Opcional)' name='message'></textarea>
                <input type='submit' value='Enviar Mensagem'/>
                    
                </form>
        </div>
    )
}

export default Contact;