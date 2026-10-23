import Image from "next/image";
import {
  mosaic,
  people,
  snapshotsBottom,
  snapshotsTop,
  techTeam,
  values,
  type Person,
  type Snapshot,
} from "./data";
import s from "./meet-the-team.module.css";

export function TeamHero() {
  return (
    <section className={s.hero}>
      <div className={s.heroInner}>
        <div className={s.heroText}>
          <p className={s.eyebrow}>Our Team</p>
          <h1 className={s.heroTitle}>
            The people
            <br />
            behind Taggy.
          </h1>
          <p className={s.heroCopy}>
            Our team is at the heart of everything we do, from supporting our
            community and creating the best experience for our customers, to
            helping Taggy grow and constantly pushing us to do things better.
          </p>
        </div>
        <div className={s.mosaic} aria-hidden="true">
          {mosaic.map((column) => (
            <div key={column.id} className={`${s.col} ${s[`col${column.id}`]}`}>
              {column.tiles.map((tile) => (
                <div key={tile.src} className={`${s.tile} ${tile.tall ? s.tall : ""}`}>
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 190px, 33vw"
                    className={`${s.cover} ${tile.bottom ? s.bottom : ""}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className={s.values}>
      <div className={s.valuesInner}>
        <h2 className={s.valuesTitle}>
          We&apos;re incredibly passionate about building a team of people who
          are...
        </h2>
        <ol className={s.valueList}>
          {values.map((value, i) => (
            <li key={value} className={s.value}>
              <span className={s.valueNumber}>{String(i + 1).padStart(2, "0")}</span>
              <p className={s.valueText}>{value}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PersonCard({ person, className }: { person: Person; className: string }) {
  return (
    <li className={className}>
      <div className={s.portrait}>
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 365px, (min-width: 640px) 50vw, 100vw"
          className={s.cover}
        />
      </div>
      <div className={s.profile}>
        <p className={s.personName}>{person.name}</p>
        <p className={s.personRole}>{person.role}</p>
      </div>
    </li>
  );
}

export function PeopleBehindTaggy() {
  return (
    <section className={s.people}>
      <div className={s.peopleInner}>
        <hr className={s.rule} />
        <div className={s.peopleBody}>
          <h2 className={s.peopleTitle}>Meet the people behind Taggy</h2>
          <ul className={s.peopleGrid}>
            {people.map((person) => (
              <PersonCard key={person.name} person={person} className={s.card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function TechTeam() {
  return (
    <section className={s.tech}>
      <div className={s.techInner}>
        <div className={s.techHeading}>
          <h2 className={s.techTitle}>The team behind our tech</h2>
        </div>
        <ul className={s.techCards}>
          {techTeam.map((person) => (
            <PersonCard key={person.name} person={person} className={s.techCard} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function SnapshotPhoto({ snapshot }: { snapshot: Snapshot }) {
  return (
    <div
      className={`${s.snap} ${snapshot.tilt === "right" ? s.snapRight : s.snapLeft} ${s[snapshot.place]}`}
    >
      <div className={s.snapCard}>
        <Image src={snapshot.src} alt="" fill sizes="156px" className={s.cover} />
      </div>
    </div>
  );
}

export function Community() {
  return (
    <section className={s.community}>
      <div className={s.communityInner}>
        <div className={s.snapRow} aria-hidden="true">
          {snapshotsTop.map((snapshot) => (
            <SnapshotPhoto key={snapshot.src} snapshot={snapshot} />
          ))}
        </div>
        <div className={s.communityText}>
          <h2 className={s.communityTitle}>
            Building Taggy isn&apos;t just about building an elevated platform.
          </h2>
          <p className={s.communityLead}>
            It&apos;s about creating a great community, and that starts with the
            people behind it.
          </p>
        </div>
        <div className={s.snapRow} aria-hidden="true">
          {snapshotsBottom.map((snapshot) => (
            <SnapshotPhoto key={snapshot.src} snapshot={snapshot} />
          ))}
        </div>
      </div>
    </section>
  );
}
