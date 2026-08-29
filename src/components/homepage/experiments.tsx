import { type Experiment, experiments } from "#/content/site";

export function Experiments() {
  return (
    <section className="experiments" data-reveal>
      <h3 className="section-title">Other experiments</h3>
      <div className="cards">
        {experiments.map((experiment) => (
          <ExperimentCard key={experiment.name} experiment={experiment} />
        ))}
      </div>
    </section>
  );
}

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const body = (
    <>
      <span className="card__status">
        <span
          className={`card__dot card__dot--${experiment.accent}`}
          aria-hidden="true"
        />
        {experiment.status}
      </span>
      <span className="card__name">{experiment.name}</span>
      <span className="card__desc">{experiment.description}</span>
    </>
  );

  if (experiment.href) {
    return (
      <a className="card card--link" href={experiment.href}>
        {body}
      </a>
    );
  }
  return <div className="card">{body}</div>;
}
