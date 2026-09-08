import { useEffect, useRef, useState } from "react";
import type { FeaturedProject } from "#/content/site";

const PREVIEW_WIDTH = 1440;
const PREVIEW_HEIGHT = 900;

export function ProjectBand({
  id,
  project,
}: {
  id: string;
  project: FeaturedProject;
}) {
  return (
    <section id={id} className={`band band--${project.accent}`}>
      <div className="band__inner" data-reveal>
        <div className="band__head">
          <div className="band__title">
            <span className="band__dot" aria-hidden="true" />
            <h2 className="band__name">{project.name}</h2>
            <span className="band__status">{project.status}</span>
          </div>
          <a className="band__link" href={project.url}>
            {project.linkLabel}
          </a>
        </div>
        <p className="band__lede">{project.lede}</p>
        <WebsitePreview project={project} />
        {project.facts && (
          <div className="band__facts">
            {project.facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <p className="fact__label">{fact.label}</p>
                <p className="fact__body">{fact.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function WebsitePreview({ project }: { project: FeaturedProject }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // Keep the site's desktop layout while fitting the preview to any screen.
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / PREVIEW_WIDTH);
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shot">
      <div className="shot__toolbar">
        <span className="shot__label">{project.previewLabel}</span>
        <a
          className="shot__link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.previewLinkLabel}
        </a>
      </div>
      <div className="shot__viewport" ref={viewportRef}>
        <iframe
          className="shot__frame"
          src={project.url}
          title={project.previewTitle}
          width={PREVIEW_WIDTH}
          height={PREVIEW_HEIGHT}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
}
