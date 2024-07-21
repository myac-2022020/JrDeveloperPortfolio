document.addEventListener('DOMContentLoaded', (event) => {
    const textParts = [
        "Welcome to ", 
        "<br>",
        "My Portfolio."
    ];
    let partIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;

    function typeWriter() {
        if (partIndex < textParts.length) {
            const currentPart = textParts[partIndex];
            if (currentPart.startsWith("<") && currentPart.endsWith(">")) {
                document.getElementById("typing-text").innerHTML += currentPart;
                partIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                if (charIndex < currentPart.length) {
                    document.getElementById("typing-text").innerHTML += currentPart.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, typingSpeed);
                } else {
                    partIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, typingSpeed);
                }
            }
        }
    }

    typeWriter();
});
