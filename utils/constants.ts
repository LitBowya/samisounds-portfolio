export const constants = {
  homepage: {
    greetings: "Hi There",
    nameOfUser: "SAMI SOUNDS Here",
    welcomeMessage: "Welcome To My World Of Sounds",
  },

  drumPad: [
    {
      url: "#home",
      key: "1",
      sound: "/sounds/kick.mp3",
      name: "Home",
      soundName: "kick",
      image: "",
      color: "#ff1818",
    }, // Kick Drum (Bright Red)

    {
      url: "#about",
      key: "2",
      sound: "/sounds/snare.mp3",
      name: "About Me",
      soundName: "Snare",

      image: "",
      color: "#b59400",
    }, // Snare Drum (Yellow)

    {
      url: "#my-works",
      key: "3",
      sound: "/sounds/hihat.mp3",
      name: "My Works",
      soundName: "Hi-Hat Open",
      image: "",
      color: "#2aca3c",
    }, // Closed Hi-Hat (Green)
    {
      url: "",
      key: "4",
      sound: "/sounds/hihat1.mp3",
      name: "",
      soundName: "Hi-Hat Closed",
      image: "",
      color: "#024ab3",
    }, // Open Hi-Hat (Blue)

    {
      url: "",
      key: "5",
      sound: "/sounds/tom.mp3",
      name: "",
      soundName: "Low Tom",

      image: "",
      color: "#60109f",
    }, // Low Tom (Purple)

    {
      url: "",
      key: "6",
      sound: "/sounds/tom1.mp3",
      name: "",
      soundName: "Mid Tom",

      image: "",
      color: "#fb9100",
    }, // Mid Tom (Orange)

    {
      url: "",
      key: "7",
      sound: "/sounds/cymbal.mp3",
      name: "",
      soundName: "Cymbal",

      image: "",
      color: "#087e66",
    }, // High Tom (Aqua)

    {
      url: "#contact-us",
      key: "8",
      sound: "/sounds/clap.mp3",
      name: "",
      soundName: "Clap",

      image: "",
      color: "#bf0258",
    }, // Clap (Hot Pink)

    {
      url: "",
      key: "9",
      sound: "/sounds/cowbell.mp3",
      name: "",
      soundName: "Cowbell",

      image: "",
      color: "#9c009c",
    }, // Cowbell (Violet)
  ],

  about: {
    sectionLabel: "About Me",
    sectionTitle: "Crafting Sonic Excellence",
    sectionSubtitle:
      "With over a decade of experience in audio engineering and music production",

    mainHeading: "Creating Memorable Sound Experiences",
    paragraphOne:
      "I am a dedicated sound engineer and music producer passionate about transforming artistic visions into auditory reality. My expertise spans from live sound reinforcement to studio production, always with an emphasis on clarity, emotion, and technical excellence.",
    paragraphTwo:
      "I believe that great sound is the foundation of memorable experiences, whether it is a intimate studio recording or a large-scale live performance. My approach combines technical precision with creative intuition to deliver exceptional results.",

    highlights: [
      { icon: "Award", text: "Grammy Nominated" },
      { icon: "Users", text: "200+ Projects" },
    ],

    stats: [
      { label: "Projects Completed", value: 250 },
      { label: "Awards Received", value: 15 },
      { label: "Satisfied Clients", value: 120 },
      { label: "Years Experience", value: 10 },
    ],

    specializationTitle: "My Specializations",

    skills: [
      {
        title: "Music Production",
        icon: "Music",
        description:
          "Full-service music production from concept to final master, working across genres to create compelling sonic experiences.",
        list: ["Song Arrangement", "Sound Design", "Beat Making"],
      },
      {
        title: "Live Recording",
        icon: "Mic",
        description:
          "Professional recording services capturing performances with pristine audio quality and artistic integrity.",
        list: ["Studio Sessions", "Location Recording", "Multi-track Capture"],
      },
      {
        title: "Mixing & Mastering",
        icon: "Headphones",
        description:
          "Precision audio engineering to balance, enhance, and polish tracks for commercial release and distribution.",
        list: ["Audio Mixing", "Mastering", "Audio Restoration"],
      },
    ],
  },

  contact: {
    sectionLabel: "Contact Us",
    sectionTitle: "Let’s Create Something Together",
    sectionSubtitle:
      "Have a project in mind, need professional mixing or production, or simply want to collaborate? Get in touch and let’s turn your ideas into reality. Whether it’s an album, a film score, or a live session — we’d love to hear from you.",

    formFields: [
      {
        id: "name",
        label: "Your Name",
        type: "text",
        placeholder: "Enter your full name",
        icon: "User",
      },
      {
        id: "email",
        label: "Your Email",
        type: "email",
        placeholder: "Enter your email",
        icon: "Mail",
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Write your message here...",
        rows: 6,
        icon: "MessageSquare",
      },
    ],

    submitButton: {
      text: "Send Message",
      icon: "Send",
    },
  },

  myWorks: {
    sectionLabel: "My Works",
    sectionTitle: "Shaping Sounds Into Stories",
    sectionSubtitle:
      "From live recordings and studio sessions to mixing, mastering, and original compositions, my work spans diverse projects. Each piece is crafted to bring out clarity, depth, and emotion—whether it's a track for an artist, a film score, or a custom beat.",

    services: [
      {
        title: "Mixing & Mastering",
        description:
          "Professional audio post-production services to polish your tracks to perfection. From balancing levels to applying the final touches for commercial release.",
        icon: "Headphones",
        color: "blue",
      },
      {
        title: "Music Production",
        description:
          "Full-service music production from concept to final master. Specializing in electronic, hip-hop, and acoustic genres with a focus on emotional impact.",
        icon: "Music2",
        color: "green",
      },
      {
        title: "Vocal Recording",
        description:
          "Professional vocal recording sessions in a treated studio environment. Capture pristine vocals with expert guidance and high-end equipment.",
        icon: "Mic",
        color: "red",
      },
      {
        title: "Sound Design",
        description:
          "Custom sound design for media projects, films, and games. Create unique sonic identities and immersive audio experiences.",
        icon: "Album",
        color: "purple",
      },
    ],

    featuredProjects: [
      {
        title: "Midnight Vibes Album",
        subtitle: "Full Production & Mixing",
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Horizon Film Score",
        subtitle: "Original Composition",
        image:
          "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Live Session: Jazz Quartet",
        subtitle: "Recording & Mixing",
        image:
          "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=1170&q=80",
      },
    ],

    testimonials: [
      {
        name: "Michael Rodriguez",
        role: "Singer-Songwriter",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80",
        quote:
          "The production quality exceeded my expectations. They truly understood my vision and brought it to life with incredible attention to detail.",
      },
      {
        name: "Sarah Johnson",
        role: "Film Director",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=688&q=80",
        quote:
          "The score completely transformed my film. The emotional depth and sonic texture added layers to the storytelling I didn't even know were possible.",
      },
    ],
  },
};
