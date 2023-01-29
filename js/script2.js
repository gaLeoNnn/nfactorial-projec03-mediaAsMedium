const contentik2 = document.querySelector('.content2');


fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=flGfQIPCSNXUZmLzGIbeMJHfL6gBDhuP')
.then((response) => response.json())
.then((result) => {
  result.results.splice(7,3)
  .forEach((item) => {
    contentik2.innerHTML += `  <h3 class="title">${item.title}</h3>
  <p class="info">League of Legends is one of the world’s most popular video games, developed by Riot Games</p>
  <img src="${item.multimedia[0].url}" alt="" class="content2__img">
  <h3 class="title2">Objective</h3>
  <p class="info">Players work with their team to break the enemy Nexus before the enemy team breaks theirs. League of
  Legends is a complex game which involves both high-level strategy and fast-paced gameplay. Skilled
  players know how to beat the opponent in front of them, while keeping the macro-elements in mind to
  support their team to victory.
  One of the main goals is to destroy enemy structures like turrets. Turrets can deal a lot of damage, and if there are no
  other minions around, the turret will deal that damage towards that one champion if they remain in turret range. Players
  that attack an enemy champion under an enemy turret will become the new target for that turret, as long as no other ally
  champion has ‘turret aggro’. When attacking a turret, champions need as many minions attacking as possible. If a team
  destroys an enemy’s inhibitor, it will grant a super minion for five minutes.
</p>
  <div class="content2__img">
    <img src="img/Heart.png" alt="">
    <p class="heart">180 </p>
    <img src="img/Speech.png" alt="">
    <p class="heart">12</p>
    <img class="save" src="img/Bookmark.png" alt="">
  </div>`
  }) 
})


