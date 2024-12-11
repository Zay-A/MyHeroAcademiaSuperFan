// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp
// Transparent, Translucent, Opaque: https://www.mathsisfun.com/physics/images/transparent.svg
var screen = 1; // Default screen
arrowR = document.getElementById("arrowright");
arrowL = document.getElementById("arrowleft");
video = document.getElementById("vid");
p1 = document.getElementById("person1");
p2 = document.getElementById("person2");
T1 = document.getElementById("pText1");
T2 = document.getElementById("pText2");
OP = document.getElementById("OPENING");
LG = document.getElementById("logo");
// Function to switch between screens

function changeDeku() {
  screen = 2;
  p1.src = "images/deku.png";
  p1.setAttribute("class", "clickable2");
  T1.textContent =
    "Izuku is known for his determination, kindness, and bravery. While initially timid, his analytical mind and willingness to help others drive his growth. Throughout the series, he faces intense challenges, both physical and emotional, as he learns the responsibilities of being a hero. His journey is one of perseverance, self-discovery, and learning to believe in his potential, making him a symbol of hope and courage for others.";
  video.src = "https://www.youtube.com/embed/ZQiwN_Di3HU?si=EkLOmw6kguUGLhiw";
  p2.src = "images/toga.png";
  p2.setAttribute("class", "clickable2");
  T2.textContent =
    "Himiko Toga is a character from My Hero Academia (Boku no Hero Academia), created by Kohei Horikoshi. She is one of the main antagonists in the series and is affiliated with the League of Villains, a group of individuals who oppose the heroes and seek to destabilize society. Toga first appears in the Final Exams arc, but her backstory and motivations are gradually explored over the course of the series.";
  arrowR.setAttribute("onclick", "changeTodoroki()");
  document.getElementById("SMOKE").pause();
  document.getElementById("DECAY").pause();
  document.getElementById("FIRE").pause();
  document.getElementById("BFIRE").pause();
  document.getElementById("click").play();
  arrowL.setAttribute("onclick", "changeBakugou()");
}
function changeBakugou() {
  screen = 1;
  p1.src = "images/Bakugo.png";
  p1.setAttribute("class", "clickable2");

  T1.textContent =
    "Bakugo Katsuki is a character from My Hero Academia, created by Kohei Horikoshi. He's one of the main characters and a student at a place called U.A. High School, training to become a professional hero. Bakugo is known for his fiery personality, explosive quirk, and fierce ambition.";
  video.src = "https://www.youtube.com/embed/mcSdy6sylSg?si=KMBxKZu_ic6v7MRa";
  p2.src = "images/Shigaraki.png";
  p2.setAttribute("class", "clickable2");
  T2.textContent =
    "Shigaraki Tomura is one of the main antagonists in My Hero Academia and the leader of the League of Villains. He is a highly dangerous and complex character, known for his ruthless nature, powerful Quirk, and dark backstory. Shigaraki serves as one of the primary threats to both the heroes and society in the world of My Hero Academia.";
  document.getElementById("SMASH").pause();
  document.getElementById("KNIFE").pause();
  document.getElementById("FIRE").pause();
  document.getElementById("BFIRE").pause();
  arrowR.setAttribute("onclick", "changeDeku()");
  document.getElementById("click").play();
  arrowL.setAttribute("onclick", "changeTodoroki()");
}
function changeTodoroki() {
  screen = 3;
  p1.src = "images/Todoroni.png";
  p1.setAttribute("class", "clickable2");
  T1.textContent =
    "Shoto Todoroki is a major character in My Hero Academia. He is a student at U.A. High School and a member of Class 1-A. Shoto’s quirk, Half-Cold Half-Hot, allows him to control both ice and fire, with ice powers on his left side (inherited from his mother) and fire powers on his right side (inherited from his father). This powerful quirk makes him one of the strongest students in his class.";
  video.src = "https://www.youtube.com/embed/EVyOahcP6tw?si=1YWA6i6Qjfv1N-bu";
  p2.src = "images/Dabi.png";
  p2.setAttribute("class", "clickable2");
  T2.textContent =
    "Dabi Todoroki is a key antagonist in My Hero Academia and a member of the League of Villains. He is the older son of Endeavor and Rei Todoroki, making him Shoto Todoroki’s older brother. Dabi's real name is Touya Todoroki, and he has a tragic and intense backstory that intertwines with his family's history.";
  document.getElementById("SMASH").pause();
  document.getElementById("SMOKE").pause();
  document.getElementById("KNIFE").pause();
  document.getElementById("DECAY").pause();
  arrowL.setAttribute("onclick", "changeDeku()");
  document.getElementById("click").play();
  arrowR.setAttribute("onclick", "changeBakugou()");
}

function playAudio() {
  console.log("remove P2 pressed!");
  p1.setAttribute("class", "pressed");
  p2.setAttribute("class", "clickable2");
  LG.setAttribute("class", "clickable2");
  if (screen == 2) {
    document.getElementById("SMASH").play();
    document.getElementById("KNIFE").pause();
    document.getElementById("OPENING").pause();
    console.log("if");
  } else if (screen == 1) {
    document.getElementById("SMOKE").play();
    document.getElementById("DECAY").pause();
    document.getElementById("OPENING").pause();
    console.log("else if");
  } else if (screen == 3) {
    document.getElementById("FIRE").play();
    document.getElementById("BFIRE").pause();
    document.getElementById("OPENING").pause();
    console.log("else if");
  }
}
function playAudio2() {
  console.log("remove P1 pressed!");
  p2.setAttribute("class", "pressed");
  p1.setAttribute("class", "clickable2");
  LG.setAttribute("class", "clickable2");
  if (screen == 2) {
    document.getElementById("KNIFE").play();
    document.getElementById("SMASH").pause();
    document.getElementById("OPENING").pause();
    console.log("if");
  } else if (screen == 1) {
    document.getElementById("DECAY").play();
    document.getElementById("SMOKE").pause();
    document.getElementById("OPENING").pause();
    console.log("else if");
  } else if (screen == 3) {
    document.getElementById("BFIRE").play();
    document.getElementById("FIRE").pause();
    document.getElementById("OPENING").pause();
    console.log("else if");
  }
}
function playLogoAudio() {
  p1.setAttribute("class", "clickable2");
  p2.setAttribute("class", "clickable2");
  LG.setAttribute("class", "pressed");
  OP.play();
  document.getElementById("SMASH").pause();
  document.getElementById("SMOKE").pause();
  document.getElementById("KNIFE").pause();
  document.getElementById("DECAY").pause();
  document.getElementById("FIRE").pause();
  document.getElementById("BFIRE").pause();
}
// rename this function so it's name is describes what it does!
// then add your own code here!
// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
