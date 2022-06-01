const team = [
    {
        nome : "Wayne Barner",
        ruolo: "Fouder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },{
        nome : "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },{
        nome : "Walter Gordonr",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },{
        nome : "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },{
        nome : "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },{
        nome : "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];

const teamContainer = document.querySelector('.team-container');

for (let i = 0; i < team.length; i++){
    console.log(team[i].nome, team[i].ruolo, team[i].foto);

teamContainer.innerHTML += `<div class="team-card">
<div class="card-image">
  <img
    src="img/${team[i].foto}"
    alt="${team[i].nome}"
  />
</div>
<div class="card-text">
  <h3>${team[i].nome}</h3>
  <p>${team[i].ruolo}</p>
</div>
</div>`;
}