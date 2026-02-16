(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sure? 💔",
    "Really sure?? 😢",
    "Are you positive? 🥺",
    "Darling, please... 🥺",
    "Just think about our future together 🥺",
    "If you say no, my heart will break... 💔",
    "I will be so sad... 😭",
    "So very sad... 💔💔",
    "Ok fine, but my heart hurts... 😔",
    "Just kidding! Say yes, I love you! ❤️✨"
];

let messageIndex = 0;
let clickCount = 0;
const maxClicks = 10;
let emojiSpan = null;

function handleNoClick() {
    clickCount++;
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const container = document.querySelector('.container');
    const buttons = document.querySelector('.buttons');
    const romanticTitle = document.querySelector('.romantic-title');
    const subtitle = document.querySelector('.subtitle');
    const gifContainer = document.querySelector('.gif_container');
    
    // Create separate emoji span if not exists
    if (!emojiSpan) {
        // Get original text with emoji
        const originalText = yesButton.textContent; // "Yes ❤️"
        yesButton.textContent = 'Yes '; // Remove emoji from main text
        
        // Create span for emoji
        emojiSpan = document.createElement('span');
        emojiSpan.textContent = '❤️';
        emojiSpan.style.display = 'inline-block';
        emojiSpan.style.marginLeft = '5px';
        yesButton.appendChild(emojiSpan);
    }
    
    // Increase tremor based on click count - only on emoji
    const tremoIntensity = Math.min(clickCount * 2, 15);
    const tremoDuration = Math.max(300 - (clickCount * 20), 100);
    
    // Apply tremor animation ONLY to emoji
    applyTremor(emojiSpan, tremoIntensity, tremoDuration);
    
    // Update message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // PEMBESARAN LEBIH PROGRESIF - dimulai dari awal
    const baseFontSize = 1.3;
    // Growth factor lebih agresif: 0.9 per klik (dari 0.8)
    const growthFactor = baseFontSize + (clickCount * 0.9);
    yesButton.style.fontSize = `${growthFactor}em`;
    
    // Increase padding lebih agresif
    const basePadding = 15;
    const paddingY = basePadding + (clickCount * 12); // dari 10 jadi 12
    const paddingX = 35 + (clickCount * 18); // dari 15 jadi 18
    yesButton.style.padding = `${paddingY}px ${paddingX}px`;
    
    // Pastikan tombol Yes tetap di tengah
    yesButton.style.margin = '0 auto';
    yesButton.style.display = 'inline-flex';
    yesButton.style.alignItems = 'center';
    yesButton.style.justifyContent = 'center';
    
    // LEBAR TOMBOL - progresif dari awal
    if (clickCount >= 1) {
        // Mulai melebar dari klik pertama
        const baseWidth = 200; // asumsi lebar awal dalam px
        const widthIncrease = clickCount * 25; // tambah 25px per klik
        yesButton.style.width = `${Math.min(baseWidth + widthIncrease, 90)}vw`; // max 90vw di klik 6-7
    }
    
    // From click 2 onwards, start expanding container
    if (clickCount >= 2) {
        container.style.width = '100vw';
        container.style.height = 'auto';
        container.style.maxWidth = '100vw';
        container.style.padding = '10px 5px';
        container.style.borderRadius = '0';
        container.style.margin = '0';
    }
    
    // From click 4, buttons container takes more space
    if (clickCount >= 4) {
        buttons.style.width = '100vw';
        buttons.style.justifyContent = 'center';
        buttons.style.gap = `${Math.max(20 - (clickCount * 2), 5)}px`; // Gap mengecil progresif
    }
    
    // From click 5, Yes button makin lebar
    if (clickCount >= 5) {
        yesButton.style.width = '95vw';
        yesButton.style.maxWidth = '100vw';
        yesButton.style.height = 'auto';
        yesButton.style.minHeight = '100px';
    }
    
    // From click 6, persiapan fullscreen
    if (clickCount >= 6) {
        yesButton.style.width = '98vw';
        yesButton.style.minHeight = '120px';
    }
    
    // Fade No button gradually
    const noOpacity = Math.max(0.1, 1 - (clickCount * 0.12));
    noButton.style.opacity = `${noOpacity}`;
    
    // Hide No button at klik 7 - FULLSCREEN
    if (clickCount >= 7) {
        noButton.style.display = 'none';
        // Make container even fuller
        container.style.width = '100vw';
        container.style.height = '100vh';
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.borderRadius = '0';
        yesButton.style.minHeight = '100vh';
        yesButton.style.fontSize = '4em'; // Lebih besar di fullscreen
        buttons.style.height = '100vh';
        buttons.style.gap = '0';
        
        // HANYA MENGHILANGKAN TULISAN/JUDUL
        if (romanticTitle) romanticTitle.style.display = 'none';
        if (subtitle) subtitle.style.display = 'none';
        if (gifContainer) gifContainer.style.display = 'none';
        
        // Continuous tremor when full screen - ONLY emoji
        startContinuousTremor(emojiSpan, 20);
    }
    
    // Auto accept on final click
    if (clickCount >= maxClicks) {
        handleYesClick();
    }
}

function applyTremor(element, intensity, duration) {
    const startTime = Date.now();
    
    const tremor = () => {
        const elapsed = Date.now() - startTime;
        
        if (elapsed < duration) {
            const offsetX = (Math.random() - 0.5) * intensity * 2;
            const offsetY = (Math.random() - 0.5) * intensity * 2;
            element.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${1 + (intensity / 80)})`;
            requestAnimationFrame(tremor);
        } else {
            element.style.transform = 'translate(0, 0) scale(1)';
        }
    };
    
    tremor();
}

function startContinuousTremor(element, intensity) {
    // Clear previous interval if exists
    if (element.tremoInterval) {
        clearInterval(element.tremoInterval);
    }
    
    element.tremoInterval = setInterval(() => {
        applyTremor(element, intensity, 150);
    }, 160);
}

function handleYesClick() {
    createHeartExplosion();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 800);
}

function createHeartExplosion() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = window.innerWidth / 2 + 'px';
        heart.style.top = window.innerHeight / 2 + 'px';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 5 + 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(heart);
        
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let opacity = 1;
        
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;
            heart.style.left = x + 'px';
            heart.style.top = y + 'px';
            heart.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };
        animate();
    }
}
