// const clickedImg = document.querySelectorAll("img");

const antPicOne = {
  img:
    "https://ichef.bbci.co.uk/news/1024/cpsprodpb/124C/production/_93648640_ant.jpg",
  id: "one",
};
const antPicTwo = {
  img:
    "https://images.newscientist.com/wp-content/uploads/2019/10/16151942/cataglyphisbombycinasoldier1uniulmdouzfotohwolf.jpg",
  id: "two",
};

const antPicThree = {
  img: "https://daily.jstor.org/wp-content/uploads/2015/02/ants.jpg",
  id: "three",
};

let questionMk = {
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1920px-Question_mark_%28black%29.svg.png"};
let clickedImg = document.querySelectorAll("img");
let antPics = [antPicOne, antPicTwo, antPicThree];
let attempts = 0;
let numClicks = 0;
let firstClick = [];
let secondClick = [];

cardReset = () => {
        document.querySelectorAll("img").src = questionMk.img;
      }

clickedImg.forEach((img) => {
  img.addEventListener("click", () => {
    let randomPicAndId = antPics[Math.floor(Math.random() * antPics.length)];
    img.src = randomPicAndId.img;
    img.id = randomPicAndId.id;
    if (firstClick.length === 0) {
      firstClick.push(randomPicAndId.id);
    } else {
      secondClick.push(randomPicAndId.id);
      if (firstClick[0] === secondClick[0]) {
        antPics.splice(antPics.indexOf(randomPicAndId), 1)
        firstClick.shift(randomPicAndId.id);
        secondClick.shift(randomPicAndId.id);
        alert("match");
      } else {
          alert("try again")
          if (firstClick[0] != secondClick[0]) {
            firstClick.shift(randomPicAndId.id);
            secondClick.shift(randomPicAndId.id);
            clickedImg.forEach(cardReset);
          }
        }
      } 
    console.log(firstClick);
    console.log(secondClick);
    console.log(antPics);
  });
});
