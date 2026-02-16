# Will You Be My Valentine? (Mobile Edition)

An interactive Valentine's Day proposal webpage with a progressive "Yes" button that grows as the user clicks "No". Perfect for mobile devices!

##  Mobile Only Notice

**This version has been optimized for mobile devices** with touch-friendly interactions and responsive design. The original desktop version has been modified to create a more engaging mobile experience.

---

##  Current Bugs

This modified version contains known bugs that need fixing:

1. **Visual Disappearance Issue**: After several clicks, the display sometimes becomes hidden, leaving only both buttons visible on screen.
2. **Layout Shift**: When the "Yes" button grows, there can be unexpected layout shifts.
3. **Fullscreen Transition**: The transition to fullscreen mode is not always smooth.

---

##  What's Changed from Original

| Original | Mobile Edition |
|----------|---------------|
| Desktop-focused | Mobile-first design |
| 10 rejection messages | 13 rejection messages |
| Yes button grows slightly | Yes button grows progressively to fullscreen |
| Simple interaction | Extended interaction (more clicks) |
| - | Added tremor effect on emoji |
| - | Fullscreen takeover at final stage |

---

##  Features

- **13 rejection messages** - Extended conversation before acceptance
- **Progressive button growth** - "Yes" button expands with each "No" click
- **Animated heart emoji** - Trembling effect on the ❤️ when pressed
- **Fullscreen finale** - Button takes over the screen at final stage
- **Mobile-optimized** - Touch-friendly interface

---

## 🛠️ Files Structure

```
project/
├── index.html          # Main page
├── yes_page.html       # Acceptance page
├── styles.css          # Main styling
├── yes_style.css       # Acceptance page styling
└── script.js           # Interactive functionality
```

---

## 🔧 How to Install & Use

1. **Download all files** to your computer
2. **Open `index.html`** in your mobile browser or emulator
3. **Tap "No" repeatedly** to see the "Yes" button grow
4. **Tap "Yes"** to see the acceptance page

**Note:** For best experience, use Chrome DevTools mobile emulation or a real mobile device.

---

##  Bug Reports

If you encounter issues beyond the known bugs:

1. The button growth stops working
2. The emoji tremor doesn't activate
3. The fullscreen transition breaks

Please report these with specific steps to reproduce.

---

## 📝 Code Overview

### Key Functions in `script.js`:

```javascript
handleNoClick()     // Updates No button text, grows Yes button
handleYesClick()    // Redirects to acceptance page
applyTremor()       // Creates trembling effect on emoji
startFullscreenTremor() // Special tremor for fullscreen mode
```

### Message Array (13 items):
```javascript
const messages = [
    "Are you sure? 💔",
    "Really sure?? 😢",
    "Are you positive? 🥺",
    "Darling, please... 🥺",
    // ... plus 9 more messages
];
```

---

## 📱 Testing on Mobile

| Device | Status |
|--------|--------|
| iPhone 12/13/14 | ⚠️ Works with bugs |
| Android (Chrome) | ⚠️ Works with bugs |
| Mobile Safari | ⚠️ Works with bugs |
| Desktop | ❌ Not optimized |

---

##  Credits

Original creator: [ivysone](https://github.com/ivysone/Will-you-be-my-Valentine-)

Mobile modifications: Community contributor

---

##  License

MIT License - See LICENSE file for details

**Respect Open-Source**  
If you fork or modify this code:  
✓ Use it for creativity, personal projects, or learning  
✓ Give proper credit when using it in public  
✓ Respect the original creator's work  

---

*This is a fun project for learning and entertainment purposes.*
