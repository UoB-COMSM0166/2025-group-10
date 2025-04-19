# 2025-group-10
2025 COMSM0166 group 10
Game Link: https://editor.p5js.org/muler-hussel/sketches/3FtJ5jacn

## Lecture Notes

### Week 1: Game Selection Phase 1
This week, our focus was on coming up with ideas for our game project. After a lot of brainstorming and discussions, we finalized three potential game concepts. Each idea comes with a unique twist and its own set of challenges. We considered different gameplay mechanics, potential difficulties in implementation, and how to make each game engaging for players. It was a fun but challenging process, and now we are excited to move forward with refining and selecting the best concept to develop.

| Game                      | Description                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------|
| Kids go Down Stairs |The original game involves players controlling a character as they descend a series of stairs, avoiding obstacles and collecting rewards.<br> **Twist**: The theme is changed to "Angel Drop," where players navigate through fluffy clouds instead of stairs, with unique challenges and mechanisms like disappearing clouds, wind currents, or moving platforms.<br>**Development Challenges**: Designing dynamic cloud behaviors, integrating unique mechanisms, and balancing difficulty across levels.|
| Frogger-like Road Crossing| The original game involves a frog crossing busy roads and rivers while avoiding cars and other obstacles.<br>**Twist**: Pikachu occasionally appears to assist the frog by clearing paths or stunning obstacles with Thunderbolt.<br>**Development Challenges**: Integrating Pikachu's abilities seamlessly into the gameplay and designing interactions that balance difficulty while adding excitement. |
| Tile Matcher (Match-3 Game)|Players click or drag matching tiles to clear them and earn points.<br> **Twist**: Add special tiles like bombs or time-limited challenges to increase difficulty. <br>**Development Challenges**: Implementing matching mechanics and smooth animations.|
| Guess What I'm Saying | Players describe a word or phrase while others try to guess it within a time limit. Categories include movies, animals, famous people, and more. Faster guesses earn more points. <br> **Twist**:  Instead of just speaking, players may have to use gestures, drawings, or sound effects. Some modes add restrictions, like forbidden words or emoji-only clues, making the game more challenging. <br> **Development Challenges**:Creating an intuitive interface for different clue-giving methods, implementing multiplayer functionality, and balancing difficulty for all player levels.|
| Brick Breaker|Players control a paddle to bounce a ball and break bricks at the top of the screen. <br> **Twist**: Some bricks have special effects like speed changes or extra balls. <br>**Development Challenges**: Ensuring ball physics work smoothly.|
| Hellfire Escape|Players control an angel escaping from hell, avoiding monsters and traps while collecting energy to restore divine power.<br> **Twist**: The character can briefly fly but consumes energy.<br>**Development Challenges**: Balancing game pacing to make the escape both intense and engaging.|
| Space Shooter | Players pilot a spaceship, destroy enemies, and upgrade their equipment. <br> **Twist**: Players can recruit alien creatures as teammates, who provide buffs such as increased attack power or shields. <br> **Development Challenges**:Designing the teammate system and implementing diverse upgrade options.|
| Jumping Over Pits on a Bridge | The original game involves players controlling a character as they navigate across a bridge, jumping over pits to avoid falling.<br>**Twist**: The bridge collapses over time, and pits have hazards like wind or slowing obstacles.<br>**Development Challenges**: Build responsive jumping mechanics and random pit placement on a dynamic bridge. |
| Endless Runner | Players control a character that runs endlessly forward, avoiding obstacles and collecting power-ups to achieve high scores.<br>**Twist**: Players can switch between characters, such as superheroes or animals, each with unique abilities like flying, dashing, or bypassing obstacles, adding strategy and variety.<br>**Development Challenges**: Creating procedurally generated maps and balancing character abilities to ensure smooth and fair gameplay. |


---

### Week 2: P5.js & Agile Techniques
This week, we designed a simple yet fun drawing game that allows players to use the mouse to draw colorful circles on the canvas. The gameplay is very intuitive—players simply click to draw circles and can adjust the brush color by pressing different keys.

During the development process, we created a Kanban Board to manage project progress. We divided the work into different tasks, and by using the Kanban Board, we were able to clearly track the status of each task and ensure effective collaboration among team members.

Game Link:  https://editor.p5js.org/nickytsui1027/full/SlAafOFzd

KanBan Board: https://github.com/orgs/UoB-COMSM0166/projects/122

---

### Week 3: Game Demo Videos

#### 1. Angel Drop

Video link: https://youtu.be/rdkpm2Llshk?si=53pmZ8UEkNTFCre_

This game is all about quick reflexes and fast-paced action. The screen continuously scrolls downward, and players must guide their character down the stairs to avoid getting caught by the spikes at the top. If hit by the spikes, they lose health, and missing a step results in instant failure.

Different types of stairs have unique effects, adding variety and challenge. Some platforms might disappear, move, or even bounce the player unpredictably. The game is intense, highly reactive, and keeps players on edge with its rapid pace and unpredictable obstacles, making for an exciting and adrenaline-pumping experience.

#### 2. Frogger-like Road Crossing

Video link: https://youtu.be/M9n7DXvjcw8?si=FcxUdEGWT1FpQf-O

In Frog Cross Road, players must guide a small frog safely across a series of busy roads, rivers, and other hazardous environments. The screen continuously moves forward, pressuring players to make quick decisions to avoid getting left behind or hit by passing vehicles.

The game features various obstacles, such as cars, trucks, floating logs, and fast-moving rapids, each requiring precise timing to navigate. Some platforms move unpredictably, adding to the challenge. With its fast-paced gameplay, high tension, and increasing difficulty, Frog Cross Road is an exciting test of reflexes and strategy. The ever-changing environment and quick reaction requirements keep players engaged and on edge throughout the experience.

#### 3. Up Up Angel (Final decision)

Video link: https://youtube.com/shorts/dFYu5HwDuT4?si=URENKYaQuJJZ4qi2

"Up Up Angel" is a platformer game inspired by Doodle Jump, but with our own unique twist. Instead of an automatically bouncing character, players must manually jump using controls, adding a layer of strategy and challenge.

Our goal was to reimagine the classic jumping game with a celestial theme. In this version, players control an angel ascending toward the heavens, navigating through clouds while avoiding small creatures that block their path. We designed the game with elements representing heaven, such as floating platforms made of clouds and a pair of golden wings at the highest point, symbolizing the angel's final transformation.

By adding manual jumping mechanics, we made the game feel more interactive and engaging. Players must carefully time their jumps and plan their movements to reach their goal successfully. This project allowed us to experiment with game mechanics and level design, and we aimed to create a fun yet challenging experience with a distinctive angelic theme.


---

### Week 4: Object Oriented Design

#### Stakeholder List
- Internal: Owner, Developer, Marketing Team, Project Managers
- External: Customers, Potential Customers, Public, App Stores, Competitors

#### Epics
1. Improve player engagement through challenging mechanics 
2. Enhance happiness for player

#### User Stories
- As a busy working professional, I want simple but meaningful achievements, so that I can feel joy even with minimal effort.
- As a streamer, I want a game that is both challenging and entertaining, so that my audience stays engaged while watching my gameplay.
- As a student, I want a leaderboard system, so that I can compete with my classmates and see who gets the highest score.

#### Brief
During this requirements workshop, our team deeply explored Epics, User Stories, and Acceptance Criteria and applied these concepts to the requirements planning for our game, "Up Up Angel".

First, we learned that Epics are high-level requirements that group related user stories. For example, "making the game challenging" is one of our Epics, which includes mechanics like character movement, jumping, and dodging. This structure helps us organize requirements and keep the development direction clear.

Next, User Stories allow us to think from the player's perspective when defining game features. For instance, "As a player, I want a leaderboard system so that I can compete with my friends." This approach helps us focus on the user experience and ensures the game meets the needs of different types of players, such as streamers, working professionals, and students.

Finally, Acceptance Criteria define when a requirement is considered "done." For example, "Given that a player finishes a game session, when the score is calculated, then the leaderboard should update and display the player's rank." This clear criterion makes it easier for the development team to test and validate features.

Through this workshop, we not only gained a solid understanding of requirements analysis but also learned how to apply these concepts in the development process, ensuring that our game design is well-structured and aligned with player expectations.

---
### WEEK 8
[SUS and NASA TLX survey.xlsx](https://github.com/UoB-COMSM0166/2025-group-10/blob/main/SUS%20and%20NASA%20TLX%20survey.xlsx)

---    
### WEEK 10
Sustainability Impact Analysis of "UPUP ANGEL" 

Social Impact 

Sense of Community  
Q: How does the product/service affect individuals' sense of belonging?  
A: By playing together, teenagers can interact, share topics, and feel recognized by their peers. 
Trust  
Q: How does the product/service change users' trust in the company?  
A:  
Securely storing player data ensures data protection, increasing trust in the company.  
Quick and positive responses to player feedback improve user trust. 
Inclusiveness and Diversity  
Q: How does the product/service affect people's views of others?  
A: The game is fair for all players, regardless of age, gender, or race, reducing bias and promoting inclusiveness.  
Q: How does it impact users from different backgrounds, ages, education levels, or other differences?  
A: The game is open to everyone without restrictions. 
Equity  
Q: How does the system treat people differently?  
A: Game results depend entirely on personal performance, with no unfair internal mechanisms. 
Participation and Communication  
Q: How does the product/service change how people build social networks?  
A: The game provides conversation topics, encouraging interaction and communication.  
Q: How does the product/service change how people support, criticize, or argue with others?  
A:  
Positive: Game discussions improve players' communication and expression skills.  
Negative: Spending too much time on the game may reduce real-life social interactions. 
Cultural Impact 

Individual Impact 

Health  
Q: How does the product/service improve or harm physical, mental, or emotional health?  
A:  
Positive: Different difficulty levels allow easy completion, boosting confidence and achievement.  
Negative: Excessive play may damage eyesight and posture, affecting physical health. 
Lifelong Learning  
Q: How does the product/service affect people's abilities and skills?  
A: The game teaches players to achieve success through effort and repeated attempts, building patience and persistence. 
Privacy  
Q: How does the product/service expose (or protect) personal identity, location, or social relationships?  
A: No login is required, avoiding personal data collection and ensuring privacy protection. 
Safety  
Q: How does the product/service expose (or protect) people from physical harm?  
A: The game does not involve physical activity, so there is no direct risk of injury, but long play sessions may affect health.  
Q: What are the possible effects if the product/service is used unexpectedly?  
A: If used for gambling or unfair competition, it may harm players' mental health and fairness in the game. 

   
---

## Your Game

Link to your game [PLAY HERE](https://uob-comsm0166.github.io/2025-group-10/)

Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Our Group

![Description](Picture/IMG_5257%202.heic)


| Name              | Email                              | Username    |
|-------------------|----------------------------------|-------------|
| Bryant Lin       | [me24405@bristol.ac.uk](mailto:me24405@bristol.ac.uk) | Bryant0909  |
| Naiwen Tsui      | [rp24072@bristol.ac.uk](mailto:rp24072@bristol.ac.uk) | Naiwen1027  |
| Zhu Xuefei       | [ft24227@bristol.ac.uk](mailto:ft24227@bristol.ac.uk) | muler-hussel |
| Pinchun Shen     | [mw24258@bristol.ac.uk](mailto:mw24258@bristol.ac.uk) | PinChuns    |
| Chih Hsien Ho    | [kq23915@bristol.ac.uk](mailto:kq23915@bristol.ac.uk) | Cindy626    |
| Cyunwun Lin      | [cyunwunlin@gmail.com](mailto:cyunwunlin@gmail.com) | CarminaTW   |


## Project Report

### Introduction

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel?
  
  Our game is called "Up up Angels", originally inspired by NS-Shaft, which focuses on jumping down. However, while working on our game demo, we noticed a small angel illustration on a ruler and felt it would be a perfect fit for our main character. This led us to redesign the concept—since our protagonist is an angel, we decided to have him jump upwards instead. Only upon successfully completing the game does the angel grow wings and ascend to heaven, reinforcing the sense of achievement and aligning with the overall theme of the game.
  
### Requirements 

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop?

### Design
Based on our initial user stories and the use case diagram, we collaboratively designed the system architecture of our game by creating a detailed class diagram and sequence diagram. This process was essential to ensuring a solid understanding of the structure and flow of the game before moving into implementation. By working as a team and discussing every design decision, we were able to align our expectations and divide responsibilities more effectively.

#### Class Diagram
The class diagram represents a high-level overview of our object-oriented design and depicts the core classes used in the game, their attributes, methods, and relationships. At the center of our game logic is the Sketch class, which is responsible for controlling the flow of the game. It manages setup, draw cycles, user interactions, and oversees the initialization of other key classes.
One of the most important classes is the Player class, which encapsulates all player-related behaviors such as jumping, moving left or right, checking collisions, and handling life count. It interacts with a number of other classes throughout the game loop.
Clouds are also a critical component in the game, serving as platforms for the player to land on and move between. We implemented two types of clouds — static ones and moving ones— both inheriting from a common Cloud class. The MovingCloud class introduces horizontal motion logic and carries with it any object placed on top, ensuring consistent interaction.
Another important hierarchy in our game is the Objects class, which serves as a superclass for all interactable items within the game world. Subclasses include Monster, Danger, Halo, and Candy. Each of these subclasses defines its own behavior upon collision with the player. For instance, Danger and Monster can reduce the player's life if touched, whereas Candy can restore life. If player interacts with Halo, while player still has enough life, user will win the game.
All Objects instances are randomly generated on top of clouds. The game difficulty level determines the proportion and frequency of different objects (e.g., higher difficulty increases the number of moving clouds and dangerous objects). This structure makes the game dynamic and easily extensible.
The LifeHeart class is a utility class that visually represents the player’s remaining lives on the heads-up display. It is updated in real time as the player interacts with various objects.  

***Class Diagram***  
![Class Diagram](https://github.com/UoB-COMSM0166/2025-group-10/blob/main/docs/assets/readme/Updated%20Class%20Diagram.png)  

#### Sequence Diagram
After finalizing the class structure, we developed a sequence diagram to visualize the temporal interactions between these classes during game execution. This diagram begins with the display of the game’s starting interface, followed by the difficulty selection screen. Once a difficulty is selected, the Sketch class initializes instances of Player, Cloud, and Object classes according to the difficulty level settings.  
During the game loop, Player listens for user inputs to jump or move. As the player moves, the system checks for collisions with clouds and objects. If a collision occurs, the Player class calls the respective Object subclass method to handle the event (e.g., reducing life when hitting a Monster, or increasing score when collecting a Candy).
Meanwhile, the Sketch class continuously redraws the game scene using p5.js’s draw() function, updating the positions of all game elements. The LifeHeart class is called every frame to update the life display based on the player’s current state.  
Whenever the player reaches new heights, the shiftScreen() method in Sketch ensures that the player remains centered vertically by moving all clouds and objects downward, simulating an upward motion. This method also handles the recycling or removal of off-screen elements.  
***Sequence Diagram***  
![Sequence Diagram](https://github.com/UoB-COMSM0166/2025-group-10/blob/main/docs/assets/readme/Updated%20Sequence%20Diagram.png)  

#### Design Iteration and Agile Process
As we followed an agile development approach, our class and sequence diagrams were not static. Instead, we continuously revised and improved them as the game evolved. Early versions of the diagrams served as rough guides and allowed us to identify design issues early. As we added new features or refined gameplay mechanics, we updated the diagrams to reflect the current structure and ensure everyone on the team had a shared understanding of the system.  
The diagrams proved especially helpful when debugging or integrating features developed by different team members. They served not only as documentation but also as a communication tool within the team, allowing for clearer discussion on logic, flow, and potential improvements.  
Overall, our collaborative design approach — grounded in object-oriented principles and supported by UML diagrams — greatly contributed to the clarity, flexibility, and maintainability of our codebase.  

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

### Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice)
 
1.The ball bounces too fast.  
2.I hope the interface can be more refined.  
3.The stationary platforms could be longer.  
4.When the ball jumps onto a moving platform, it should not move along with it.(we don't choose)

- One quantitative evaluation (of your choice)

1.The character movement in our game isn’t smooth enough. We hadn’t noticed many of these issues before.
2.Without guidance, players are unable to play the game.

Our playtesters helped us notice many issues we had previously overlooked. They revealed that the character movement in our game isn’t smooth enough, which aligns with the results from our think-aloud sessions. Without guidance, as observers, we noticed that players had many questions and struggled to understand the game without team members’ instructions. This indicates that our game’s guidance and in-game object functions are not clear enough. Moving forward, we will add a game instruction page and incorporate character icons to ensure players can navigate the game smoothly without external guidance.

- Description of how code was tested. 

### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools did you use. Did you have team roles? Reflection on how you worked together. 

### Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
