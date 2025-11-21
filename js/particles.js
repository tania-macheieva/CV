const particlesContainer = document.getElementById('particles-container');
for (let i = 0; i < 30; i++) {
const particle = document.createElement('div');
particle.className = 'particle';
particle.style.left = Math.random() * 100 + '%';
particle.style.top = Math.random() * 100 + '%';
particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
particle.style.animationDelay = Math.random() * 8 + 's';
particle.style.animationDuration = (8 + Math.random() * 4) + 's';
particlesContainer.appendChild(particle);
}