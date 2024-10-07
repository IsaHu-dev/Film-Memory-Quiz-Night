# Film Memory Quiz Night

Pitch: Welcome to Film Memory Quiz Night, a fun and engaging game designed to challenge your memory and sharpen your mind after a busy day! Suitable for all ages, from young learners to adults looking to keep their memory strong, this game offers an enjoyable way to relax in the evening while exercising your cognitive abilities.
 Film Memory Quiz Night is designed to be played in the evening, allowing you to relax, reflect and reminisce about film after a full day of activities
. With a mix of fun questions and visual prompts, this game is not only entertaining but also a great way to keep your mind active. Try it tonight and enjoy a refreshing brain challenge!


The Memory Quiz Night is a fun event where people can test how much they remember about popular movies. It's a great way to enjoy some friendly competition while sharing a love for films. Whether you're at home, in a pub, or at a special venue, the quiz is designed to bring people together to laugh, talk about favorite films, and have a great time. With trivia questions and memorable movie moments, it’s perfect for movie lovers of all kinds!

The web app works across all platforms such as your mobile device, laptop and desktop.

## Features 

- The Film Memory Quiz Night is designed with a clean and intuitive interface using HTML, CSS, and JavaScript, making it easy for users of all ages to engage. The interface displays questions and answers in a clear and simple way, with buttons for selecting answers and navigating through the quiz.

### Existing Features

- __Restart Functionality__

  - The quiz includes a handy "Restart Game" button that allows players to reset and start over at any point during the quiz. This feature ensures participants can try again or play multiple times, enhancing the replayability of the game.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![RESTART](https://github.com/IsaHu-dev/Film-Memory-Quiz-Night/blob/main/media/restart.png)

- __Interactive Answer Feedback__

  - When a participant selects an answer, the system immediately provides feedback. Correct answers turn green, and incorrect answers turn red, offering a clear indication of success. 
  - Additionally, if the correct answer is selected, a related image from the film is displayed, enriching the quiz with multimedia elements.

![ANSWER FEEDBACK](https://github.com/IsaHu-dev/Film-Memory-Quiz-Night/blob/main/media/dicaprio.png)

- __Real-Time Scoring and Results__

  - The quiz includes a real-time scoring system that tracks how many correct answers a player has given. At the end of the quiz, the player’s score and percentage are displayed in a result section, providing clear feedback on performance.

![REALTIME SCORE](https://github.com/IsaHu-dev/Film-Memory-Quiz-Night/blob/main/media/realtimescore.png)

- __Registration and Score Submission__

  - Once the quiz is completed, participants can register their scores through a “Register & Send Score” button. This feature redirects users to a registration page, allowing them to input their details and submit their final score and percentage. They can register and submit via an email form.

![REGISTRATION PAGE](https://github.com/IsaHu-dev/Film-Memory-Quiz-Night/blob/main/media/register.png)
- __Visual Media Integration__ 

  - The quiz supports the display of images related to the films, providing a visually appealing experience. Correct answers are accompanied by relevant images from the film, making the quiz more engaging and enjoyable for participants. The visual image cards are prompted by a correct answer and it's aims is to stimulate your memory. These cards help you stay engaged and strengthen your memory connections, similar to methods used in psychological studies.

![VISUAL MEMORY CARDS]
- __Mobile and Desktop Compatibility__

  - The quiz has been designed to be responsive, ensuring it works well on both mobile devices and desktops. The flexible layout adapts to different screen sizes, making it suitable for players on the go or at home on larger screens.

![RESULTS SCREEN]

- __Interactive Result Screen__

  - After completing the quiz, players are directed to a result screen that shows their performance, including their final score and percentage. Players can either choose to register their score or play again, enhancing engagement.

  - __UX DESIGN__

  - After completing the quiz, players are directed to a result screen that shows their performance, including their final score and percentage. Players can either choose to register their score or play again, enhancing engagement.


- __Summary__
 - The Film Memory Quiz Night offers an engaging and interactive experience with features like real-time feedback, visual elements, scoring systems, and seamless navigation. Whether you're playing on a mobile device or desktop, the quiz provides an accessible, fun, and challenging environment for movie lovers to test their knowledge and enjoy a game night with friends or family.

### Features Left to Implement

- Add a user dasboard for users to check their scores every month on a subscription basis.

## Testing 

The Film Memory Quiz Night web application was successfully tested and met all functional and usability requirements. During testing, the quiz consistently loaded questions and answers without errors, and users received immediate feedback with visual cues for correct and incorrect answers. 

The Film Memory Quiz Night web application was thoroughly tested across multiple major browsers, including Firefox, Safari, Microsoft Edge, and Chrome. In all cases, the application performed seamlessly, with no significant differences in functionality or user experience. 

The quiz loaded quickly, and all interactive elements, such as buttons, answer selections, and the display of image cards, worked consistently across these browsers. 

Additionally, the real-time scoring and final result display were accurate in each environment. The application's responsive design also adapted well to different screen sizes, ensuring a smooth experience on both desktop and mobile browsers. This confirms that the web application is fully compatible and operates reliably across all major browsers.



In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fisahu-dev.github.io%2FFilm-Memory-Quiz-Night%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fisahu-dev.github.io%2FFilm-Memory-Quiz-Night%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JSHINT: Fixed errors, now successfully passed the JShint validator. Please see screenshot below.
  [JSHINT](https://github.com/IsaHu-dev/Film-Memory-Quiz-Night/blob/main/media/jshint_validation.png)
  

### Unfixed Bugs

A bug was fixed in questions.js early on in the development of the web app. It was a syntax error. The bug resulted in an "Unexpected end of input". This is now fixed and the questions follow on, once a question is answered. There are presently no bugs in the web application.

## Deployment

The site was deployed to GitHub Pages through the Gitpod environment. The deployment process involves the following steps:

  - Commit changes to the repository with descriptive commit messages using Git, which are then pushed to GitHub.
  
  - Navigate to the "Actions" tab on GitHub to monitor the deployment workflow. Upon successful deployment, the GitHub Pages site will automatically refresh, and a link (next to the deploy branch) will appear, confirming that the deployment was completed successfully.

The live link can be found here - [Deployed link](https://github.com/IsaHu-dev/Film-Memory-Quiz-Night)

## Credits 

  -  I used this tutorial as a rough guide:(https://www.youtube.com/watch?v=eQxcuCMNtFM) I have taken the structure of this tutorial and written my own code. 
  
  - Javascript resources https://javascript.info/, [FreeCodeCamp](https://www.freecodecamp.org/learn/) - free course
  
  - Learning Javascript book. Third Edition. O'Reilly. Author Ethan Brown. [FreeCodeCamp](https://www.freecodecamp.org/learn/) - git free course

  - Vector Graphics used as image cards are from Vecteezy. [Vecteezy](https://tinyurl.com/y4bx6umt) 

  
In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site

