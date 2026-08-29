import { ciyo } from "#/content/site";

export function CiyoBand() {
  return (
    <section id="work" className="band">
      <div className="band__inner" data-reveal>
        <div className="band__head">
          <div className="band__title">
            <span className="band__dot" aria-hidden="true" />
            <h2 className="band__name">{ciyo.name}</h2>
            <span className="band__status">{ciyo.status}</span>
          </div>
          <a className="band__link" href={ciyo.url}>
            {ciyo.linkLabel}
          </a>
        </div>
        <p className="band__lede">{ciyo.lede}</p>
        <CiyoShot />
        <div className="band__facts">
          {ciyo.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <p className="fact__label">{fact.label}</p>
              <p className="fact__body">{fact.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CiyoShot() {
  if (ciyo.screenshot) {
    return (
      <img
        className="shot shot--image"
        src={ciyo.screenshot}
        alt={ciyo.screenshotAlt}
        width={1600}
        height={800}
        loading="lazy"
      />
    );
  }
  return (
    <div
      className="shot shot--placeholder"
      role="img"
      aria-label="Ciyo product screenshot (placeholder)"
    >
      <span className="shot__label">ciyo.ai — product screenshot</span>
    </div>
  );
}
