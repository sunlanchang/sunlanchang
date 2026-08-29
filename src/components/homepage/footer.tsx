import { site } from "#/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>
          © {site.copyrightYear} {site.name}
        </span>
        <div className="footer__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.x.url}>{site.x.handle}</a>
        </div>
      </div>
    </footer>
  );
}
