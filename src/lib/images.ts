/** Centralized site image constants. */

const ASSET_BASE = "https://6064acd7.pwdotcom.pages.dev/images";

export const LOGO_URL = ASSET_BASE + "/paul-woodley-logo.png";
export const PROCOACH_URL = ASSET_BASE + "/procoach.png";
export const GCA_URL = ASSET_BASE + "/global-coaches.png";
export const HERO_BG_URL = ASSET_BASE + "/paul-lobby.png";
export const COACHING_URL = ASSET_BASE + "/paul-coaching.jpg";
export const DESK_URL = ASSET_BASE + "/paul-desk.jpg";
export const BRIANNA_AI_URL = ASSET_BASE + "/brianna-ai.png";

// Existing assets not yet migrated from the original site
export const FAMILY_ABOUT_URL = "https://vibe.filesafe.space/1783385542814852431/assets/cabd9194-38e0-4a3b-bcb6-e93dd8df9c55.jpg";
export const FATHERS_DAY_URL = "https://vibe.filesafe.space/1783385542814852431/assets/d904267d-4084-4dd6-9e80-d91800fe65da.jpg";
export const WEDDING_VENUE_URL = "https://vibe.filesafe.space/1783385542814852431/assets/115fc465-4f2a-4751-9cf9-4bccfba1e70d.jpg";
export const WOODLEY_ROAD_URL = "https://vibe.filesafe.space/1783385542814852431/assets/514126d4-55b5-47b7-979d-08f7dfc8473f.png";
export const BIBLE_URL = "https://vibe.filesafe.space/1783385542814852431/assets/7d95c8a4-1fd9-4776-a18d-1faa52ac2c98.jpg";
export const WEDDING_CEREMONY_URL = "https://vibe.filesafe.space/1783385542814852431/assets/7892a6f5-3f80-45a8-a6cb-d410035355be.jpg";
export const FAMILY_DRESSED_URL = "https://vibe.filesafe.space/1783385542814852431/assets/d34ea4f0-8d49-4aae-8859-a62d45c5eb51.jpg";
export const ELIJAH_URL = "https://vibe.filesafe.space/1783385542814852431/assets/9f90e8b0-cd46-46b7-a9f7-22fa988f9ac0.jpg";
export const ROMAN_SOLDIER_URL = "https://vibe.filesafe.space/1783385542814852431/assets/8bf7cf48-c58f-4b97-a010-7c0006bac799.jpg";
export const COVID_LEADERSHIP_URL = "https://vibe.filesafe.space/1783385542814852431/assets/ca6d4b69-481c-4c60-b54c-a1186c450d1b.jpg";
export const ARK_ENCOUNTER_URL = "https://vibe.filesafe.space/1783385542814852431/assets/d16f6f56-4c39-4c00-b7eb-81e402725f64.png";

export const imgFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  target.onerror = null;
  target.style.background = "hsl(var(--muted))";
  target.style.minHeight = "80px";
  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='120' viewBox='0 0 200 120'%3E%3Crect width='200' height='120' fill='%23e2e8f0'/%3E%3Ctext x='100' y='65' text-anchor='middle' font-size='11' fill='%2394a3b8'%3EImage unavailable%3C/text%3E%3C/svg%3E";
};
