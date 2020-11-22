var readlinesync=require("readline-sync")
var chalk=require("chalk")
var logupdate=require("log-update")
var username=readlinesync.question('Please enter your name to proceed: ')
console.log("Hey there, "+chalk.hex("#FFFF00").underline(username)+` WELCOME TO THE 'NARUTO' QUIZ...
Let's see what you got`)
var score=0
function quiz(question,answer){
  var useranswer=readlinesync.question(chalk.hex("#00FFFF")(question))
  if(useranswer.toLowerCase()===answer){
    console.log(chalk.bgGreen(chalk.black("Correct! You are awarded a point.")))
    score++
  } else{
    console.log(chalk.bgRed("Incorrect!"))
  }
}
var questions=[{
  question:`When is naruto's birthday?
  a) October 8 
  b) September 10
  c) September 8
  d) October 10\n`,
  answer: "d"
},{
  question:`Why Jiraiya did not prefer using Senin mode in his fight against pain?
  a) Because of his less chakra reserve
  b) He hadn't had his mastery over it yet
  c) Backlash on his looks for using it
  d) Senin mode wasn't enough to beat pain\n`,
  answer: "c"
},{
  question:`In Rock Lee's fight againts Gaara in Preliminary exam, How many gates did Rock Lee open?
  a) 5
  b) 4
  c) 6
  d) 3\n`,
  answer:"a"
},{
  question:`What was the name of the last technique Might Gai used against Madara in Fourth Great Ninja War?
  a) Sekizo
  b) Evening Elephant
  c) Night Gai
  d) Hirudora\n`,
  answer: "c"
},{
  question:`Who was touted as the fastest shinobi ever?
  a) Minato Namikaze
  b) Tobirama Senju
  c) Ay(Fourth Raikage)
  d) Naruto Uzumaki\n`,
  answer: "b"
},{
  question:`Which shinobi had 'flee on sight' order in Third Ninja war?
  a) Ay(Fourth Raikage)
  b) Itachi Uchiha
  c) Shisui Uchiha
  d) Minato Namikaze]\n`,
  answer: "d"
},{
  question:`Who did Naruto try out his Rasengan on for the first time?
  a) Kakashi Hatake
  b) Tenzou
  c) Yamato
  d) Kakuzu\n`,
  answer: 'd'
},{
  question:`Who created The Akatsuki?
  a) Tobi
  b) Orochimaru
  c) Yahiko
  d) Black Zetsu\n`,
  answer: "c"
},{
  question:`What was the inital name of the sasuke's team?
  a) Taka
  b) Taki
  c) Hebi
  d) Gama\n`,
  answer: "c",  
},{
  question: `How many ninja from Konoha went on to the third stage(after the preliminairies)of the Chunin Exams?
  a) 4
  b) 5
  c) 6
  d) 7\n`,
  answer: "b"
}
]
for (var i=0 ;i<questions.length;i++){
  currentquestion=questions[i]
  quiz(currentquestion.question,currentquestion.answer)
}
var index=0
var index=0
colors=[chalk.red("Your final score is: "+score),chalk.blue("Your final score is: "+score)]
const func =  () => {

  setInterval(() =>{
  index==0 ? (index=1):(index=0)
  logupdate(colors[index])
}, 500)
}
func()