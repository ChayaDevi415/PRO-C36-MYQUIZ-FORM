class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4'); 
    this.option5 = createElement('h4')
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What is your plan after completing coding classes in WhiteHat Jr Course   " );
    this.question.position(150, 80);
    this.option1.html("1: With the concepts learnt create new apps" );
    this.option1.position(150, 100);
    this.option2.html("2: Keep revising them " );
    this.option2.position(150, 120);
    this.option3.html("3: Teach others  " );
    this.option3.position(150, 140);
    this.option4.html("4: All of the above " );
    this.option4.position(150, 160);
    this.option5.html("5: Nothing" );
    this.option5.position(150, 180);
    

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350, 350);


    });
  }
}