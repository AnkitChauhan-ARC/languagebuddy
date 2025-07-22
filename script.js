
        // Alphabet data with pronunciation information
        const alphabetData = {
            english: [
                { letter: "A", transcription: "/eɪ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "B", transcription: "/biː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "C", transcription: "/siː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "D", transcription: "/diː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "E", transcription: "/iː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "F", transcription: "/ɛf/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "G", transcription: "/dʒiː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "H", transcription: "/eɪtʃ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "I", transcription: "/aɪ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "J", transcription: "/dʒeɪ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "K", transcription: "/keɪ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "L", transcription: "/ɛl/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "M", transcription: "/ɛm/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "N", transcription: "/ɛn/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "O", transcription: "/oʊ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "P", transcription: "/piː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "Q", transcription: "/kjuː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "R", transcription: "/ɑːr/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "S", transcription: "/ɛs/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "T", transcription: "/tiː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "U", transcription: "/juː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "V", transcription: "/viː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "W", transcription: "/ˈdʌbəl.juː/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "X", transcription: "/ɛks/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "Y", transcription: "/waɪ/", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "Z", transcription: "/ziː/ (US) or /zɛd/ (UK)", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" }
            ],
            hindi: [
                { letter: "अ", transcription: "a", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "आ", transcription: "ā", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "इ", transcription: "i", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ई", transcription: "ī", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "उ", transcription: "u", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ऊ", transcription: "ū", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ए", transcription: "e", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ऐ", transcription: "ai", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ओ", transcription: "o", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "औ", transcription: "au", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "क", transcription: "ka", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ख", transcription: "kha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ग", transcription: "ga", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "घ", transcription: "gha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ङ", transcription: "ṅa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "च", transcription: "cha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "छ", transcription: "chha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ज", transcription: "ja", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "झ", transcription: "jha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ञ", transcription: "ña", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ट", transcription: "ṭa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ठ", transcription: "ṭha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ड", transcription: "ḍa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ढ", transcription: "ḍha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ण", transcription: "ṇa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "त", transcription: "ta", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "थ", transcription: "tha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "द", transcription: "da", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ध", transcription: "dha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "न", transcription: "na", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "प", transcription: "pa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "फ", transcription: "pha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ब", transcription: "ba", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "भ", transcription: "bha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "म", transcription: "ma", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "य", transcription: "ya", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "र", transcription: "ra", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ल", transcription: "la", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "व", transcription: "va", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "श", transcription: "sha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ष", transcription: "ṣa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "स", transcription: "sa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ह", transcription: "ha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" }
            ],
            gujarati: [
                { letter: "અ", transcription: "a", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "આ", transcription: "ā", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઇ", transcription: "i", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઈ", transcription: "ī", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઉ", transcription: "u", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઊ", transcription: "ū", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "એ", transcription: "e", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઐ", transcription: "ai", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઓ", transcription: "o", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઔ", transcription: "au", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ક", transcription: "ka", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ખ", transcription: "kha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ગ", transcription: "ga", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઘ", transcription: "gha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઙ", transcription: "ṅa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ચ", transcription: "cha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "છ", transcription: "chha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "જ", transcription: "ja", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઝ", transcription: "jha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઞ", transcription: "ña", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ટ", transcription: "ṭa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઠ", transcription: "ṭha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ડ", transcription: "ḍa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ઢ", transcription: "ḍha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ણ", transcription: "ṇa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ત", transcription: "ta", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "થ", transcription: "tha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "દ", transcription: "da", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ધ", transcription: "dha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ન", transcription: "na", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "પ", transcription: "pa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ફ", transcription: "pha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "બ", transcription: "ba", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ભ", transcription: "bha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "મ", transcription: "ma", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ય", transcription: "ya", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ર", transcription: "ra", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "લ", transcription: "la", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "વ", transcription: "va", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "શ", transcription: "sha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "ષ", transcription: "ṣa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "સ", transcription: "sa", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" },
                { letter: "હ", transcription: "ha", audio: "https://www.soundjay.com/buttons/sounds/button-09.mp3" }
            ]
        };

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            // Load default language (English)
            loadLanguage('english');
            
            // Set up language selector buttons
            const languageButtons = document.querySelectorAll('.language-btn');
            languageButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    languageButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    // Load the selected language
                    loadLanguage(this.dataset.lang);
                });
            });
            
            // Set up search functionality
            const searchInput = document.getElementById('search-input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const currentLanguage = document.querySelector('.language-btn.active').dataset.lang;
                filterLetters(currentLanguage, searchTerm);
            });
            
            // Load favorites from localStorage
            loadFavorites();
        });
        
        // Load a language's alphabet
        function loadLanguage(language) {
            // Hide all alphabet containers
            document.querySelectorAll('.alphabet-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // Show the selected language's container
            document.getElementById(`${language}-alphabet`).classList.add('active');
            
            // Clear any error messages
            document.getElementById('error-message').textContent = '';
            
            // Populate the alphabet grid
            const container = document.getElementById(`${language}-letters`);
            container.innerHTML = '';
            
            alphabetData[language].forEach(item => {
                const letterCard = document.createElement('div');
                letterCard.className = 'letter-card';
                letterCard.dataset.lang = language;
                letterCard.dataset.letter = item.letter;
                letterCard.dataset.audio = item.audio;
                
                letterCard.innerHTML = `
                    <div class="letter">${item.letter}</div>
                    <div class="transcription">${item.transcription}</div>
                    <button class="favorites-btn">★ Add to Favorites</button>
                `;
                
                // Add click event to play pronunciation
                letterCard.addEventListener('click', function(e) {
                    // Don't play if the click was on the favorites button
                    if (!e.target.classList.contains('favorites-btn')) {
                        playPronunciation(this.dataset.audio, this.dataset.letter);
                    }
                });
                
                // Add favorites button event
                const favButton = letterCard.querySelector('.favorites-btn');
                favButton.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent the letter card click event
                    toggleFavorite(this);
                });
                
                container.appendChild(letterCard);
            });
            
            // Set the first language button as active if none is active
            if (!document.querySelector('.language-btn.active')) {
                document.querySelector(`.language-btn[data-lang="${language}"]`).classList.add('active');
            }
        }
        
        // Filter letters based on search term
        function filterLetters(language, searchTerm) {
            const letters = document.querySelectorAll(`#${language}-letters .letter-card`);
            let found = false;
            
            letters.forEach(letter => {
                const letterText = letter.dataset.letter.toLowerCase();
                const transcription = letter.querySelector('.transcription').textContent.toLowerCase();
                
                if (letterText.includes(searchTerm) || transcription.includes(searchTerm)) {
                    letter.style.display = '';
                    found = true;
                } else {
                    letter.style.display = 'none';
                }
            });
            
            // Show error message if no matches found
            const errorMessage = document.getElementById('error-message');
            if (!found && searchTerm.length > 0) {
                errorMessage.textContent = 'No matching letters found.';
            } else {
                errorMessage.textContent = '';
            }
        }
        
        // Play pronunciation audio
        function playPronunciation(audioUrl, letter) {
            const audio = new Audio(audioUrl);
            audio.play().catch(e => {
                document.getElementById('error-message').textContent = 
                    `Error playing pronunciation for ${letter}. Please try again.`;
                console.error('Audio playback error:', e);
            });
        }
        
        // Toggle a letter as favorite
        function toggleFavorite(button) {
            const letterCard = button.closest('.letter-card');
            const lang = letterCard.dataset.lang;
            const letter = letterCard.dataset.letter;
            const transcription = letterCard.querySelector('.transcription').textContent;
            const audio = letterCard.dataset.audio;
            
            let favorites = JSON.parse(localStorage.getItem('languageBuddyFavorites')) || [];
            
            // Check if already favorited
            const existingIndex = favorites.findIndex(fav => 
                fav.lang === lang && fav.letter === letter);
            
            if (existingIndex >= 0) {
                // Remove from favorites
                favorites.splice(existingIndex, 1);
                button.textContent = '★ Add to Favorites';
                button.classList.remove('favorited');
            } else {
                // Add to favorites
                favorites.push({
                    lang,
                    letter,
                    transcription,
                    audio
                });
                button.textContent = '✓ Favorited';
                button.classList.add('favorited');
            }
            
            // Save to localStorage
            localStorage.setItem('languageBuddyFavorites', JSON.stringify(favorites));
            
            // Update favorites list
            loadFavorites();
        }
        
        // Load and display favorites
        function loadFavorites() {
            const favoritesList = document.getElementById('favorites-list');
            const noFavoritesMsg = document.getElementById('no-favorites');
            
            let favorites = JSON.parse(localStorage.getItem('languageBuddyFavorites')) || [];
            
            favoritesList.innerHTML = '';
            
            if (favorites.length === 0) {
                noFavoritesMsg.style.display = 'block';
            } else {
                noFavoritesMsg.style.display = 'none';
                
                favorites.forEach(fav => {
                    const favoriteCard = document.createElement('div');
                    favoriteCard.className = 'letter-card';
                    favoriteCard.dataset.lang = fav.lang;
                    favoriteCard.dataset.letter = fav.letter;
                    favoriteCard.dataset.audio = fav.audio;
                    
                    favoriteCard.innerHTML = `
                        <div class="letter">${fav.letter}</div>
                        <div class="transcription">${fav.transcription}</div>
                        <button class="favorites-btn favorited">✓ Favorited</button>
                    `;
                    
                    // Add click event to play pronunciation
                    favoriteCard.addEventListener('click', function(e) {
                        if (!e.target.classList.contains('favorites-btn')) {
                            playPronunciation(this.dataset.audio, this.dataset.letter);
                        }
                    });
                    
                    // Add favorites button event
                    const favButton = favoriteCard.querySelector('.favorites-btn');
                    favButton.addEventListener('click', function(e) {
                        e.stopPropagation();
                        toggleFavorite(this);
                    });
                    
                    favoritesList.appendChild(favoriteCard);
                });
            }
            
            // Update favorite status in alphabet grids
            updateFavoriteStatus();
        }
        
        // Update favorite button status in alphabet grids
        function updateFavoriteStatus() {
            const favorites = JSON.parse(localStorage.getItem('languageBuddyFavorites')) || [];
            
            document.querySelectorAll('.letter-card').forEach(card => {
                const lang = card.dataset.lang;
                const letter = card.dataset.letter;
                const favButton = card.querySelector('.favorites-btn');
                
                const isFavorite = favorites.some(fav => 
                    fav.lang === lang && fav.letter === letter);
                
                if (isFavorite) {
                    favButton.textContent = '✓ Favorited';
                    favButton.classList.add('favorited');
                } else {
                    favButton.textContent = '★ Add to Favorites';
                    favButton.classList.remove('favorited');
                }
            });
        }
