/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY
let hashtag = '#';
let space = '&nbsp';
let lineS = '';
while(true) {
  height = Number(prompt("Please enter a number between 1 and 23."))
  if (height >= 1 && height <= 23 && Number.isInteger(height)) {
    for (let i = 0; i < height; i++) {

    for (let j = 0; j <= (height-2-i); j++) {
      lineS = lineS + space;
    }

    for (let k = 0; k <= (1+i); k++) {
      lineS = lineS + hashtag;
    }

    lineS = lineS + "<br>"
    }
    let div1 = document.getElementById("mario-easy-output")
    div1.innerHTML = "<code>" + lineS + "</code>";
    break;
  }
}

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  while (true){
    height=prompt("Please enter a valid height");
    height=Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    };
  };
  let i = 1;
  let hash ='#';
  let lines ="<code>";
  let spaceS =height-2;
  let split='&nbsp'+'&nbsp';
  while (i<=height){
    let a='';
    for(let j=0; j<=spaceS; j++) {
      a+='&nbsp;';
    }
    spaceS--;
    hash = hash + '#';
    lines = lines + a + hash + split + hash + "</br>";
    i++;
  }
  document.getElementById("mario-hard-output").innerHTML=lines;
  lines=lines+"</code>"

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let odd = 0;
  let even = 0;
  while (true){
    card=prompt("Enter your credit card number: ");
    if ((card.length==16 || card.length==15 || card.length==13) && Number.isInteger(Number(card))){
      break;
    }
  }
  for(let i = card.length-2;i>=0;i-=2) {
    let numbr=Number(card[i])*2;
    let stringNumber=numbr.toString();
    let sumNumber=0;
    for (let j=0;j<stringNumber.length;j++){
      sumNumber=sumNumber+Number(stringNumber[j]);
    }
    odd=sumNumber+odd;
    console.log(odd);
  }
  for(let k=card.length-1; k>=0;k-=2){
    odd=odd+Number(card[k])
  }
  console.log(odd);

  if (card.length==15 && (card[0]==3 &&(card[1]==7 || card[1]==4)) && (odd+odd)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
  }
  else if ((card.length==13 || card.length==16) && card[0]==4 && (odd+odd)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
  }
  else if (card.length==16 && (card[0]==5 && (card[1]==1 || card[1]==2 || card[1]==4 || card[1]==5)) && (odd+odd)%10==0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
  }
  else {
    document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>";
  }

  card=Number(card);

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let number = Math.floor((Math.random() * 1000 + 1).toFixed(0))
  console.log(number)
  let correct = prompt("Guess a number between 1 and 1000.")
  let guesses = 0;
  while (correct != number) {
    if (correct > number) {
      guesses++;
      correct = prompt("Guess lower!");
    } else if (correct < number) {
      guesses++;
      correct = prompt("Guess higher!");
    } else if (correct == number) {
      break;
    }
  }

  var p = document.getElementById("guess-output")
  p.innerHTML = "That's correct! It took you " + guesses + " attempts to guess the right number."

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  let stormPower;
  windspeed = prompt("Please enter a valid wind speed.");
  if (windspeed < 39){
    stormPower = "The skies are calm..."
  } else if (windspeed >= 39 && windspeed <= 73) {
    stormPower = "Tropical Storm."
  } else if (windspeed >= 74 && windspeed <= 95) {
    stormPower = "Category 1 Hurricane."
  } else if (windspeed >= 96 && windspeed <= 110) {
    stormPower = "Category 2 Hurricane."
  } else if (windspeed >= 111 && windspeed <= 129) {
    stormPower = "Category 3 Hurricane."
  } else if (windspeed >= 130 && windspeed <= 156) {
    stormPower = "Category 4 Hurricane."
  } else if (windspeed >= 157) {
    stormPower = "Category 5 Hurricane."
}

  var p = document.getElementById("hurricane-output")
  windspeed = Number(windspeed);
  p.innerHTML = stormPower;

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY


  let score1 = prompt("Enter the first score.")
  let score2 = prompt("Enter the second score.")
  let score3 = prompt("Enter the third score.")
  let score4 = prompt("Enter the fourth score.")
  let score5 = prompt("Enter the fifth score.")
  let score6 = prompt("Enter the sixth score.")

  score1 = Number(score1);
  score2 = Number(score2);
  score3 = Number(score3);
  score4 = Number(score4);
  score5 = Number(score5);
  score6 = Number(score6);

  scores = [score1, score2, score3, score4, score5, score6]
  scores.sort(function(a, b){return a - b});

  total = scores[1] + scores[2] + scores[3] + scores[4]
  console.log(scores)
  average = (total / 4)
  average.toFixed(2);
  avgScore = average.toFixed(2)

  var div = document.getElementById("gymnastics-output")
  div.innerHTML = "Discarded: " + scores[0] + ", " + scores[5] + "<br/>" + "Score: " + avgScore

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  while (true){
  		let testGrade=prompt("Enter your test score");
  		if(testGrade==-1){
  			break;
  		}
  		if(Number(testGrade)>=0 && Number(testGrade<=100)){
  			testTotal=Number(testGrade)+testTotal;
  			tests++;
  		}

  	}
  	while(true){
  		let quizGrade=prompt("Enter your quiz score");
  		if (quizGrade==-1){
  			break;
  		}
  		if(Number(quizGrade)>=0 && Number(quizGrade)<=100){
  			quizTotal=Number(quizGrade)+quizTotal;
  			quizzes++;
  		}
  	}
  	while(true){
  		let hwGrade=prompt("Enter your homework score");
  		if (hwGrade==-1){
  			break;
  		}
  		if(Number(hwGrade)>=0 && Number(hwGrade)<=100){
  			homeworkTotal=Number(hwGrade)+homeworkTotal;
  			homeworks++;
  		}
  	}
  	let testavg=(testTotal/tests).toFixed(2);
  	let quizavg=(quizTotal/quizzes).toFixed(2);
  	let hwavg=(homeworkTotal/homeworks).toFixed(2);
  	grade=(.6*testavg+.3*quizavg+.1*hwavg).toFixed(2);
  	document.getElementById("report-card-output").innerHTML="Tests: "+testavg+"</br>Quizzes: "+quizavg+"</br>Homework: "+hwavg+"</br>Grade: "+grade;

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
