document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    });

    // Featured Speakers - Dynamic Creation
    const speakersData = [
        { name: 'Speaker 1', topic: 'Topic 1' },
        { name: 'Speaker 2', topic: 'Topic 2' },
        // Add more speaker data as needed
    ];

    const featuredSpeakersSection = document.getElementById('featured-speakers');

    speakersData.forEach(function(speaker) {
        const speakerCard = document.createElement('div');
        speakerCard.classList.add('speaker-card');
        speakerCard.innerHTML = `
            <h2>${speaker.name}</h2>
            <p>Topic: ${speaker.topic}</p>
        `;
        featuredSpeakersSection.appendChild(speakerCard);
    });

    // Dynamic Creation for Program Section Cards
    const programSection = document.querySelector('#program .card-list');

    // Sample program card data
    const programCardsData = [
        { iconClass: 'fa-microphone', text: 'Event 1' },
        { iconClass: 'fa-camera', text: 'Event 2' },
        // Add more program card data as needed
    ];

    programCardsData.forEach(function(cardData) {
        const card = document.createElement('div');
        card.classList.add('card', 'col-sm-12');

        const cardIcon = document.createElement('div');
        cardIcon.classList.add('col-sm-2', 'col-md-12', 'card-icon');
        cardIcon.innerHTML = `<i class="fa-solid ${cardData.iconClass} gray"></i>`;

        const cardText = document.createElement('div');
        cardText.classList.add('col-sm-10', 'col-md-12');
        cardText.textContent = cardData.text;

        card.appendChild(cardIcon);
        card.appendChild(cardText);

        programSection.appendChild(card);
    });
});
