import { hero, site } from "#/content/site";

export function Hero() {
  return (
    <header className="hero" data-reveal>
      <h1 className="hero__title">{hero.title}</h1>
      <div className="hero__meta">
        <p className="hero__intro">{hero.intro}</p>
        <span className="hero__domain">{site.domainLabel}</span>
      </div>
    </header>
  );
}
