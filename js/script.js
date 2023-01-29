//flGfQIPCSNXUZmLzGIbeMJHfL6gBDhuP
//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey



// let articles = [
//   {
//     id: 0,
//     autor: 'Riot',
//     title: `WHAT IS LEAGUE OF LEGENDS?`,
//     text: `League of Legends is often categorized as a MOBA, or multiplayer online battle arena, but League has a lot of different genre elements. MOBAs typically have RTS, or real-time strategy, components throughout the game. In a nutshell, League of Legends can be described as a MOBA that has two teams, five players each, fight against each other with an objective in mind. MOBAs, like League of Legends, often require more dexterity and strategy than lightning-fast trigger finger reactions.`,
//     src: 'img/dianaAV.png',
//     img: 'img/diana.png'
//   },
//   {
//     id: 1,
//     autor: 'Teemo',
//     title: 'TEEMO THE SWIFT SCOUT',
//     text: `
// Teemo is a legend among his yordle brothers and sisters in Bandle City. As far as yordles are concerned, there is something just slightly off about him. While Teemo enjoys the companionship of other yordles, he also insists on frequent solo missions in the ongoing defense of Bandle City. Despite his genuinely warm personality, something switches off inside Teemo's mind during combat so that the lives he must end while on patrol do not burden him. `,

//     src: 'img/TeemoAV.png',
//     img: 'img/teemo.png'
//   },
//   {
//     id: 2,
//     autor: 'Ahri',
//     title: 'AHRI THE NINE- TAILED FOX',
//     text: `Ahri’s origins are a mystery, even to her.
// She has no clue as to the history of her vastayan tribe—or their place among the rest—save for the twin gemstones she has worn her entire life. In fact, her earliest memories are of running with icefoxes in the northern reaches of Shon-Xan. Though she knew she was not one of them, they clearly saw her as something of a kindred spirit, and came to accept her within the pack.`,
//     src: 'img/AhriAV.png',
//     img: 'img/Ahri.png'
//   }

// ];


// let content = `<div class="content__inner">
//     <div class="content__item">
//       <div class="content__info someInfo">
//         <div class="someInfo__author">
//           <div class="someInfo__img"><img class="someInfo__ava" src="" alt=""></div>
//           <div class="someInfo__text"> <span class="color">in
//           </span>Runtera <span class="color">7 july</span> </div>
//         </div>
//         <div class="someInfo__title">
//           <h2 class="h2"></h2>
//         <p class="pagraf"></p></div>
         
//       </div>
//       <div class="content__img">
//         <img class="content__picture" src="" alt="">
//       </div>
//     </div>
//     <div class="content__bottom list">
//       <div class="list__text">
//    <a href="index2.html" class="list__js">START</a>
//         <p id="p">  12 min read Selected for you</p>
       
//       </div>
//             <div class="list__squares">
//              <img src="img/svg3.png" alt="">
//               <img src="img/svg1.png" alt="">
//               <img src="img/svg2.png" alt="">
             
//             </div>
//     </div>
//   </div>`

const contentik = document.querySelector('.content');



// articles.forEach((item) => {
//   let newArticle = content.replace('class="pagraf">', `class="pagraf">${item.text}`);
//   newArticle = newArticle.replace('"someInfo__ava" src=""', `"someInfo__ava" src="${item.src}"`);
//   newArticle = newArticle.replace('class="content__picture" src=""', `class="content__picture" src="${item.img}"`);
//   newArticle = newArticle.replace('class="h2">', ` class="h2">${item.title}`)
//   newArticle = newArticle.replace('class="someInfo__text">', `class="someInfo__text">${item.autor}`);
//   contentik.innerHTML += newArticle;


// })


fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=flGfQIPCSNXUZmLzGIbeMJHfL6gBDhuP')
.then((response) => response.json())
.then((result) => result.results.splice(7,3)
.forEach(item => {
  console.log(result.results)
  contentik.innerHTML += `<div class="content__inner">
    <div class="content__item">
      <div class="content__info someInfo">
        <div class="someInfo__author">
          <div class="someInfo__img"><img class="someInfo__ava" src="" alt=""></div>
          <div class="someInfo__text">${item.byline} <span class="color">in
          </span>${item.section} <span class="color">${item.published_date}</span> </div>
        </div>
        <div class="someInfo__title">
          <h2 class="h2"><a href="#">${item.title}</a></h2>
        <p class="pagraf">${item.abstract}</p></div>
         
      </div>
      <div class="content__img">
        <img class="content__picture" src="${item.multimedia[0].url}" alt="">
      </div>
    </div>
    <div class="content__bottom list">
      <div class="list__text">
   <a href="index2.html" class="list__js">Click to read</a>
        <p id="p">  12 min read Selected for you</p>

      </div>
            <div class="list__squares">
             <img src="img/svg3.png" alt="">
              <img src="img/svg1.png" alt="">
              <img src="img/svg2.png" alt="">
            </div>
    </div>
  </div>`
})).then(() => {
  const btn = document.querySelectorAll('.h2');
  const parentBtn = document.querySelector('.someInfo__title');
  // parentBtn.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (target.classList.contains('h2')) {
  //     btn.forEach((item, index) =>{
  //       if (target == item) {
  //         console.log(target)
  //       }
  //     } )
  //   }

  // })
  btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        document.location.href = 'index2.html';
    })
  })


})










// async function getTopStories() {
//   const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=flGfQIPCSNXUZmLzGIbeMJHfL6gBDhuP')
//   const respJson = await response.json();
//   // console.log(respJson);
//   respJson.result.splice(0, 3).forEach(item => {
//    contentik.innerHTML += `<div class="content__inner">
//     <div class="content__item">
//       <div class="content__info someInfo">
//         <div class="someInfo__author">
//           <div class="someInfo__img"><img class="someInfo__ava" src="" alt=""></div>
//           <div class="someInfo__text"> <span class="color">in
//           </span>Runtera <span class="color">7 july</span> </div>
//         </div>
//         <div class="someInfo__title">
//           <h2 class="h2">${item.title}</h2>
//         <p class="pagraf">${item.abstract}</p></div>
         
//       </div>
//       <div class="content__img">
//         <img class="content__picture" src="" alt="">
//       </div>
//     </div>
//     <div class="content__bottom list">
//       <div class="list__text">
//    <a href="index2.html" class="list__js">START</a>
//         <p id="p">  12 min read Selected for you</p>
       
//       </div>
//             <div class="list__squares">
//              <img src="img/svg3.png" alt="">
//               <img src="img/svg1.png" alt="">
//               <img src="img/svg2.png" alt="">
             
//             </div>
//     </div>
//   </div>`
//  })

// }
// getTopStories();