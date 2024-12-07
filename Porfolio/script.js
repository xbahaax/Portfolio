const messages = ["a Front End Developper", "a Python Developper", "an ESI Student"];
const typingSpeed = 100; 
const clearingSpeed = 50; 
const delayBetweenMessages = 1000; 

let currentMessageIndex = 0;
let typingElement = document.getElementById("typing-text");

function typeMessage(message, callback) {
    let index = 0;
    function type() {
        if (index < message.length) {
            typingElement.textContent += message[index];
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(callback, delayBetweenMessages); 
        }
    }
    type();
}

function clearMessage(callback) {
    let length = typingElement.textContent.length;
    function clear() {
        if (length > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1);
            length--;
            setTimeout(clear, clearingSpeed);
        } else {
            callback();
        }
    }
    clear();
}

function startTypingEffect() {
    typeMessage(messages[currentMessageIndex], () => {
        clearMessage(() => {
            currentMessageIndex = (currentMessageIndex + 1) % messages.length; 
            startTypingEffect(); 
        });
    });
}

startTypingEffect();


const projects = document.querySelectorAll('.project');
let currentIndex = 0;

function updateProjects() {
    projects.forEach((project, index) => {
        project.classList.remove('active');
        if (index === currentIndex) {
            project.classList.add('active');
        }
    });
}

document.getElementById('prev-project').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProjects();
});

document.getElementById('next-project').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProjects();
});

updateProjects();

document.getElementById('submit').addEventListener('click', () =>
{
    const name1 = document.getElementById('first-name').value
    const name2 = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    if (name1 && name2 && email && message) {
        document.getElementById('submit').textContent = 'Sent  !!';
    }else {
            alert("Please fill in all fields");
        }
})

