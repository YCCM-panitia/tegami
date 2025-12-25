    // Affirmations data
const affirmations = {
    happy: "You are a beacon of joy. Keep shining!",
    sad: "It's okay to feel sad. Healing takes time, and you're stronger than you know.",
    calm: "In this moment of calm, breathe deeply and find peace within.",
    anxious: "Anxiety is temporary. You're capable and resilient.",
    excited: "Your excitement is contagious. Chase your dreams with passion!",
    tired: "Rest is not a luxury; it's a necessity. Recharge and come back stronger."
};

// Inspirational messages
const messages = [
    "Embrace the present; it's where your power lies.",
    "You are enough, just as you are.",
    "Every day is a new opportunity to grow.",
    "Kindness starts with yourself.",
    "Breathe in peace, exhale worries."
];

// DOM Elements
const envelope = document.getElementById('envelope');
const messageCard = document.getElementById('message-card');
const newLetterBtn = document.getElementById('new-letter-btn');
const shareLetterBtn = document.getElementById('share-letter-btn');
const moodBtns = document.querySelectorAll('.mood-btn');
const affirmationCard = document.getElementById('affirmation-card');
const affirmationText = document.getElementById('affirmation-text');
const copyAffirmationBtn = document.getElementById('copy-affirmation-btn');
const journalForm = document.getElementById('journal-form');
const journalTextarea = document.getElementById('journal-textarea');
const loading = document.getElementById('loading');
const aiResponse = document.getElementById('ai-response');
const newMessageBtn = document.getElementById('new-message-btn');
const shareMessageBtn = document.getElementById('share-message-btn');
const inspirationalMessage = document.getElementById('inspirational-message');

// Envelope Interaction
envelope.addEventListener('click', () => {
    envelope.classList.add('flap');
    setTimeout(() => {
        messageCard.style.display = 'block'
    })
})

// envelope.addEventListener('click', () => {
//     envelope.classList.add('flap');
//     setTimeout(() => {
//         messageCard.style.display = 'block';
        // Optional sound effect (subtle)
        // const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66hVFApGn+DyvmQdBzaO1fLNfCsFJXTH8N2QQAoUXrTp66h