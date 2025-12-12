var image = new Image();
image.src = 'tv_glitch.gif';

    const assets = {
        tvNormal: "tv.png",
        tvGlitch: "tv_glitch.gif",
        char1: "specil.png",
        char2: "cherubim.png"
    };

    let currentCharacter = 1; 
    let isSubsumed = false;

    const tvContainer = document.getElementById("tv-container");
    const tvImage = document.getElementById("tv-image");
    const character = document.getElementById("character");
    const staticAudio = document.getElementById("static-audio");

    let isDragging = false;
    let offset = { x: 0, y: 0 };

    tvContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        offset.x = e.clientX - tvContainer.getBoundingClientRect().left;
        offset.y = e.clientY - tvContainer.getBoundingClientRect().top;
        
        tvContainer.style.transform = 'none';
        
        moveAt(e.pageX, e.pageY);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            moveAt(e.pageX, e.pageY);
            checkCollisions();
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    function moveAt(pageX, pageY) {
        tvContainer.style.left = pageX - offset.x + 'px';
        tvContainer.style.top = pageY - offset.y + 'px';
    }

    function checkCollisions() {
        const tvRect = tvContainer.getBoundingClientRect();
        const charRect = character.getBoundingClientRect();

        const isOverlapping = !(
            tvRect.right < charRect.left || 
            tvRect.left > charRect.right || 
            tvRect.bottom < charRect.top || 
            tvRect.top > charRect.bottom
        );

        const isFullyCovered = (
            tvRect.left <= charRect.left &&
            tvRect.right >= charRect.right &&
            tvRect.top <= charRect.top &&
            tvRect.bottom >= charRect.bottom
        );

        if(isOverlapping){
            if(!tvImage.src.includes(assets.tvGlitch)){
                tvImage.src = assets.tvGlitch;
            }
            if (staticAudio.paused){
              staticAudio.play();
            }
        }
        else {
            if(!tvImage.src.includes(assets.tvNormal)){
                tvImage.src = assets.tvNormal;
            }
            if (!staticAudio.paused) {
              staticAudio.pause();
              staticAudio.currentTime = 0; 
            }
        }

        if(isFullyCovered){
            if(!isSubsumed){
                swapCharacter();
                isSubsumed = true;
            }
        }
        else{
            isSubsumed = false; 
        }
    }

    function swapCharacter() {
        if (currentCharacter === 1) {
            character.src = assets.char2;
            currentCharacter = 2;
        } else {
            character.src = assets.char1;
            currentCharacter = 1;
        }

    }
