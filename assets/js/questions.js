// Array containing a list of questions, each with possible answers and an associated image.
const questions = [
  {
    // Question about the 1994 Academy Award for Best Picture.
    "question": "Which movie won the Academy Award for Best Picture in 1994?",
    // Array of possible answers, each with a "text" property for the answer text and "correct" property to indicate the correct one.
    "answers": [
      { "text": "Pulp Fiction", "correct": false },
      { "text": "The Shawshank Redemption", "correct": false },
      { "text": "Forrest Gump", "correct": true },  // This is the correct answer.
      { "text": "The Lion King", "correct": false }
    ],
    // Associated image for the question.
    "image": "assets/images/forestgump.webp"
  },
  {
    "question": "Who played the character of Jack Dawson in Titanic?",
    "answers": [
      { "text": "Leonardo DiCaprio", "correct": true },  // This is the correct answer.
      { "text": "Brad Pitt", "correct": false },
      { "text": "Tom Cruise", "correct": false },
      { "text": "Johnny Depp", "correct": false }
    ],
    "image": "assets/images/leonardodicaprio.webp"
  },
  {
    "question": "Which director is known for 'Inception', 'The Dark Knight', and 'Interstellar'?",
    "answers": [
      { "text": "Christopher Nolan", "correct": true },  // This is the correct answer.
      { "text": "Steven Spielberg", "correct": false },
      { "text": "Martin Scorsese", "correct": false },
      { "text": "Quentin Tarantino", "correct": false }
    ],
    "image": "assets/images/batman.webp"
  },
  {
    "question": "In which movie does the quote 'May the Force be with you' appear?",
    "answers": [
      { "text": "Star Trek", "correct": false },
      { "text": "The Lord of the Rings", "correct": false },
      { "text": "Harry Potter", "correct": false },
      { "text": "Star Wars", "correct": true }  // This is the correct answer.
    ],
    "image": "assets/images/starwars.webp"
  },
  {
    "question": "Which actress played Katniss Everdeen in 'The Hunger Games' series?",
    "answers": [
      { "text": "Emma Watson", "correct": false },
      { "text": "Scarlett Johansson", "correct": false },
      { "text": "Anne Hathaway", "correct": false },
      { "text": "Jennifer Lawrence", "correct": true }  // This is the correct answer.
    ],
    "image": "assets/images/mockingjay.webp"
  },
  {
    "question": "Which 1994 film featured the song 'Hakuna Matata'?",
    "answers": [
      { "text": "The Lion King", "correct": true },  // This is the correct answer.
      { "text": "Aladdin", "correct": false },
      { "text": "Beauty and the Beast", "correct": false },
      { "text": "Pocahontas", "correct": false }
    ],
    "image": "assets/images/lionking.webp"
  },
  {
    "question": "Who directed 'Pulp Fiction'?",
    "answers": [
      { "text": "Quentin Tarantino", "correct": true },  // This is the correct answer.
      { "text": "Francis Ford Coppola", "correct": false },
      { "text": "Stanley Kubrick", "correct": false },
      { "text": "Ridley Scott", "correct": false }
    ],
    "image": "assets/images/quentin.webp"
  },
  {
    "question": "Which of the following best explains the purpose of using non-linear narratives in films like Memento (2000) or Pulp Fiction (1994)?",
    "answers": [
      { "text": "To disorient the audience and mirror the character’s psychological state", "correct": false },
      { "text": "To build suspense by revealing key plot points out of chronological order", "correct": false },
      { "text": "To encourage viewers to actively piece together the story themselves", "correct": false },
      { "text": "All of the above", "correct": true }  // This is the correct answer.
    ],
    "image": "assets/images/pf_uma.webp"
  },
  {
    "question": "In which movie does a computer hacker learn about the real world and its virtual counterpart?",
    "answers": [
      { "text": "Ready Player One", "correct": false },
      { "text": "Tron", "correct": false },
      { "text": "Blade Runner", "correct": false },
      { "text": "The Matrix", "correct": true }  // This is the correct answer.
    ],
    "image": "assets/images/matrix.webp"
  },
  {
    "question": "In The Dark Knight (2008), how does director Christopher Nolan use the Joker’s lack of a consistent backstory to enhance the character’s impact?",
    "answers": [
      { "text": "It creates a sense of mystery and unpredictability, making him more terrifying", "correct": true },  // This is the correct answer.
      { "text": "It allows the audience to empathize with his motivations", "correct": false },
      { "text": "It humanizes the Joker by showing different aspects of his past", "correct": false },
      { "text": "It distracts from the plot, focusing instead on chaos for the sake of chaos", "correct": false }
    ],
    "image": "assets/images/joker.webp"
  }
]
