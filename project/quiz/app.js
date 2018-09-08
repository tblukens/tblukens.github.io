var questions = [
  new Question("Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson", "Forrest Gump"], "George Washington"),
  new Question("What is the best way to greet someone on the phone?", ["What?", "Yeah, buddy!", "Shut up."], "Yeah, buddy!"),
  new Question("Who has intimate relations with squirrels?", ["Mitch", "Cody", "Everyone"], "Cody"),
  new Question("On what day do we usually get donuts?", ["Mondey", "Sundey", "Wednesdey"], "Wednesdey")
];


var quiz = new Quiz(questions);

QuizUI.displayNext();
