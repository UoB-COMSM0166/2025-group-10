# 2025-group-10
2025 COMSM0166 group 10
Game Link: https://editor.p5js.org/muler-hussel/sketches/3FtJ5jacn

## Contents

- [1. Our Team](#1-our-team)
- [2. Introduction](#2-introduction)
- [3. Requirements](#3-requirements)
- [4. Design](#4-design)
- [5. Implementation](#5-implementation)
- [6. Evaluation](#6-evaluation)
- [7. Process](#7-process)
- [8. Sustainability, Ethics, and Accessibility](#8-sustainability-ethics-and-accessibility)
- [9. Conclusion](#9-conclusion)


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

## 1. Our Team

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

## 2. Introduction

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel?
  
Our game, Up Up Angel, is inspired by the classic mobile game Doodle Jump, but we adapted it for desktop platforms by changing the auto-jumping mechanic into manual jumping. This gives players more control and creates a deeper sense of focus and challenge.

To give the game a unique atmosphere, we introduced the theme of heaven and hell. The player controls a small angel who jumps upward through floating clouds, avoiding ghosts and hellfire while collecting candies that restore health. These elements represent both the obstacles and moments of support we encounter in life.At the top of the game, the angel can collect a glowing halo, symbolizing their final transformation into a true angel. This moment not only marks the player’s success but also represents a deeper message: with persistence and effort, people can reach their goals and ideals.

Our goal was to design a game that feels positive and healing, yet still challenging. By combining symbolic visuals with simple but engaging mechanics, Up Up Angel offers players an experience that is both uplifting and meaningful.
  
## 3. Requirements 

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop?

#### Stakeholder List
- Internal: Owner, Developer, Marketing Team, Project Managers
- External: Customers, Potential Customers, Public, App Stores, Competitors

#### Use case diagrams

![Class Diagram](https://github.com/UoB-COMSM0166/2025-group-10/blob/main/docs/UseCaseDiagram.jpg)  

#### Epics
1. Improve player engagement through challenging mechanics 
2. Enhance happiness for player

#### User Stories
- As a busy professional, I want to experience simple yet meaningful achievements so that I can feel happy and fulfilled, even during short breaks.
- As a player, I want the game to provide a sense of accomplishment and offer multiple difficulty levels, so I can enjoy both relaxation and progressive challenges.
- As a streamer, I want the game to be both challenging and entertaining, so that my viewers remain engaged and enjoy watching my gameplay.

#### Ideation process
In the early stages of our project, our team engaged in in-depth discussions to identify a meaningful direction for our game. We observed that in modern life, many people lead busy schedules and face various pressures from work, studies, or personal life. With this in mind, we aimed to create a game that is not only simple and easy to engage with, but also provides players with a sense of relaxation and accomplishment.

From the beginning, our team unanimously agreed that we wanted to design a game that would serve as a soothing and slightly challenging experience—a short yet satisfying escape from the stress of everyday life. As such, we established two key design principles for our game: a cute, comforting visual style, and a pastel-colored aesthetic that aligns with a calming emotional tone.

Initially, we considered developing a lighthearted game inspired by the classic "NS-Shaft" mechanics—simple, casual, and fun. However, once we decided that the main character would be a small angel, we re-evaluated the gameplay direction. We realized that having the angel jump upward rather than downward made much more thematic sense, reinforcing the idea of ascending to heaven—a concept inherently associated with peace, joy, and healing.

This shift also inspired us to design the game environment around a sky-themed backdrop. Upon successfully completing the game, players are rewarded with a final scene resembling "heaven," creating a full-circle emotional journey that embodies our design intention.

To ensure broader appeal and replayability, we designed three difficulty levels, allowing players to experience a sense of challenge and achievement, in addition to the calming aspects. We also incorporated different in-game elements (e.g., small objects and obstacles) based on each difficulty level to enhance immersion and user engagement.

#### Brief
During this requirements workshop, our team deeply explored Epics, User Stories, and Acceptance Criteria and applied these concepts to the requirements planning for our game, "Up Up Angel".

First, we learned that Epics are high-level requirements that group related user stories. For example, "making the game challenging" is one of our Epics, which includes mechanics like character movement, jumping, and dodging. This structure helps us organize requirements and keep the development direction clear.

Next, User Stories allow us to think from the player's perspective when defining game features. For instance, "As a player, I want a leaderboard system so that I can compete with my friends." This approach helps us focus on the user experience and ensures the game meets the needs of different types of players, such as streamers, working professionals, and students.

Finally, Acceptance Criteria define when a requirement is considered "done." For example, "Given that a player finishes a game session, when the score is calculated, then the leaderboard should update and display the player's rank." This clear criterion makes it easier for the development team to test and validate features.

Through this workshop, we not only gained a solid understanding of requirements analysis but also learned how to apply these concepts in the development process, ensuring that our game design is well-structured and aligned with player expectations.

## 4. Design
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

## 5. Implementation

The development of Up Up Angel involved translating a high-level conceptual design into a fully functional game using p5.js and object-oriented programming. The implementation centered around modularizing behaviors into well-structured classes such as `Player`, `Cloud`, and `Objects`, and managing complex game logic through a central `Sketch` controller. While the overall structure was guided by our class and sequence diagrams, several challenges emerged during development, particularly regarding **manual jumping and physics**, **collisions and interactions**, and **difficulty scaling with object spawning**.

### 1. Implementing Manual Jumping & Gravity Physics
One of the biggest departures from Doodle Jump was replacing automatic bouncing with **manual jumping**. This meant we had to implement realistic and responsive physics, including vertical momentum, gravity, and jump timing. We created a `Player` class that included attributes like `velocity`, `gravity`, `jumpPower`, and flags such as `isJumping` and `isControlled`. The `jump()` method manipulated these values to simulate upward motion, while the `update()` method handled gravitational pull.
What made this particularly challenging was ensuring that the jump felt **responsive but forgiving**. If the gravity was too strong, jumps felt too short. If too light, the game lost tension. We iteratively tested different values and tweaked jump acceleration curves. Additionally, edge cases—like jumping from moving clouds—required extra care to avoid jittery or unnatural motion. Integrating cloud offsets (from `MovingCloud`) into the player's position dynamically was key to achieving fluid interactions.

### 2. Collision Detection & Object Interaction
The second major challenge involved **detecting and handling interactions between the player and in-game objects**, especially given our wide variety of interactive elements. Each `Objects` subclass—`Candy`, `Danger`, `Monster`, `Halo`—triggered unique behaviors upon collision. For example, `Candy` increased life, `Monster` reduced it, and `Halo` signaled the win condition. These interactions were handled through the `collidesWith(obj)` method in `Player`, which dynamically checked overlap based on coordinates and bounding boxes.
Complications arose in maintaining **fair and predictable collisions**, particularly when moving platforms carried objects. We needed to synchronize object motion with their cloud parent to avoid misalignment. Moreover, stacking multiple objects on a cloud meant the collision zone had to be dynamically calculated and prioritized (e.g., if a cloud had both a `Candy` and a `Danger`, order of resolution mattered). We addressed this by standardizing object size and updating the cloud’s `y` offset logic, which significantly reduced unexpected behavior.

### 3. Game Difficulty and Dynamic Spawning Logic
Our game supported three difficulty levels—each altering the frequency of `MovingClouds` and harmful objects like `Monster` or `Danger`. This system was controlled in the `Sketch` class, which dynamically initialized arrays of `Cloud` and `Objects` during game setup and periodically during the `shiftScreen()` routine.
The challenge here was to maintain **balance and pacing**. In higher difficulties, too many hazards made the game feel unfair; in lower ones, players quickly lost engagement. We wrote conditional logic based on difficulty settings to fine-tune object spawn rates, cloud speeds, and object types. Moreover, we implemented randomized offsets and type assignments to prevent pattern repetition, which greatly improved replayability.
An interesting problem emerged when combining `MovingClouds` with `Monster` objects. Initially, monsters moved independently of the cloud they stood on, leading to floating or teleporting behavior. To fix this, we made `Monster` and other object subclasses inherit their cloud's movement state on each frame, giving the illusion of cohesion. This solution preserved both visual consistency and mechanical fairness.

In summary, the implementation phase of Up Up Angel demanded careful engineering in physics, game logic, and dynamic content generation. Through agile development and repeated testing, we transformed a peaceful visual theme into a game with rich interactivity and subtle emotional depth. Despite the challenges, the structured approach via class diagrams and a shared vision within the team helped us produce a cohesive and playable game.


## 6. Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice)
 
Evaluation Report

1. Think Aloud Evaluation


Method

We conducted a Think Aloud session to observe players' real-time thoughts and actions. A facilitator explained the task, and participants were encouraged to verbalize their thoughts while playing. Two observers recorded player behaviors and comments.



Observations

Participants made the following comments during the playtest:

１．The ball bounces too fast.

２．I hope the interface can be more refined.

３．The stationary platforms could be longer.

Note: We decided not to focus on the fourth comment about moving platforms.



Insights

Players hesitated and made trial-and-error movements at the start, indicating insufficient feedback and unclear physical mechanics. The fast bounce and rough interface design disrupted the immersion, while short platforms increased difficulty unnecessarily.


2. Heuristic Evaluation
   

Method

We invited a member from another team to act as an evaluator. They were asked to play the game independently and record usability issues based on Nielsen’s 10 heuristic principles. No instructions or help were provided during the session.



Observations

The evaluator identified the following issues:

１．The character movement in our game isn’t smooth enough. We hadn’t noticed many of these issues before.

２．Without guidance, players are unable to play the game.



Insights

These findings suggest violations of multiple usability heuristics, including "visibility of system status," "help and documentation," and "consistency and standards." The lack of clear instructions and feedback led to confusion during gameplay.



Summary and Action Plan

Our playtesters helped us notice many issues we had previously overlooked.

They revealed that the character movement in our game isn’t smooth enough, which aligns with the results from our think-aloud sessions.

Without guidance, we observed that players had many questions and struggled to understand the game without instructions.

This shows that our game’s guidance and object functionalities are not clear enough.



Moving forward, we will:

Add an instruction page at the beginning of the game

Use icons to indicate character abilities and object functions

Refine visual design and level layout to improve clarity and usability

These improvements aim to reduce the learning curve and enhance the overall player experience.

- One quantitative evaluation (of your choice)


- Description of how code was tested. 

## 7. Process 

In our team, effective collaboration and consistent communication were essential to ensuring a smooth and successful development process. Early on, we decided to divide our team into two sub-groups based on skillsets: three members focused on programming—covering areas such as game logic, functionality, and system integration—while the other three specialized in visual design, including character art, environment graphics, animations, and user interface elements. This division of labor allowed each sub-group to concentrate on what they did best, while still maintaining frequent contact and discussion to make sure all parts of the game fit together cohesively.

### Tools
To manage our workflow, we used a Kanban board to organize tasks and track progress. This board included columns like "Backlog", "In Progress", and "Done", which gave us a clear and up-to-date overview of our project’s status. Each team member updated their tasks regularly, which helped everyone stay aligned, avoid duplicate efforts, and maintain momentum throughout the development cycle. The Kanban approach was especially helpful when juggling multiple components at once, from writing scripts and coding game mechanics to designing character assets and animations.

Communication was primarily handled through WhatsApp, which proved to be a reliable and flexible platform for coordinating schedules, sharing quick updates, and discussing issues as they came up. Since we all had different personal and academic commitments, scheduling could have been a challenge—but WhatsApp allowed us to quickly reach consensus on meeting times and maintain a steady flow of informal check-ins. We also used it to post reminders, ask for feedback, and brainstorm creative ideas during quieter development periods.

Our GitHub repository served as the central hub for all project-related files. Developers pushed code regularly and used pull requests to propose changes, which were reviewed by at least one other team member to maintain code quality and catch bugs early. On the design side, completed visual assets were uploaded in an organized folder structure, ready for integration. This system enabled parallel development: while the artists finalized sprite sheets or interface components, the coders could simultaneously implement gameplay features or fix bugs without waiting. We also made use of GitHub Issues to document and assign bugs, feature requests, or tasks that required collaboration between teams.

### Strengths vs Challenges
One of the key strengths of our team was our willingness to communicate across roles. Even though we had designated responsibilities, there was constant feedback exchanged between designers and developers. For example, the design team would often suggest UI improvements based on how game mechanics looked in action, and the coders would adapt certain features to better showcase visual assets. These iterative loops helped us refine the game's look and feel and avoid the disconnect that sometimes happens between programming and art.

Despite having a well-structured workflow, we encountered several challenges along the way. One of the main difficulties was synchronizing the work between the coding and art teams. At times, assets were not delivered in the format or resolution the developers expected, leading to delays and last-minute adjustments. Another challenge was coordinating schedules, especially during exam periods or when members had overlapping deadlines for other coursework. There were also moments where miscommunication caused duplicated work or unclear task ownership. To address this, we gradually improved our documentation practices and began leaving clearer notes on the Kanban board and GitHub commits, which significantly reduced confusion over time.

Looking back, our process was not perfect, but it was highly collaborative, flexible, and built on a strong foundation of mutual respect and shared responsibility. Every member contributed to both the execution and the creative direction of the game. This experience has deepened our understanding of team dynamics and taught us the importance of proactive communication, task visibility, and adaptability in software projects.


## 8. Sustainability, Ethics, and Accessibility
<br>

### 🌱 Environmental

| Category                    | Description                                                                                           |
|---------------------------|-----------------------------------------------------------------------------------------------------------|
|  Digital Product vs. Physical Goods |Up Up Angel is a purely digital game, which means it avoids the environmental footprint associated with manufacturing, packaging, and distributing physical toys or board games. By existing entirely online, it reduces the demand for plastics, paper, and shipping logistics that contribute to carbon emissions.|
|  No Extra Hardware Required | Players can enjoy the game on devices they already own, such as their everyday computers. There’s no need for extra consoles or special equipment, which not only makes the game more accessible but also avoids unnecessary electronic consumption. Supporting existing hardware encourages people to make the most of what they have, rather than constantly upgrading. |
| Low Carbon Design | The game features hand-drawn visuals and simple image assets, which are intentionally kept lightweight. This artistic choice not only gives the game a charming and approachable look, but also keeps its system requirements low. As a result, it runs smoothly on older or less powerful devices, helping to extend their usable life and reduce the amount of electronic waste generated. |
<br>

### 🧠 Individual

| Category                    | Description                                                                                              |
|---------------------------|-----------------------------------------------------------------------------------------------------------|
|  Emotional Comfort |We created Up Up Angel with a simple goal: to bring people a small moment of peace. Inspired by the carefree joy of games we played as kids, it’s meant to feel light, familiar, and gently uplifting—something to turn to after a long day.|
|  Sense of Achievement | The game offers different difficulty levels—Heaven’s Blessing, Sacred Trial, and Divine Judgement—so players can push themselves at their own pace. Clearing each level feels like a small win, building confidence one step at a time. |
| Personal Reflection |There’s something quietly meaningful about helping the angel move upward. As players go higher, they might start thinking about their own journey—what they’ve been through, where they’re headed. The game’s soft visuals and gentle pace give players a chance to pause and reflect, even if just for a moment. It’s a space to breathe, to think, or to simply feel a little lighter.|
|  Low-Stress Design | Up Up Angel isn’t about winning quickly or being perfect. It doesn’t punish failure harshly, and there’s no pressure to rush. This makes it a comforting experience, especially for players who might be feeling anxious or just need a quiet escape. It’s a game that’s kind to its players—where trying again is enough, and where the journey matters more than the score. |
<br>

### 🫂 Social

| Category                    | Description                                                                                              |
|---------------------------|-----------------------------------------------------------------------------------------------------------|
|  Inclusive Character Design |The main character in Up Up Angel doesn’t have a fixed gender, culture, or even a realistic appearance—it’s actually a gingerbread person. That was a conscious choice. By keeping the design open and playful, we wanted to create space for all kinds of players to see themselves in the game. No one should feel left out because of who they are, and this small design decision is one way we try to make the experience feel welcoming to everyone.|
|  Sharing Positive Values |At its heart, Up Up Angel is about rising above—not just in the game, but in life. As the angel jumps higher, dodging dark creatures and picking up sweets along the way, it quietly reflects the ups and downs we all go through. There’s a deeper message behind the simple gameplay: be brave, grow through struggle, and don’t let negativity pull you down. Reaching the top and earning a halo isn’t just a win—it’s a little reminder that we can all become our best selves, one step at a time.|
|  A Chance for Emotional Connection | Up Up Angel carries quiet themes of growth, falling and rising again, and becoming who you're meant to be. It’s more than just a game—it can spark real conversations. Friends might start by talking about their scores or favorite moments, but end up sharing stories about their own lives, struggles, or dreams. In that way, the game becomes a gentle bridge between people, opening space for empathy and connection. |


## 9. Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work.

Looking back on the development process of Up Up Angel, this project provided a valuable and multifaceted experience for our team, combining both technical learning and creative problem-solving. We gained hands-on insight into the complexities of game development within a collaborative environment—from the ideation phase to system modeling, requirements analysis, and user-centered design.

One of the most important lessons we learned was the significance of effective communication in teamwork. Although software engineers often work independently in front of computers, we found that successful project execution required frequent and transparent communication—whether about gameplay design, individual responsibilities, or time management. Establishing clear expectations and continuously syncing progress helped us reduce misunderstandings and improve team efficiency.

Another key reflection was on the challenge of transforming abstract ideas into concrete, actionable plans. In the early stages, the team had many creative ideas for the game, but only a few were ultimately implemented. We realized that without a clear evaluation process, we often spent considerable time revising or discarding ideas mid-way through development. As a result, we learned the importance of brainstorming freely during ideation, but also the need to prioritize and validate ideas early when entering the execution phase.

In addition, we faced the recurring challenge of balancing simplicity with meaningful interactivity. Our goal was to design a game that felt relaxing, but not too passive or monotonous. Achieving this required several iterations on level structure, pacing, visual flow, and reward mechanisms.

Looking ahead, we see several directions for future improvement. Potential enhancements include implementing a scoring system or time-based challenges, adding background music and sound effects to enhance emotional immersion, and introducing character customization options to increase player engagement. We are also considering improvements in mobile compatibility and performance optimization to deliver a smoother experience across different platforms.

Overall, this project not only strengthened our technical and design skills but also deepened our understanding of how collaboration and structured planning are crucial to turning creative concepts into engaging, playable experiences.

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
