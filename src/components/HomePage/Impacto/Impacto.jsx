import i from "./Impacto.module.scss";

const impactoCards = [
  { title: "2500+", description: "Pessoas Atendidas"},
  { title: "150+", description: "Profissionais Voluntários"},
  { title: "98%", description: "Satisfação dos Pacientes"},
  { title: "5+", description: "Anos de Dedicação"},
]

export default function Impacto() {
  return (
    <section className={i.Impacto}>
      <div className={i.ImpactoContainer}>

        <section className={i.ImpactoText}>
          <h2>Nosso Impacto</h2>
          <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>
        </section>


        <section className={i.ImpactoCard}>
          {impactoCards.map((card) => (
            <article className={i.ImpactoCardBox} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </section>

      </div>
    </section>
  )
}
