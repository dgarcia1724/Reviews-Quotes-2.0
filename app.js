const jobPeople = [
  {
    img: "http://placekitten.com/200/200",
    title: "John",
    jobTitle: "Baller",
    summary: "I came to ball.",
  },
  {
    img: "http://placekitten.com/201/200",
    title: "Larry",
    jobTitle: "Bench",
    summary: "Where ball?",
  },
  {
    img: "http://placekitten.com/202/200",
    title: "Mary",
    jobTitle: "Singer",
    summary: "Lalalalala",
  },
  {
    img: "http://placekitten.com/203/200",
    title: "Paul",
    jobTitle: "Baller",
    summary: "I came to ball too.",
  },
  {
    img: "http://placekitten.com/204/200",
    title: "Andrew",
    jobTitle: "Top G",
    summary: "Superior genetics.",
  },
];

const img = document.querySelector(".img");
const title = document.querySelector(".title");
const jobTitle = document.querySelector(".jobTitle");
const quickSummary = document.querySelector(".quickSummary");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const surprise = document.querySelector(".surprise");

let currentIndex = 0;

function display() {
  img.src = jobPeople[currentIndex].img;
  title.innerHTML = jobPeople[currentIndex].title;
  jobTitle.innerHTML = jobPeople[currentIndex].jobTitle;
  quickSummary.innerHTML = jobPeople[currentIndex].summary;
}

display();

left.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = jobPeople.length - 1;
  }
  display();
});

right.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex > jobPeople.length - 1) {
    currentIndex = 0;
  }
  display();
});

surprise.addEventListener("click", function () {
  currentIndex = Math.trunc(Math.random() * jobPeople.length);
  display();
});
