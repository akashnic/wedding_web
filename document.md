# Akash & Vaishnavi — Bollywood Cinematic Wedding Website

## 1. Website Vision

### Concept

**A Bollywood-style cinematic love story presented as an interactive Indian wedding invitation.**

The website should feel less like a conventional wedding website and more like a **beautiful romantic film** where guests scroll through the story of Akash and Vaishnavi.

The core experience:

> **A LOVE STORY**
> **TWO PEOPLE**
> **ONE JOURNEY**
> **ONE BEAUTIFUL BEGINNING**

The entire website should combine:

* Bollywood cinematic aesthetics
* Indian wedding traditions
* Luxury editorial photography
* Warm romantic atmosphere
* Dramatic movie-style transitions
* Elegant Indian motifs
* Smooth scroll storytelling
* Mobile-first experience
* Config-driven React architecture
* Reusable Tailwind components

---

# 2. Couple Information

All personal information must be stored inside configuration rather than hardcoded inside components.

```js
export const weddingConfig = {
  couple: {
    bride: "Vaishnavi Kasera",
    groom: "Akash Verma",

    displayName: "Akash & Vaishnavi",

    firstMet: "16 March 2025",

    engagement: {
      date: "19 April 2026",
      status: "Engaged"
    },

    wedding: {
      date: "21 November 2026"
    }
  },

  venue: {
    name: "Gulaab Gardens",
    city: "Kanpur",
    country: "India",
    address: "Gulaab Gardens, Kanpur, India"
  }
};
```

---

# 3. UI Style

## Overall Style

### **Bollywood Cinematic × Modern Indian Luxury**

The visual language should resemble:

* Bollywood movie opening credits
* Luxury Indian wedding invitation
* Cinematic wedding photography
* Indian palace/wedding aesthetics
* Editorial fashion photography
* Modern premium web design

Avoid making the interface look like a generic wedding template.

The design should feel **immersive and cinematic**.

---

## Typography

Use two primary font families.

### Display Font

For:

* Couple names
* Chapter titles
* Wedding date
* Hero text
* Major headings

Recommended:

```text
Playfair Display
Cormorant Garamond
Bodoni Moda
```

### UI Font

For:

* Buttons
* Navigation
* Event details
* Descriptions
* Forms

Recommended:

```text
Inter
Manrope
DM Sans
```

Example:

```text
AKASH
      &
VAISHNAVI

A STORY
WORTH TELLING
```

---

# 4. Color Palette

The color system should combine cinematic darkness with Indian wedding warmth.

```js
export const colors = {
  cinematicBlack: "#0B0808",
  deepMaroon: "#3A1118",
  wine: "#641F2A",
  royalRed: "#8B2635",

  antiqueGold: "#C9A45C",
  champagneGold: "#E4C98A",

  ivory: "#FFF8EC",
  warmWhite: "#FFFDF8",

  mutedRose: "#B77B7F",
  softBrown: "#6E574C",

  charcoal: "#1A1515"
};
```

### Primary colors

**Cinematic Black**

`#0B0808`

Used for:

* Hero
* Chapter transitions
* Navigation
* Cinematic overlays

**Antique Gold**

`#C9A45C`

Used for:

* Borders
* Icons
* Chapter numbers
* Decorative lines
* Buttons

**Ivory**

`#FFF8EC`

Used for:

* Story sections
* Event sections
* Light backgrounds

**Deep Maroon**

`#3A1118`

Used for:

* Indian wedding accents
* Event cards
* Decorative sections

---

# 5. Indian Visual Motifs

Use Indian design elements subtly rather than overwhelming the screen.

Recommended motifs:

* Lotus
* Marigold flowers
* Mandala
* Paisley
* Mehendi patterns
* Jharokha-inspired frames
* Mughal arches
* Diya
* Wedding bells
* Floral borders
* Gold ornamental lines
* Subtle rangoli patterns

These should appear primarily as:

* Background textures
* Section dividers
* Corner decorations
* Loading animations
* Chapter transitions
* Event icons

---

# 6. Website Structure

The website should be divided into cinematic chapters.

```text
01 — Opening
02 — How We Met
03 — The Proposal
04 — The Families
05 — The Wedding
06 — Forever
```

The five major story chapters requested are:

```text
Chapter 01 — How We Met
Chapter 02 — The Proposal
Chapter 03 — The Families
Chapter 04 — The Wedding
Chapter 05 — Forever
```

---

# 7. Chapter 01 — How We Met

## Story

```text
16 March 2025
```

Title:

> **Chapter 01 — How We Met**

Subtitle:

> Every beautiful story has a beginning.

The section should introduce the couple's first meeting.

### Visual

Use:

* Cinematic couple photograph
* Film grain
* Soft vignette
* Floating petals
* Warm golden light
* Slow camera movement effect

### Animation

As the visitor scrolls:

1. Black screen
2. Date appears
3. Film grain fades in
4. Photograph slowly reveals
5. Story text fades upward
6. Decorative gold line draws itself

---

# 8. Chapter 02 — The Proposal

## Event

```text
19 April 2026
```

Title:

> **Chapter 02 — The Proposal**

Subtitle:

> And then, forever became a little more real.

Display:

```text
19
APRIL
2026
```

Use an elegant cinematic photograph or engagement gallery.

### Animation

The engagement date should appear like a Bollywood movie title card.

Example:

```text
A NEW CHAPTER BEGINS

19 • 04 • 2026

ENGAGED
```

Use:

* Golden particles
* Lens flare
* Slow zoom
* Light leaks
* Soft rose petals

---

# 9. Chapter 03 — The Families

Title:

> **Chapter 03 — The Families**

Subtitle:

> Two families. Two traditions. One celebration.

This section introduces both families.

Recommended layout:

```text
              OUR FAMILIES

       ┌────────────┐   ┌────────────┐
       │   FAMILY   │   │   FAMILY   │
       │     01     │   │     02     │
       └────────────┘   └────────────┘

                ↓

          TWO FAMILIES

                +

             ONE LOVE
```

Allow configuration for:

```js
families: {
  bride: {
    title: "Vaishnavi's Family",
    members: []
  },

  groom: {
    title: "Akash's Family",
    members: []
  }
}
```

This allows names to be added later without changing the React component.

---

# 10. Chapter 04 — The Wedding

Title:

> **Chapter 04 — The Wedding**

Subtitle:

> The day we've been waiting for.

Wedding date:

```text
21 NOVEMBER 2026
```

The wedding chapter should contain the complete wedding event timeline.

---

# 11. Wedding Events

## Haldi & Sangeet

```js
{
  id: "haldi-sangeet",
  title: "Haldi & Sangeet",
  date: "16 November 2026",
  icon: "flower",
  description: "A celebration filled with colour, music and laughter."
}
```

---

## Wedding / Pheras

```js
{
  id: "wedding",
  title: "Wedding & Pheras",
  date: "21 November 2026",
  time: "12:00 PM",
  location: "Gulaab Gardens",
  description: "The beginning of our forever."
}
```

---

## Evening Reception

```js
{
  id: "reception",
  title: "Reception",
  date: "21 November 2026",
  time: "7:00 PM",
  location: "Gulaab Gardens",
  description: "An evening of celebration, music and togetherness."
}
```

---

# 12. Cinematic Wedding Timeline

Instead of standard cards, use a movie-style vertical timeline.

```text
                    ✦

              16 NOVEMBER
             HALDI & SANGEET

                    │
                    │
                    ▼

              21 NOVEMBER
             12:00 PM

          WEDDING & PHERAS

                    │
                    │
                    ▼

              21 NOVEMBER
              7:00 PM

               RECEPTION

                    ✦
```

Each event can animate when it enters the viewport.

---

# 13. Countdown

The countdown should be one of the main visual elements.

Title:

> **THE COUNTDOWN BEGINS**

Countdown:

```text
      089       14       42       31

      DAYS     HOURS    MINUTES   SECONDS
```

Configuration:

```js
countdown: {
  targetDate: "2026-11-21T12:00:00+05:30",
  title: "The Countdown Begins"
}
```

The countdown component should automatically calculate:

* Days
* Hours
* Minutes
* Seconds

No countdown values should be hardcoded.

---

# 14. Opening Animation

The opening should feel like the beginning of a Bollywood movie.

### Scene 1

Black screen.

A small golden diya appears.

```text
🪔
```

The flame gently flickers.

---

### Scene 2

A subtle Indian ornamental pattern appears.

Text:

```text
A LOVE STORY
```

---

### Scene 3

The text changes:

```text
BEGINS WITH
TWO PEOPLE
```

---

### Scene 4

Couple names appear:

```text
AKASH

        &

VAISHNAVI
```

---

### Scene 5

Wedding date:

```text
21 • 11 • 2026
```

---

### Scene 6

CTA:

```text
ENTER OUR STORY  →
```

On click, the cinematic intro transitions into the main website.

---

# 15. Scroll Animations

Use scroll-triggered animation throughout the website.

Recommended effects:

### Fade Up

```text
opacity: 0 → 1
transform: translateY(40px) → 0
```

### Cinematic Zoom

Images slowly scale:

```text
scale(1.08) → scale(1)
```

### Parallax

Background photography moves slower than foreground content.

### Text Reveal

Words appear progressively.

### Gold Line Animation

Decorative lines draw themselves during scrolling.

### Petal Animation

Occasional floating:

* Rose petals
* Marigold petals
* Gold particles

Keep these subtle.

---

# 16. Chapter Transition

Each chapter should have a cinematic transition.

Example:

```text
          ─────────

        CHAPTER 02

       THE PROPOSAL

          ─────────
```

Use a dark full-screen transition.

Animation:

```text
black screen
     ↓
gold line
     ↓
chapter number
     ↓
chapter title
     ↓
background image
     ↓
next section
```

---

# 17. Overlay System

Create a reusable overlay component.

```jsx
<CinematicOverlay
  title="Chapter 02"
  subtitle="The Proposal"
/>
```

Possible overlays:

* Film grain
* Vignette
* Light leaks
* Golden particles
* Gradient
* Indian pattern
* Decorative borders

These should be controlled through configuration.

```js
effects: {
  filmGrain: true,
  vignette: true,
  particles: true,
  petals: true,
  parallax: true
}
```

---

# 18. Venue Section

## Venue

```text
GULAAB GARDENS

Kanpur, India
```

Display:

```text
21 NOVEMBER 2026

WEDDING
12:00 PM

RECEPTION
7:00 PM
```

---

## Map

Create a reusable map component.

```jsx
<VenueMap
  venue={weddingConfig.venue}
/>
```

Configuration:

```js
venue: {
  name: "Gulaab Gardens",
  city: "Kanpur",
  country: "India",

  googleMapsUrl: "CONFIGURE_GOOGLE_MAPS_URL_HERE"
}
```

Buttons:

```text
OPEN IN GOOGLE MAPS
GET DIRECTIONS
```

The actual Google Maps URL should live in configuration, not inside the component.

---

# 19. RSVP Section

Title:

> **Will You Join Us?**

Subtitle:

> Your presence will make our celebration even more special.

Fields:

```text
Name
Phone / Email
Number of Guests
Which events will you attend?
Message
```

Events:

```text
☐ Haldi & Sangeet
☐ Wedding
☐ Reception
```

Configuration:

```js
rsvp: {
  enabled: true,

  fields: [
    "name",
    "contact",
    "guestCount",
    "events",
    "message"
  ],

  googleFormUrl: ""
}
```

---

# 20. Google Forms Integration

For a simple deployment, use Google Forms as the RSVP / blessings backend.

Configuration:

```js
integrations: {
  googleForms: {
    rsvpUrl: "",
    blessingsUrl: ""
  }
}
```

The React application should only need to know the URL.

This means the Google Form can be replaced later without changing the component.

---

# 21. Blessings / Guestbook

Create a dedicated section.

Title:

> **Leave Us Your Blessings**

Subtitle:

> Before you leave, write us a little something we'll remember forever.

Form:

```text
Your Name

Your Blessing

[ SEND YOUR BLESSINGS ]
```

After submission:

```text
Thank you for being part of our story. ❤️
```

Google Forms can be used to collect the responses.

---

# 22. Gallery

Gallery should feel like a cinematic film reel.

Sections:

```text
OUR FIRST CHAPTER
ENGAGEMENT
THE JOURNEY
PRE-WEDDING
THE WEDDING
```

Use configuration:

```js
gallery: [
  {
    category: "first-meeting",
    title: "The Beginning",
    images: []
  },

  {
    category: "engagement",
    title: "A New Chapter",
    images: []
  },

  {
    category: "wedding",
    title: "Forever",
    images: []
  }
]
```

Images should support:

* Lazy loading
* Lightbox
* Swipe on mobile
* Fullscreen view
* Smooth transitions

---

# 23. Chapter 05 — Forever

This should be the emotional finale.

Title:

> **Chapter 05 — Forever**

Large cinematic text:

```text
AND THIS IS
ONLY THE BEGINNING.
```

Then:

```text
AKASH
&
VAISHNAVI

21 • 11 • 2026
```

Final message:

> Thank you for being a part of our story.

Then show:

```text
WITH LOVE,
AKASH & VAISHNAVI
```

---

# 24. Final Screen

The final screen should feel like movie credits.

```text
                         THE END

                    OF THIS CHAPTER

                         BUT...

                    NOT OUR STORY.

                 AKASH & VAISHNAVI

                    21 • 11 • 2026

                       ❤️
```

Then small footer:

```text
Made with love.
```

---

# 25. Recommended React Architecture

Use a component-based architecture.

```text
src/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── PageContainer.jsx
│   │   └── Footer.jsx
│   │
│   ├── cinematic/
│   │   ├── OpeningSequence.jsx
│   │   ├── ChapterIntro.jsx
│   │   ├── FilmGrain.jsx
│   │   ├── CinematicOverlay.jsx
│   │   ├── LightLeak.jsx
│   │   └── ParticleEffect.jsx
│   │
│   ├── chapters/
│   │   ├── HowWeMet.jsx
│   │   ├── Proposal.jsx
│   │   ├── Families.jsx
│   │   ├── Wedding.jsx
│   │   └── Forever.jsx
│   │
│   ├── wedding/
│   │   ├── Countdown.jsx
│   │   ├── WeddingTimeline.jsx
│   │   ├── EventCard.jsx
│   │   ├── Venue.jsx
│   │   ├── VenueMap.jsx
│   │   └── DressCode.jsx
│   │
│   ├── gallery/
│   │   ├── Gallery.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── Lightbox.jsx
│   │
│   ├── rsvp/
│   │   ├── RSVP.jsx
│   │   ├── RSVPForm.jsx
│   │   └── Blessings.jsx
│   │
│   └── effects/
│       ├── ScrollReveal.jsx
│       ├── ParallaxImage.jsx
│       ├── FloatingPetals.jsx
│       └── GoldParticles.jsx
│
├── config/
│   ├── wedding.config.js
│   ├── events.config.js
│   ├── gallery.config.js
│   ├── theme.config.js
│   └── integrations.config.js
│
├── pages/
│   └── WeddingHome.jsx
│
├── assets/
│   ├── images/
│   ├── videos/
│   ├── music/
│   ├── patterns/
│   └── icons/
│
├── hooks/
│   ├── useCountdown.js
│   ├── useScrollProgress.js
│   └── useMediaQuery.js
│
├── utils/
│   ├── date.js
│   └── animations.js
│
├── App.jsx
└── main.jsx
```

---

# 26. Configuration-First Architecture

The most important development rule:

> **Never hardcode wedding information inside UI components.**

Everything should come from configuration.

Example:

```js
export const weddingConfig = {
  couple: {
    groom: "Akash Verma",
    bride: "Vaishnavi Kasera"
  },

  story: {
    firstMet: {
      date: "16 March 2025",
      title: "How We Met"
    },

    engagement: {
      date: "19 April 2026",
      title: "The Proposal"
    }
  },

  wedding: {
    date: "21 November 2026"
  },

  venue: {
    name: "Gulaab Gardens",
    address: "Gulaab Gardens, Kanpur, India"
  }
};
```

Then:

```jsx
<HowWeMet
  data={weddingConfig.story.firstMet}
/>
```

and:

```jsx
<Proposal
  data={weddingConfig.story.engagement}
/>
```

This makes future changes extremely easy.

---

# 27. Event Configuration

All events should be data-driven.

```js
export const events = [
  {
    id: "haldi-sangeet",
    title: "Haldi & Sangeet",
    date: "16 November 2026",
    time: "",
    location: "Gulaab Gardens",
    icon: "flower",
    theme: "colorful"
  },

  {
    id: "wedding",
    title: "Wedding & Pheras",
    date: "21 November 2026",
    time: "12:00 PM",
    location: "Gulaab Gardens",
    icon: "mandap",
    theme: "royal"
  },

  {
    id: "reception",
    title: "Reception",
    date: "21 November 2026",
    time: "7:00 PM",
    location: "Gulaab Gardens",
    icon: "sparkle",
    theme: "cinematic"
  }
];
```

---

# 28. Theme Configuration

Create a centralized theme.

```js
export const themeConfig = {
  colors: {
    background: "#0B0808",
    primary: "#C9A45C",
    secondary: "#3A1118",
    surface: "#FFF8EC",
    text: "#FFFDF8"
  },

  fonts: {
    display: "Playfair Display",
    body: "Inter"
  },

  radius: {
    card: "1rem",
    button: "9999px"
  },

  animation: {
    duration: 800,
    easing: "ease-out"
  }
};
```

This allows the entire visual identity to be changed from one place.

---

# 29. Animation Configuration

```js
export const animationConfig = {
  opening: {
    duration: 4000,
    diya: true,
    filmGrain: true,
    particles: true
  },

  scroll: {
    reveal: true,
    parallax: true,
    imageZoom: true,
    chapterTransitions: true
  },

  wedding: {
    petals: true,
    goldParticles: true,
    lightLeaks: true
  }
};
```

---

# 30. Mobile Experience

The website must be designed **mobile-first**.

Important requirements:

* Full-screen hero
* Large readable couple names
* Touch-friendly buttons
* Swipeable gallery
* Vertical event timeline
* Mobile RSVP form
* Google Maps button
* No hover-dependent interactions
* Optimized image sizes
* Reduced particle effects on low-powered devices

Mobile opening:

```text
🪔

A LOVE STORY

AKASH
&
VAISHNAVI

21 NOVEMBER 2026

[ ENTER OUR STORY ]
```

---

# 31. Mobile Navigation

Use a cinematic menu.

Collapsed:

```text
☰
```

Opening the menu:

```text
OUR STORY

01  HOW WE MET

02  THE PROPOSAL

03  THE FAMILIES

04  THE WEDDING

05  FOREVER

RSVP
```

The menu should animate from a full-screen dark overlay.

---

# 32. Music

Optional background music can be supported.

Configuration:

```js
music: {
  enabled: true,
  autoplay: false,
  source: "/music/wedding-theme.mp3"
}
```

Do **not** force autoplay with sound.

Instead:

```text
♪ PLAY OUR STORY
```

A small floating music button can remain in the corner.

---

# 33. Cinematic Effects

Recommended effects:

### Film Grain

Very subtle animated noise.

### Vignette

Dark edges around cinematic images.

### Light Leak

Warm golden transition between chapters.

### Golden Dust

Small particles around chapter headings.

### Petals

Very subtle marigold/rose petals.

### Lens Flare

Used only for important transitions.

### Parallax

Slow movement of background photography.

### Image Zoom

Slow cinematic Ken Burns effect.

---

# 34. Performance Rules

Because the website will contain many photographs and animations:

* Use WebP/AVIF images
* Lazy-load gallery images
* Optimize hero image
* Avoid huge background videos
* Use CSS animations where possible
* Reduce particles on mobile
* Avoid excessive blur filters
* Use GPU-friendly transforms
* Do not animate expensive layout properties
* Load fonts efficiently

The cinematic feeling should never make the website slow.

---

# 35. Suggested Technology Stack

```text
React
Vite
Tailwind CSS
Framer Motion
Lucide React
React Router
Google Forms
Google Maps
```

Optional:

```text
Lenis
```

for smooth scrolling.

---

# 36. Suggested Main Page Flow

```text
OPEN WEBSITE
     │
     ▼
CINEMATIC OPENING
     │
     ▼
AKASH & VAISHNAVI
     │
     ▼
WEDDING DATE
     │
     ▼
CHAPTER 01
HOW WE MET
     │
     ▼
CHAPTER 02
THE PROPOSAL
     │
     ▼
CHAPTER 03
THE FAMILIES
     │
     ▼
COUNTDOWN
     │
     ▼
CHAPTER 04
THE WEDDING
     │
     ├── HALDI & SANGEET
     │   16 NOVEMBER
     │
     ├── WEDDING & PHERAS
     │   21 NOVEMBER · 12 PM
     │
     └── RECEPTION
         21 NOVEMBER · 7 PM
     │
     ▼
VENUE
GULAAB GARDENS
KANPUR
     │
     ▼
PHOTO GALLERY
     │
     ▼
RSVP
     │
     ▼
BLESSINGS
     │
     ▼
CHAPTER 05
FOREVER
     │
     ▼
FINAL CINEMATIC SCREEN
```

---

# 37. Final Design Direction

The final website should feel like:

> **A Bollywood love story transformed into an interactive Indian wedding invitation.**

Not:

> A normal wedding website with cards and forms.

The emotional progression should be:

**Mystery → Romance → Memories → Family → Celebration → Wedding → Forever**

The visual progression should be:

**Dark cinematic opening → warm romantic story → colorful Indian celebration → grand wedding → emotional finale**

The most important principle is that **Akash and Vaishnavi's story should remain the hero**. Indian motifs, animations, particles and cinematic effects should enhance the story rather than compete with it.

---

# 38. Core Wedding Configuration

The initial configuration for the website is:

```js
export const weddingConfig = {
  couple: {
    groom: "Akash Verma",
    bride: "Vaishnavi Kasera",
    displayName: "Akash & Vaishnavi"
  },

  story: {
    firstMet: {
      date: "16 March 2025",
      title: "How We Met"
    },

    engagement: {
      date: "19 April 2026",
      title: "The Proposal"
    }
  },

  wedding: {
    date: "21 November 2026",

    events: [
      {
        title: "Haldi & Sangeet",
        date: "16 November 2026"
      },

      {
        title: "Wedding & Pheras",
        date: "21 November 2026",
        time: "12:00 PM"
      },

      {
        title: "Reception",
        date: "21 November 2026",
        time: "7:00 PM"
      }
    ]
  },

  venue: {
    name: "Gulaab Gardens",
    address: "Gulaab Gardens, Kanpur, India",
    city: "Kanpur",
    country: "India",
    googleMapsUrl: ""
  },

  integrations: {
    googleForms: {
      rsvpUrl: "",
      blessingsUrl: ""
    }
  }
};
```

This configuration becomes the **single source of truth** for the entire wedding website. Changing a name, date, event, venue, Google Form, image or story detail should require changing configuration rather than modifying individual React components.
