import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Formulario() {
  return (
    <div className="bot-formulario">
        <form>
            <label>
                Nome<br></br>
                <input style={{height: '30px'}} size="40" type="text" name="nome" />
            </label><br></br>

            <label><br></br>
                Telefone<br></br>
                <input style={{height: '30px'}} size="40" type="text" name="telefone" />
            </label><br></br>

            <label><br></br>
                Assunto<br></br>
                <input style={{height: '30px'}} size="40" type="text" name="assunto" />
            </label><br></br>

            <label><br></br>
                Mensagem<br></br>
                <textarea rows="6" cols="38" type="text" name="mensagem" />
            </label><br></br>
            <input className="inputEmail" type="submit" value="Enviar" />
        </form>
    </div>
  );
}

export default Formulario;
