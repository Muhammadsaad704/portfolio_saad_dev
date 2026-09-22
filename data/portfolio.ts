export interface ExperienceItem {
  period: string;
  isCurrent?: boolean;
  location: string;
  company: string;
  role: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  footnote: string;
  playStoreUrl?: string;
}

export interface StackItem {
  category: string;
  techs: string;
}

export interface CertificationItem {
  title: string;
  verifyUrl?: string;
  date?: string;
}

export interface EducationItem {
  degree: string;
  period: string;
  grade?: string;
}

export const portfolioData = {
  name: "Muhammad Saad Shafique",
  shortName: "saad shafique",
  title: "ANDROID APP DEVELOPER & MOBILE ENGINEER",
  headlinePre: "I build fluid",
  headlineMain: "Android",
  headlineAccent: "apps.",
  bio: "Android Developer with 3+ years of experience building and deploying high-performance mobile applications. Specialized in Kotlin, Jetpack Compose, MVVM, and Clean Architecture, with proven expertise in Firebase, REST APIs, Google Maps SDK, and AdMob.",
  email: "muhammadsaadshafique6@gmail.com",
  phone: "+92 303 2224474",
  location: "Lahore, Pakistan",
  github: "https://github.com/Muhammadsaad704",
  linkedin: "https://linkedin.com/in/muhammad-saad-shafique-1b4836283",
  statusText: "AVAILABLE FOR ANDROID ROLES & PROJECTS",

  terminalCommands: [
    "./gradlew assembleRelease",
    "adb install -r app-release.apk",
    "git push origin feature/jetpack-compose-ui",
    "bundletool build-apks --bundle=app-release.aab",
    "fastlane supply --aab app-release.aab --track production",
    "adb logcat | grep -i 'AndroidRuntime'"
  ],

  marqueeItems: [
    "Kotlin",
    "Jetpack Compose",
    "Android SDK",
    "Clean Architecture",
    "MVVM",
    "Coroutines & Flow",
    "Hilt / Koin",
    "Room Database",
    "Retrofit & REST",
    "Firebase & FCM",
    "Google Maps SDK",
    "AdMob Monetization",
    "Google Play Store"
  ],

  stats: [
    { value: 3, suffix: "+", label: "YEARS EXPERIENCE" },
    { value: 8, suffix: "+", label: "APPS SHIPPED TO PLAY STORE" },
    { value: 99, suffix: ".9%", label: "CRASH-FREE SESSIONS" },
    { value: 100, suffix: "%", label: "KOTLIN & COMPOSE FIRST" }
  ],

  experiences: [
    {
      period: "JUN 2026 -",
      isCurrent: true,
      location: "Lahore, Pakistan",
      company: "Terafort Pvt. Ltd",
      role: "MID ANDROID DEVELOPER",
      bullets: [
        "Developing modern Android applications using **Kotlin and Jetpack Compose** with scalable architecture (**MVVM + Clean Architecture**).",
        "Leveraging AI-powered tools (**Codex, Claude**, and code assistants) to accelerate development, improve code quality, and generate optimized solutions.",
        "Integrating **REST APIs, Firebase services**, and third-party SDKs into production-level applications.",
        "Designing responsive and high-performance **UI/UX** with focus on smooth 60fps user experiences across device form factors.",
        "Collaborating with cross-functional teams to rapidly deliver features using AI-assisted development workflows.",
        "Improving development speed and efficiency by utilizing AI tools for debugging, code generation, and architecture design decisions."
      ],
      tags: ["Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "Firebase", "REST APIs", "AI-Assisted Dev"]
    },
    {
      period: "APR 2025 -",
      isCurrent: false,
      location: "MAY 2026\nMultan, Pakistan",
      company: "Top Edge Technologies",
      role: "MID ANDROID DEVELOPER",
      bullets: [
        "Developed production-grade Android applications using **Jetpack Compose and MVVM** architecture, serving thousands of active users.",
        "Implemented advanced **AdMob ad logic** with intelligent display control, improving monetization efficiency and user retention.",
        "Integrated location-based features including **real-time GPS tracking**, speed calculation, and nearby places discovery via **Google Maps SDK**.",
        "Collaborated closely with UI/UX designers and marketing teams to deliver seamless, polished user experiences.",
        "Optimized app performance through **profiling, memory management, and code refactoring** — reducing crash rates significantly."
      ],
      tags: ["Jetpack Compose", "AdMob", "Google Maps SDK", "GPS Tracking", "Performance Profiling", "Memory Optimization"]
    },
    {
      period: "JUN 2023 -",
      isCurrent: false,
      location: "DEC 2024\nMultan, Pakistan",
      company: "Appsqueeze Technologies (Pvt. Ltd.)",
      role: "JOINER ANDROID DEVELOPER",
      bullets: [
        "Developed and maintained multiple Android applications using **Android SDK, Kotlin**, and modern Jetpack libraries.",
        "Managed the complete app lifecycle from development and testing through **Google Play Store deployment**.",
        "Focused on performance optimization and app stability, achieving consistently high Play Store ratings and positive user reviews."
      ],
      tags: ["Android SDK", "Kotlin", "Jetpack Libraries", "Play Store Deployment", "App Lifecycle", "Bug Fixing"]
    }
  ],

  projects: [
    {
      id: "01",
      eyebrow: "GOOGLE PLAY · PRODUCTION",
      title: "Funny Prank Sound App",
      description: "Feature-rich prank sound board app with AdMob monetization, custom audio playback engine, low-latency sound triggers, and high engagement.",
      footnote: "Custom audio engine & AdMob monetization",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.entretenimiento.funny.voice.prank.sounds"
    },
    {
      id: "02",
      eyebrow: "GOOGLE PLAY · PRODUCTION",
      title: "Route Planner & GPS Navigation",
      description: "GPS-powered navigation app featuring turn-by-turn route planning, live speed tracking, and nearby places discovery via Google Maps SDK.",
      footnote: "Real-time GPS tracking & Google Maps SDK",
      playStoreUrl: "https://play.google.com/store/apps/details?id=gpsnavigation.routeplanner.routefinder.tet.app"
    },
    {
      id: "03",
      eyebrow: "GOOGLE PLAY · PRODUCTION",
      title: "Language & Voice Translator",
      description: "Multi-language translator with real-time speech-to-text, audio translation supporting 50+ languages, and camera OCR text scanning.",
      footnote: "Real-time audio & text translation in 50+ languages",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.english.translate.to.all.languages.free.audio.translation"
    },
    {
      id: "04",
      eyebrow: "GOOGLE PLAY · PRODUCTION",
      title: "Phone Cleaner & Optimizer",
      description: "Storage optimization tool with junk file cleanup, RAM memory booster, battery saver algorithms, and internal storage analyzer.",
      footnote: "Storage analyzer & memory optimization",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.phonecleaner.storagecleaner.junk.cleanup"
    },
    {
      id: "05",
      eyebrow: "UTILITY APP · PRODUCTION",
      title: "Insta Media Downloader",
      description: "High-speed media downloader app supporting reels, photos, and videos with background download manager, built with Clean Architecture & MVVM.",
      footnote: "Clean Architecture & Coroutines background tasks"
    },
    {
      id: "06",
      eyebrow: "UTILITY APP · PRODUCTION",
      title: "QR & Barcode Scanner",
      description: "Fast and reliable QR/barcode scanner with CameraX integration, custom scan modes, barcode generator, and searchable history tracking.",
      footnote: "CameraX integration & instant barcode detection"
    }
  ],

  stack: [
    { category: "LANGUAGES", techs: "<b>Kotlin</b> · <b>Java</b>" },
    { category: "UI FRAMEWORKS", techs: "<b>Jetpack Compose</b> · <b>Material 3</b> · XML · ConstraintLayout" },
    { category: "ARCHITECTURE", techs: "<b>MVVM</b> · <b>Clean Architecture</b> · MVI · Repository Pattern" },
    { category: "ASYNC & FLOW", techs: "<b>Kotlin Coroutines</b> · <b>StateFlow & SharedFlow</b> · LiveData" },
    { category: "DEPENDENCY INJECTION", techs: "<b>Dagger / Hilt</b> · <b>Koin</b>" },
    { category: "NETWORKING", techs: "<b>Retrofit</b> · OkHttp · REST APIs · JSON Serialization" },
    { category: "DATABASES & CACHE", techs: "<b>Room Database</b> · SQLite · DataStore Preferences" },
    { category: "BACKEND SERVICES", techs: "<b>Firebase</b> (Auth, Firestore, Cloud Messaging, Crashlytics)" },
    { category: "MAPS & LOCATION", techs: "<b>Google Maps SDK</b> · Location Services · FusedLocationProvider" },
    { category: "MONETIZATION & TOOLS", techs: "<b>AdMob</b> · Android Studio · Git · Profiler · Google Play Console" }
  ],

  certifications: [
    {
      title: "Core Competency: Jetpack Compose & Clean Architecture",
      date: "SPECIALIZATION",
      verifyUrl: undefined,
    },
    {
      title: "Core Competency: AdMob & Mobile App Monetization",
      date: "EXPERTISE",
      verifyUrl: undefined,
    },
    {
      title: "Core Competency: AI-Assisted Development (Codex, Claude)",
      date: "WORKFLOW",
      verifyUrl: undefined,
    },
    {
      title: "Core Competency: Google Play Store Lifecycle & Deployment",
      date: "PRODUCTION",
      verifyUrl: undefined,
    }
  ] as CertificationItem[],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      period: "2021 – 2025",
      grade: "National University of Modern Languages (NUML) · GPA: 3.27 / 4.0"
    }
  ]
};
