import groomPhoto from '../assets/pics/akash.jpeg';
import bridePhoto from '../assets/pics/vaishnavi.jpeg';
import moment1 from '../assets/pics/moment1.jpeg';
import moment2 from '../assets/pics/moment2.jpeg';
import moment3 from '../assets/pics/moment3.jpeg';
import moment4 from '../assets/pics/moment4.jpeg';
import moment5 from '../assets/pics/moment5.jpeg';
import moment6 from '../assets/pics/moment6.jpeg';

export const weddingConfig = {
  couple: {
    groom: "Akash Verma",
    groomRole: "The Groom",
    groomImage: groomPhoto,
    groomParents: "S/o Mr. Nilesh Kumar Verma & Mrs. Bharti Verma",
    groomBio: "Steadfast, warm, and devoted — embarking on the most beautiful chapter with the love of his life.",
    bride: "Vaishnavi Kasera",
    brideRole: "The Bride",
    brideImage: bridePhoto,
    brideParents: "D/o Mr. Madan Gopal & Mrs. Sudha Rani",
    brideBio: "Graceful, vibrant, and kind-hearted — stepping into forever with pure joy, elegance, and love.",
    displayName: "Akash & Vaishnavi"
  },

  story: {
    firstMet: {
      date: "16 March 2025",
      title: "A Glimpse into Our Journey",
      subtitle: "Where Our Story Began",
      description: "Some stories begin with a plan, and some simply unfold. Ours began with two people crossing paths, little knowing that a simple meeting would eventually lead to a lifetime together.\nFrom getting to know each other to sharing countless conversations, moments, dreams and memories, our journey slowly turned into something much more meaningful.\nAnd now, we're excited to begin our next chapter — together, forever."
    },

    engagement: {
      date: "19 April 2026",
      title: "The Proposal"
    }
  },

  moments: [
    {
      id: 1,
      title: "The First Chapter",
      subtitle: "Where it all began",
      image: moment1
    },
    {
      id: 2,
      title: "Quiet Conversations",
      subtitle: "Countless shared smiles",
      image: moment2
    },
    {
      id: 3,
      title: "Rings & Promises",
      subtitle: "A step closer to forever",
      image: moment3
    },
    {
      id: 4,
      title: "Celebrations & Joy",
      subtitle: "Surrounded by laughter",
      image: moment4
    },
    {
      id: 5,
      title: "Stolen Glances",
      subtitle: "Cherished little moments",
      image: moment5
    },
    {
      id: 6,
      title: "Towards Eternity",
      subtitle: "Ready for the big day",
      image: moment6
    }
  ],

  wedding: {
    date: "21 November 2026",

    events: [
      {
        id: "haldi-mehndi",
        title: "Haldi / Mehndi",
        date: "19 Nov 2026",
        time: "2:00 PM Onwards",
        location: "Gulab Greens, Kanpur"
      },
      {
        id: "tilak",
        title: "Tilak",
        date: "21 Nov 2026",
        time: "11:00 AM Onwards",
        location: "Gulab Greens, Kanpur"
      },
      {
        id: "pheras",
        title: "Phere",
        date: "21 Nov 2026",
        time: "2:00 PM Onwards",
        location: "Gulab Greens, Kanpur"
      },
      {
        id: "baarat-varmala",
        title: "Baarat / Varmala",
        date: "21 Nov 2026",
        time: "8:00 PM Onwards",
        location: "Gulab Greens, Kanpur"
      }
    ]
  },

  venue: {
    name: "Gulab Greens",
    address: "Koyla Nagar, Kanpur, Uttar Pradesh, India",
    city: "Kanpur",
    country: "India",
    googleMapsUrl: "https://maps.app.goo.gl/TdZSHumxCUip4NaVA",
    mapEmbedUrl: "https://maps.google.com/maps?q=Gulab+Greens+Kanpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  integrations: {
    googleForms: {
      blessingsUrl: "https://maps.app.goo.gl/TdZSHumxCUip4NaVA"
    },
    googleSheets: {
      sheetUrl: "https://docs.google.com/spreadsheets/d/1yePJoFPp0TiU1Xi6_6-z5VSGA2Tlnc8HR5Yo1w_OVMY/",
      // Paste your deployed Google Apps Script Web App URL below
      // Example: "https://script.google.com/macros/s/AKfycby.../exec"
      rsvpScriptUrl: "https://script.google.com/macros/s/AKfycbyEj-_LzG2aUY6-aw_118coQZJ4uxZETeJQdfKGgNf62wxopadL70D3Xymsio4EuiEEnw/exec"
    }
  },

  audio: {
    enabled: true,
    autoPlay: true,
    mantraVolume: 0.35,      // Low volume for Sacred Ganesh Mantra (0.0 to 1.0)
    bgMusicVolume: 0.25,     // Low volume for soothing background music (0.0 to 1.0)
    mantraTitle: "Sacred Ganesh Mantra",
    bgMusicTitle: "Soothing Wedding Theme"
  }
};

