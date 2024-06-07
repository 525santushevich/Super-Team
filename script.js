const teamMembers = [
  {
    name: 'Naomi Campbell',
    age: 54,
    retired: false,
    brands: ['Versace', 'Valentino', 'Chanel'],
    bestQuality: 'Catwalk presence',
    biography: 'Naomi Campbell is a British supermodel, actress, and businesswoman. She began her career at the age of 15 and has become one of the most recognizable and in-demand models of the past four decades.'
  },
  {
    name: 'Cindy Crawford',
    age: 58,
    retired: true,
    brands: ['Pepsi', 'Revlon', 'Versace'],
    bestQuality: 'Signature mole',
    biography: 'Cynthia Ann Crawford is an American model, actress, and television personality. Her years of success at modeling made her an international celebrity that has led to roles in television and film, and work as a spokesperson.'
  },
  {
    name: 'Adriana Lima',
    age: 36,
    retired: false,
    brands: ['Victoria\'s Secret', 'Maybelline', 'Miu Miu'],
    bestQuality: 'Intense gaze',
    biography: 'Adriana Lima is a Brazilian model and actress, best known as a Victoria\'s Secret Angel. She has been the longest-running model for the brand and was named "the most valuable Victoria\'s Secret Angel" in 2017.'
  },
  {
    name: 'Gisele Bundchen',
    age: 43,
    retired: true,
    brands: ['Victoria\'s Secret', 'Chanel', 'Versace'],
    bestQuality: 'Natural beauty',
    biography: 'Gisele Bündchen is a Brazilian model and actress, often referred to as one of the greatest supermodels of all time. She has been one of the highest-paid models in the world and is a former Victoria\'s Secret Angel.'
  },
  {
    name: 'Yasmeen Ghauri',
    age: 52,
    retired: true,
    brands: ['Hermes', 'Lanvin', 'Yves Saint Laurent'],
    bestQuality: 'Elegant walk',
    biography: 'Yasmeen Ghauri is a Canadian former supermodel. She is known for her work with designers like Hermès and Lanvin. Ghauri retired from modeling to focus on her family and personal life.'
  },
  {
    name: 'Janice Dickinson',
    age: 68,
    retired: true,
    brands: ['Revlon', 'Vogue', 'Chanel'],
    bestQuality: 'Bold personality',
    biography: 'Janice Dickinson is an American model, television personality, and author. She has been described as the first supermodel and has appeared on the covers of numerous fashion magazines.'
  },
  {
    name: 'Claudia Schiffer',
    age: 53,
    retired: true,
    brands: ['Chanel', 'Versace', 'Dior'],
    bestQuality: 'Classic beauty',
    biography: 'Claudia Schiffer is a German model and actress, considered one of the most successful models of all time. She has appeared on over 1,000 magazine covers and was one of the original supermodels of the 1990s.'
  },
  {
    name: 'Shalom Harlow',
    age: 50,
    retired: false,
    brands: ['Alexander McQueen', 'Versace', 'Victoria\'s Secret'],
    bestQuality: 'Versatility',
    biography: 'Shalom Harlow is a Canadian model and actress. She gained fame in the early 1990s and is known for her versatility and ability to transition between high fashion and commercial modeling.'
  },
  {
    name: 'Heidi Klum',
    age: 50,
    retired: false,
    brands: ['Victoria\'s Secret', 'Sports Illustrated', 'Givenchy'],
    bestQuality: 'Charisma',
    biography: 'Heidi Klum is a German-American model, television host, producer, and businesswoman. She became internationally famous as a Victoria\'s Secret Angel and for appearing on the cover of the Sports Illustrated Swimsuit Issue.'
  },
  {
    name: 'Kendall Jenner',
    age: 28,
    retired: false,
    brands: ['Calvin Klein', 'Estée Lauder', 'Givenchy'],
    bestQuality: 'Social media presence',
    biography: 'Kendall Jenner is an American model and media personality. She is a member of the Kardashian-Jenner family and gained fame through the reality TV show "Keeping Up with the Kardashians."'
  },
  {
    name: 'Cara Delevingne',
    age: 31,
    retired: false,
    brands: ['Burberry', 'Chanel', 'Yves Saint Laurent'],
    bestQuality: 'Eyebrows',
    biography: 'Cara Delevingne is an English model, actress, and singer. She is known for her distinctive eyebrows and has appeared in numerous fashion campaigns, as well as acting in several films.'
  },
  {
    name: 'Taylor Hill',
    age: 28,
    retired: false,
    brands: ['Victoria\'s Secret', 'Versace', 'Michael Kors'],
    bestQuality: 'All-American looks',
    biography: 'Taylor Hill is an American model and actress. She is best known for being a Victoria\'s Secret Angel and has walked the runway for numerous high-profile fashion brands.'
  }
]

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    // Create a list of brands with <li> tags
    const brandsList = member.brands
      .map(brand => `<li>${brand}</li>`).join('')

    card.innerHTML = `
      <div class="card">
        <div class="card-header">${member.name}</div>
        <div class="card-body">
         
          <p><strong>Age:</strong> ${member.age}</p>
          <p><strong>Retired:</strong> ${member.retired ? 'Yes' : 'No'}</p>
          <p><strong>Brands:</strong>
            <ul>
              ${brandsList}
            </ul>
          </p>
          <p><strong>Best Quality:</strong> ${member.bestQuality}</p>
          <p><strong>Biography:</strong> ${member.biography}</p>
        </div>
      </div>
    `

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards