import m from "./Missao.module.scss";

const missaoCards = [
  { title: "Acesso Equitativo", description: "Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."},
  { title: "Comunidade Forte", description: "Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."},
  { title: "Bem-estar Total", description: "Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."},
]

export default function Missao() {
  return (
    <main className={m.Missao}>
      <div className={m.MissaoContainer}>
        <div className={m.MissaoText}>
          <h2>Nossa Missão</h2>
          <p>Transformar vidas através do acesso universal a saúde de qualidade</p>
        </div>
        
        <section className={m.MissaoCard}>
          {missaoCards.map((card) => (
            <article key={card.title} className={m.MissaoCardBox}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
