document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "I'm so sorry Poyyy...",
        "Ikaw lang naman yung babaeng mahal ko eh wala ng iba, I swear po",
        "Pwede ba patawarin mo na ako? Plssss....."
    ];
    const messageElements = [
        document.getElementById('message1'),
        document.getElementById('message2'),
        document.getElementById('message3')
    ];
    const emoji = document.getElementById('emoji');

    function typeWriter(element, text, index = 0) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeWriter(element, text, index + 1), 100);
        } else {
            return Promise.resolve();
        }
    }

    async function displayMessages() {
        for (let i = 0; i < messages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, i === 0 ? 0 : 2000));
            await typeWriter(messageElements[i], messages[i]);
        }
        emoji.style.opacity = 1;
    }

    displayMessages();

    // Adjust container height for very small screens
    function adjustContainerHeight() {
        const container = document.querySelector('.container');
        if (window.innerHeight < 400) {
            container.style.height = '90vh';
            container.style.overflowY = 'auto';
        } else {
            container.style.height = 'auto';
            container.style.overflowY = 'visible';
        }
    }

    window.addEventListener('resize', adjustContainerHeight);
    adjustContainerHeight();
});

