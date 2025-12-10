import f from "./Form.module.scss";

export default function Form() {
  return (
    <section className={f.Form}>
      <div className={f.FormContainer}>

        <section className={f.FormCard}>
          <h2>Inscrição para Voluntários</h2>

          <form action="" className={f.FormContent}>
            
            <div className={f.InputsBox}>
              <h3>Dados Pessoais</h3>

              <input type="text" placeholder="Seu nome*" required className={f.InputForm} />
              <input type="email" placeholder="Seu email*" required className={f.InputForm} />
              <input type="tel" placeholder="Seu telefone*" required className={f.InputForm} />
            </div>

            <div className={f.TextareaBox}>
              <h3 id="message">Mensagem Adicional</h3>
              <textarea name="message" id="message" placeholder="Conte-nos porque você quer ser voluntario..."></textarea>
            </div>

            <div className={f.FormBottom}>
              <p>Entraremos em contato para mais informações</p>
              <button type="submit" className={f.BtnForm}>Enviar Inscrição</button>
            </div>

          </form>
        </section>
        
      </div>
    </section>
  )
}
