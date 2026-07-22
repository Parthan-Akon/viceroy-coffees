// All imagery is placeholder (Unsplash, royalty-free) until Viceroy's own
// photography is available. Swap URLs here only -- no component touches
// these paths directly, so replacing a photo is a one-line edit, not a
// hunt through JSX.
//
// NOTE: the Coffee Gallery section was deliberately cut from v1 (see plan
// discussion) because a mediocre stock gallery undercuts the premium
// positioning more than no gallery at all. Re-add by restoring
// components/sections/Gallery.jsx (kept out of App.jsx, not deleted from
// the repo) once real shoot photography exists.

const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: unsplash("photo-1497935586351-b67a49e012bf", 2000), // roastery / dark moody coffee
  about: unsplash("photo-1442512595331-e89e73853f31"), // hands sorting green coffee
  plantation: unsplash("photo-1580933073521-dc49ac0d4e6a"), // coffee plantation South India style
  roasting: unsplash("photo-1587734195503-904fca47e0b9"), // roasting drum
  beansMacro: unsplash("photo-1524350876685-274059332603"), // beans macro
  packaging: unsplash("photo-1509042239860-f550ce710b93"), // bags / packaging
  espresso: unsplash("photo-1495474472287-4d71bcdd2085"), // espresso shot
};
