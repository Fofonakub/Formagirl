function moveRandomEl(elm) {
    if (!elm) return;
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });
}


// ทำให้ Typing Effect เป็นฟังก์ชันที่สามารถเรียกใช้ซ้ำได้
function initializeTypingEffect(outputContainerId, textLinesContainerId, typingSpeed = 100, lineBreakDelay = 800) {
    const outputContainer = document.getElementById(outputContainerId);
    const fullTextLinesContainer = document.getElementById(textLinesContainerId);

    if (outputContainer && fullTextLinesContainer) {
        const textLines = Array.from(fullTextLinesContainer.querySelectorAll('p')).map(p => p.textContent);
        let lineIndex = 0;
        let charIndex = 0;

        function typeCharInLine() {
            if (lineIndex < textLines.length) {
                const currentLineText = textLines[lineIndex];

                if (charIndex < currentLineText.length) {
                    outputContainer.innerHTML += currentLineText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeCharInLine, typingSpeed);
                } else {
                    outputContainer.innerHTML += '<br>';
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeCharInLine, lineBreakDelay);
                }
            }
        }
        typeCharInLine();
    }
}

// ในหน้า `index.html` หรือหน้าหลัก เราจะเรียกใช้แบบนี้:
document.addEventListener("DOMContentLoaded", function() {
    initializeTypingEffect("typing-output-container", "full-text-lines");
});