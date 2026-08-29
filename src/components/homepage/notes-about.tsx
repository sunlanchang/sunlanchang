import { notes } from "#/content/notes";
import { about } from "#/content/site";

export function NotesAbout() {
  return (
    <section id="notes" className="notes-about" data-reveal>
      <div>
        <h3 className="section-title section-title--tight">Notes</h3>
        <div className="notes">
          {notes.map((note) => (
            <div className="note" key={note.title}>
              <a className="note__title" href={note.href}>
                {note.title}
              </a>
              <span className="note__date">{note.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div id="about">
        <h3 className="section-title section-title--tight">About</h3>
        <p className="about__text">{about}</p>
      </div>
    </section>
  );
}
