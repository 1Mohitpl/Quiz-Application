const quizData = [
    {
      question: "what does the HTML stands for?",
      options: [
        "Hyper Transfer Markup Language",
        "HyperText Markup Language",
        "Hypertext Machine Language",
        "Hyperlink and Text Markup Language",
      ],
      correct: 0,
    },
  
    {
      question:
        " what is The property in CSS used to change the text color of an element?",
      options: ["bgcolor", "color", "All of the above", "background-color"],
  
      correct: 1,
    },
  
    {
      question: "The CSS property used to control the element's font-size is -",
      options: ["text-style", "text-size", "font-size", "None of the above"],
  
      correct: 2,
    },
    {
      question: "The HTML attribute used to define the inline styles is",
      options: ["class", "styles", "style", "None of the above"],
  
      correct: 2,
    },
  ];
  
  const Box = document.querySelector(".Box");
  const answersElem = document.querySelectorAll(".answer");
  console.log(answersElem);
  const [questionElem, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
      "#question, #option_1, #option_2, #option_3, #option_4"
    );
  // console.log(option_2);
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
  
    questionElem.innerText = `${currentQuiz + 1}: ${question}`;
    //  To get all the options
    options.forEach((curOption, index) => {
      // It is a dynamic way of accessing DOM elements.
      return (window[`option_${index + 1}`].innerText = curOption);
    });
  };
  
  loadQuiz();
  
  //? Step 4: Get Selected Answer Function on Button click
  
  const getSelected = () => {
    const answerElement = Array.from(answersElem);
    return answerElement.findIndex((curOption) => curOption.checked);
  };
  
  const deselectAnswers = () => {
    answersElem.forEach((curElem) => (curElem.checked = false));
  };
  
  submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelected();
    console.log(selectedOptionIndex);
  
    //   let's check if the answer is correct or not
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
      score = score + 1;
    }
  
    //   lets increment the currentQuiz value to get the next array elem
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      deselectAnswers();
      loadQuiz();
    } else {
      Box.innerHTML = `
      <div class="result">
      <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
      <p>Congratulations on completing the quiz! 🎉</p>
      <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
      </div>
    `;
    }
  });
  