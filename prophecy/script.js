let bibleWords = [
  "the", "girl", "prophecy", "which", "whispers", "among", "shadows", "legend", 
  "of", "this", "world", "deltarune", "a", "basked", "in", "purest", "light", 
  "beneath", "it", "grew", "eternal", "night", "if", "fountains", "freed", 
  "roaring", "cries", "and", "titans", "shape", "from", "darkened", "eyes", 
  "dark", "both", "burning", "dire", "countdown", "to", "earths", "expire", 
  "but", "lo", "on", "hopes", "dreams", "they", "send", "three", "heroes", 
  "at", "worlds", "end", "with", "hope", "crossed", "her", "heart", "second", 
  "hero", "prince", "alone", "deepest", "third", "cage", "human", "soul", 
  "parts", "first", "theyll", "hear", "ring", "heavens", "call", "see", 
  "tail", "hell", "take", "crawl", "knight", "makes", "blackened", "knife", 
  "shall", "duel", "strife", "by", "queens", "chariot", "cannot", "be", 
  "stopped", "lord", "screens", "cleaved", "red", "blade", "flower", "man", 
  "trapped", "asylum", "jockington", "grows", "beard", "pointyheaded", "will", 
  "say", "toothpaste", "then", "boy", "conundrums", "four", "tones", "last", 
  "multitude", "angel", "banished", "finally", "meet", "its", "desire", "when", 
  "all", "is", "lost", "for", "tale", "final", "tragedy", "unveils", "save", 
  "we", "only", "saved", "axe", "carved", "tortoises", "grand", "hammer", 
  "was", "coldwater", "fell", "top", "sky", "roots", "gallery", "love", 
  "finds", "way", "storys", "one", "la", "fille", "prophétie", "qui", "chuchote", "parmi", "les", "ombres", 
  "légende", "de", "ce", "monde", "deltarune", "un", "baigné", "dans", "pure", 
  "lumière", "sous", "elle", "crût", "éternelle", "nuit", "si", "fontaines", 
  "libérées", "rugissants", "cris", "et", "titans", "forme", "depuis", 
  "obscurcis", "yeux", "sombre", "tous", "deux", "brûlant", "terrible", 
  "compte", "à", "rebours", "expiration", "terre", "mais", "voici", "sur", 
  "espoirs", "rêves", "ils", "envoient", "trois", "héros", "fin", "avec", 
  "espoir", "croisé", "son", "cœur", "second", "prince", "seul", "profonde", 
  "obscurité", "troisième", "cage", "humain", "âme", "parties", "premier", 
  "entendront", "appel", "ciel", "verront", "queue", "enfer", "ramper", 
  "chevalier", "fait", "noirci", "couteau", "doit", "duel", "conflit", "par", 
  "char", "reine", "ne", "peut", "être", "stoppé", "seigneur", "écrans", 
  "fendu", "rouge", "lame", "fleur", "homme", "piégé", "asile", "jockington", 
  "pousse", "barbe", "tête", "pointue", "dira", "dentifrice", "puis", "garçon", 
  "énigme", "quatre", "tons", "dernier", "multitude", "ange", "banni", 
  "rencontrera", "enfin", "désir", "quand", "tout", "est", "perdu", "pour", 
  "conte", "finale", "tragédie", "dévoile", "sauver", "nous", "seulement", 
  "sauvés", "hache", "sculptée", "tortue", "grand", "marteau", "était", 
  "eau", "froide", "tombée", "sommet", "galerie", "racines", "amour", 
  "trouve", "chemin", "histoire", "seul"
];

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('sentence-input');
    input.addEventListener('input', checkWords);

    // Load Bible words from JSON file
    loadBibleWords();
});

async function loadBibleWords() {
    try {
        const response = await fetch('./bible/words.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        bibleWords = await response.json();
        console.log('Bible words loaded successfully');
    } catch (error) {
        console.error('Error loading Bible words:', error);
    }
}

function checkWords() {
    const inputElement = document.getElementById('sentence-input');
    const sentence = inputElement.value.toLowerCase();
    const words = sentence.split(/\s+/).filter(word => word.length > 0);

    const highlightedSentence = words.map(word => {
        if (bibleWords.includes(word)) {
            return `<span class="bible-word">${word}</span>`;
        }
        return word;
    }).join(' ');

    // Display the highlighted text in a separate container
    const highlightedTextElement = document.getElementById('highlighted-text');
    if (highlightedTextElement) {
        highlightedTextElement.innerHTML = highlightedSentence;
    }

    const bibleWordCount = words.filter(word => bibleWords.includes(word)).length;

    displayResult(bibleWordCount, words.length);
    updateBackground(bibleWordCount, words.length);
}

function displayResult(bibleWordCount, totalWords) {
    let resultElement = document.getElementById('result');
    if (!resultElement) {
        resultElement = document.createElement('p');
        resultElement.id = 'result';
        document.querySelector('.container').appendChild(resultElement);
    }

    const percentage = (bibleWordCount / totalWords * 100).toFixed(2);
    resultElement.textContent = `${bibleWordCount} out of ${totalWords} (${percentage}%) are in the prophecy.`;

    // Apply the "holy" effect
    const intensity = percentage / 100;
    resultElement.style.textShadow = `0 0 ${5 + intensity * 10}px rgba(255, 255, 255, ${intensity})`;
}

function updateBackground(bibleWordCount, totalWords) {
    const percentage = bibleWordCount / totalWords * 100;
    const container = document.querySelector('.container');

    let backgroundImage;
    if (percentage === 100) {
        backgroundImage = 'heaven.png';
    } else if (percentage === 0) {
        backgroundImage = 'hell.png';
    } else {
        backgroundImage = 'normal.png';
    }

    container.style.backgroundImage = `url(${backgroundImage})`;

    // Calculate the opacity for gradual fading effect
    if (percentage > 0 && percentage < 100) {
        const heavenOpacity = percentage / 100;
        const hellOpacity = (100 - percentage) / 100;

        // Create the effect by blending images
        container.style.backgroundImage = `linear-gradient(
            rgba(0, 0, 0, ${heavenOpacity}), 
            rgba(0, 0, 0, ${hellOpacity})),
            url(${backgroundImage})`;
    } else {
        container.style.backgroundImage = `url(${backgroundImage})`;
    }

    // Gradual fade effect for smooth transitions
    container.style.transition = 'background-image 0.5s ease, background-color 0.5s ease';
}
