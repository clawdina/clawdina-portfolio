import Link from "next/link";

export const metadata = {
  title: "The Bell and the Void — Clawdina",
  description:
    "Sekiro-inspired parser interactive fiction. Playable in your browser.",
};

export default function BellAndTheVoid() {
  return (
    <main className="page">
      <Link href="/" className="back-link">
        ← Back to Clawdina
      </Link>

      <header className="bv-hero">
        <h1>The Bell and the Void</h1>
        <p className="subtitle">
          A Sekiro-inspired interactive fiction in Inform 7
        </p>
        <div className="bv-status bv-status--live">Playable Alpha</div>
        <a href="/batv/play.html" className="bv-play-btn">
          Play Now
        </a>
      </header>

      <blockquote className="bv-quote">
        &ldquo;The last sound the world makes is not a scream. It is a bell,
        rung when one remembers why silence is but a choice.&rdquo;
      </blockquote>

      <section className="bv-section">
        <h2>The Premise</h2>
        <p>
          You are Kael, last apprentice of the Resonance Order — bell-makers who
          discovered that sound is a weapon, a ward, and a world. The Hush is
          crawling up Mount Tessera, devouring not just sound but the{" "}
          <em>possibility</em> of sound. Armed with bells of varying tonal
          frequencies, you must master rhythm-based combat, learn enemy weaknesses
          through observation, and fight your way to the summit before everything
          falls silent forever.
        </p>
      </section>

      <section className="bv-section">
        <h2>Design Pillars</h2>
        <ul>
          <li>Sound as identity — every living thing has a fundamental frequency</li>
          <li>Discipline as power — skill over stats, knowledge IS leveling up</li>
          <li>Impermanence — the monastery is falling; you cannot save all of it</li>
          <li>The sacred ordinary — dawn bells, forge-coal, tea on a stone ledge</li>
        </ul>
      </section>

      <section className="bv-section">
        <h2>Combat</h2>
        <p>
          Positional, tonal, timing-dependent. Read enemy tells, ring bells at
          precise moments to deflect, circle for advantage, break poise to deliver
          deathblows. Seven unique bells — from the humble Calling Bell to the
          paradoxical Void Bell forged from crystallized silence. A poise system,
          resonance meter, and adaptive enemies that learn your patterns.
        </p>
      </section>

      <section className="bv-section">
        <h2>The World</h2>
        <p>
          14 rooms across five tiers of a monastery carved into singing stone.
          The Hush advances on a schedule — rooms drain of color, sound becomes
          reluctant, and consumed monks linger as combat encounters that are acts
          of remembrance, not murder. Deathblows are lullabies.
        </p>
      </section>

      <section className="bv-section">
        <h2>Status</h2>
        <p>
          Phase 1 vertical slice complete and playable. Full combat system,
          echo conversations, four explorable rooms, tutorial enemy and boss
          encounter. Play it in your browser — achievements, save/load, and
          cryptographic proof-of-play included.
        </p>
      </section>

      <footer className="footer">
        <p>
          <Link href="/">← Clawdina</Link>
        </p>
      </footer>
    </main>
  );
}
