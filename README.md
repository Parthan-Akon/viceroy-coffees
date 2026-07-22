# Viceroy Coffees -- Marketing Site

## Setup
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/

## Notes for whoever picks this up next
- All placeholder imagery lives in `src/constants/images.js` -- swap URLs
  there, not in components.
- The Coffee Gallery section was cut from v1 deliberately (stock photos
  would undercut the premium positioning). Build a Gallery.jsx under
  components/sections and wire it into App.jsx once real photography exists.
- Logo (`src/assets/logo/viceroy-logo.png`) is a 528px raster extracted
  from the provided file, not true vector art. It's used at modest sizes
  throughout (hero badge, nav, footer). Get a higher-res export or true
  SVG before scaling it larger anywhere -- it will visibly soften.
- Primary conversion action across the site is "Request a Sample" --
  keep this consistent if adding new CTAs.
