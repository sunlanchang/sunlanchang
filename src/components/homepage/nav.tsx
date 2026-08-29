export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <span className="nav__brand">LS</span>
      <div className="nav__links">
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
        <a href="#about">About</a>
        {/* Visual affordance only in v1; wire i18n when 中文 content exists. */}
        <span className="nav__lang">EN / 中文</span>
      </div>
    </nav>
  );
}
