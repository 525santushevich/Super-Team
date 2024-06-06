const teamMembers = [
  {
    name: 'Naomi Campbell',
    img: MediaSession.jpg,
    age: 54,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Cindy Crawford',
    position: 'Defender',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Adriana Lima',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Gisele Bundchen',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Yasmeen Ghauri',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Janice Dickinson',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Claudia Schiffer',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Shalom Harlow',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Heidi Klum',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Kendall Jenner',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Cara Delevingne',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  },
  {
    name: 'Taylor Hill',
    img: MediaSession.jpg,
    age: 36,
    activelyPlaying: true,
    position: 'Forward',
    skills: ['Dribbling', 'Shooting', 'Passing'],
    strengths: 'Ball control',
    weaknesses: 'Heading Ability',
    biography:
      'Lionel Messi is considered one of the greatest football players of all time...'
  }
]

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    //styling card based on position:
    let backgroundColor

    switch (member.position.toLowerCase()) {
      case 'forward':
        backgroundColor = '#FFB6C1' // Yellow for forwards
        break
      case 'midfielder':
        backgroundColor = '#28a745' // Green for midfielders
        break
      case 'defender':
        backgroundColor = 'pic' // Blue for defenders
        break
      case 'goalkeeper':
        backgroundColor = '#dc3545' // Red for goalkeepers
        break
      default:
        backgroundColor = '#6c757d' // Gray for other positions
    }
    card.style.backgroundColor = backgroundColor

    //Create a list of Skills with <li> tags
    const skillsList = member.skills
      .map(skill => `<li> ${skill} </li>`).join('')

    card.innerHTML = `
            <div class = "card">
                <div class = "card-header"> ${member.name}</div>
                <div class = "card-body">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong> 
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards()
