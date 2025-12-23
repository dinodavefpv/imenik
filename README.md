# Именник (Imennik) - Proto-Bulgarian Calendar

A standalone Progressive Web App implementing the ancient Proto-Bulgarian calendar system.

## Features

- **Dual Calendar System**: Proto-Bulgarian and Gregorian dates
- **12-Year Animal Cycle**: Pig, Mouse, Bull, Tiger, Rabbit, Dragon, Snake, Horse, Monkey, Ram, Rooster, Dog
- **60-Year Star Day Cycle**: Five elements (Water, Fire, Earth, Tree, Metal) with male/female aspects
- **Event Tracking**: Create, edit, delete events with recurrence options
- **Multiple Views**: Day, Week, Month, Year
- **Themes**: Traditional (parchment) and Modern, each with Light/Dark modes
- **Languages**: Bulgarian and English with Proto-Bulgarian terminology option
- **Offline Support**: Works without internet after first load
- **Import/Export**: ICS calendar file support

## Usage

### Option 1: Open Directly
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Run Local Server (for PWA features)
For full PWA functionality including offline support:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Option 3: Host Online
Upload all files to any web hosting service.

## Files

```
imennik-standalone/
├── index.html      # Main app (all-in-one)
├── manifest.json   # PWA manifest
├── sw.js           # Service worker for offline support
├── icons/
│   └── icon.svg    # Placeholder icon
└── README.md       # This file
```

## PNG Icons Needed

Replace the placeholder with actual PNG icons:

### App Icons
- `icons/icon-192x192.png` - Android home screen
- `icons/icon-512x512.png` - Splash screen

### Animal Icons (optional, for enhanced display)
- `icons/animal-0.png` through `icons/animal-11.png`

### Tutorial Icons (optional)
- `icons/tutorial-welcome.png`
- `icons/tutorial-animals.png`
- `icons/tutorial-elements.png`
- `icons/tutorial-eni.png`

## Historical Background

Based on the Nominalia of the Bulgarian Khans and the Chatalar Inscription (822 AD).

- **Epoch**: 5505 BC
- **New Year**: Winter solstice (Eni - ЕНИ)
- **Year Length**: 365 days

## License

MIT
