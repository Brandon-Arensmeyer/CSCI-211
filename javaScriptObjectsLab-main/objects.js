// Joke Object
var person = {
  name: "Malcolm Reynolds",
  vessel: "Sernity"
}

// document.getElementById("sandbox").textContent = person.name + " " + person.vessel;

var joke = {
  categories: [],
  created_at: "2020-01-05 13:42:27.496799",
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "Lpj9bMdWSvCMPvZWGhN7Dg",
  updated_at: "2020-01-05 13:42:27.496799",
  url: "https://api.chucknorris.io/jokes/Lpj9bMdWSvCMPvZWGhN7Dg",
  value:
    "Chuck Norris graduated from preschool, high school, and college before he was even born.",
};

var dateGen = new Date(joke.created_at);
document.getElementById("joke").textContent =  `${joke.value}`;
document.getElementById("generated").textContent =  `This joke was generated on ${dateGen.toLocaleDateString()}`;


var movie = {
  title: "Die Hard",
  cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
  reviewer: {
    revName: "Steve",
    stars: 4,
  },
};
// --- Using movie object
document.getElementById("title").textContent = movie.title;
var castElements = document.querySelectorAll(".cast");
for(var i = 0; i < movie.cast.length; i++){
  castElements[i].textContent = movie.cast[i];
}

movie.genre = "Christmas";
movie["rating"] = "R";

document.getElementById("review").textContent = `${movie.reviewer.revName} gives this
 movie ${movie.reviewer.stars} stars and his favorite ${movie.genre} movie. 
 It is rated ${movie.rating}.`;

// ----
var courses = {
  CSCI: {
    100: "Intro to Programming",
    105: "Computer Fluency",
    111: "Java Programming",
  },
  ITS: {
    210: "Network OS Desktop",
    218: "Network Security",
    224: "Intro to Linux",
  },
};

// Using the Courses Object
var courseElements = document.querySelectorAll(".course");
var elementIndex = 0;
for(i in courses.CSCI){
  courseElements[elementIndex].textContent = `${i} -- ${courses.CSCI[i]}`;
  elementIndex++;
  //console.log(k);
}

for(i in courses.ITS){
  courseElements[elementIndex].textContent = `${i} -- ${courses.ITS[i]}`;
  elementIndex++;
  // console.log(j);

}