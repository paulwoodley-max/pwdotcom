/**
 * Centralized site image constants.
 * All URLs point to permanent cloud storage — update here to change site-wide.
 */

// ── Branding ─────────────────────────────────────────────────────────────────
export const LOGO_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/9c0b3580-b8fd-4ab3-98c1-65cd646bf62f.png";

export const PROCOACH_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/d1f99361-9d3d-4834-9c17-39d5d225f091.png";

export const GCA_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/276c0b10-d419-4a0f-ac2d-706191e76f7c.png";

// ── Hero / General ────────────────────────────────────────────────────────────
/** Paul Woodley in modern lobby — used on Home & About hero backgrounds */
export const HERO_BG_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/8aea83ad-07c9-41e6-b305-2b4a87f71be5.png";

/** Paul Woodley coaching / problem section */
export const COACHING_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/1bdd76b6-c8bb-4d7b-ade9-1d3eec766e35.jpg";

/** Paul Woodley and Family — About section on homepage */
export const FAMILY_ABOUT_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/cabd9194-38e0-4a3b-bcb6-e93dd8df9c55.jpg";

// ── Family Journey page ───────────────────────────────────────────────────────
export const FATHERS_DAY_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/d904267d-4084-4dd6-9e80-d91800fe65da.jpg";

export const WEDDING_VENUE_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/115fc465-4f2a-4751-9cf9-4bccfba1e70d.jpg";

// ── About page ───────────────────────────────────────────────────────────────
/** Woodley Rd NW street sign — Faith & Conversion section */
export const WOODLEY_ROAD_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/514126d4-55b5-47b7-979d-08f7dfc8473f.png";

/** MacArthur Study Bible / Faith resource */
export const BIBLE_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/7d95c8a4-1fd9-4776-a18d-1faa52ac2c98.jpg";

/** Paul Woodley wedding ceremony venue — Family & Faith section */
export const WEDDING_CEREMONY_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/7892a6f5-3f80-45a8-a6cb-d410035355be.jpg";

/** Paul Woodley and family dressed up — Family & Faith section */
export const FAMILY_DRESSED_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/d34ea4f0-8d49-4aae-8859-a62d45c5eb51.jpg";

/** Paul Woodley dressed as Elijah — Children's Ministry */
export const ELIJAH_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/9f90e8b0-cd46-46b7-a9f7-22fa988f9ac0.jpg";

/** Paul Woodley dressed as Roman soldier — Children's Ministry */
export const ROMAN_SOLDIER_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/8bf7cf48-c58f-4b97-a010-7c0006bac799.jpg";

/** COVID / Church leadership photo */
export const COVID_LEADERSHIP_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/ca6d4b69-481c-4c60-b54c-a1186c450d1b.jpg";

/** Paul Woodley at the Ark Encounter */
export const ARK_ENCOUNTER_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/d16f6f56-4c39-4c00-b7eb-81e402725f64.png";

/** Paul Woodley at his desk — Coaching section */
export const DESK_URL =
  "https://vibe.filesafe.space/1783385542814852431/assets/79341318-a2f8-45d6-abd9-b39d1da0f8a0.jpg";

// ── Shared fallback handler ───────────────────────────────────────────────────
export const imgFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  target.onerror = null;
  target.style.background = "hsl(var(--muted))";
  target.style.minHeight = "80px";
  target.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'%3E%3Crect width='200' height='120' fill='%23e2e8f0'/%3E%3Ctext x='100' y='65' text-anchor='middle' font-size='11' fill='%2394a3b8'%3EImage unavailable%3C/text%3E%3C/svg%3E";
};
