<img src="docs/repoPic/FirstChart.jpg" alt="First Chart" width="100%"/>

## Table of Contents

- [1. Our Team](#1-our-team)
- [2. Introduction](#2-introduction)
- [3. Requirements](#3-requirements)
- [4. Design](#4-design)
- [5. Implementation](#5-implementation)
- [6. Evaluation](#6-evaluation)
- [7. Process](#7-process)
- [8. Sustainability, Ethics, and Accessibility](#8-sustainability-ethics-and-accessibility)
- [9. Conclusion](#9-conclusion)
    


   
---

# Your Game

Link to your game [PLAY HERE](https://uob-comsm0166.github.io/2025-group-10/)

Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)
## 🎮 Game Demo

Watch the gameplay here: [demo](https://youtu.be/Io8rj_mGRh0?si=pMy_g_T-mZPkIzdd)


# 1. Our Team

<img src="docs/repoPic/group.jpg" alt="Group" width="60%"/>

| Name              | Email                              | Username    |
|-------------------|----------------------------------|-------------|
| Bryant Lin       | [me24405@bristol.ac.uk](mailto:me24405@bristol.ac.uk) | Bryant0909  |
| Naiwen Tsui      | [rp24072@bristol.ac.uk](mailto:rp24072@bristol.ac.uk) | Naiwen1027  |
| Zhu Xuefei       | [ft24227@bristol.ac.uk](mailto:ft24227@bristol.ac.uk) | muler-hussel |
| Pinchun Shen     | [mw24258@bristol.ac.uk](mailto:mw24258@bristol.ac.uk) | PinChuns    |
| Chih Hsien Ho    | [kq23915@bristol.ac.uk](mailto:kq23915@bristol.ac.uk) | Cindy626    |
| Cyunwun Lin      | [cyunwunlin@gmail.com](mailto:cyunwunlin@gmail.com) | CarminaTW   |



# 2. Introduction

  <div align="center">
  <img src="docs/repoPic/Doodle.gif" alt="Doodle Jump" width="140"/>
  <img src="https://via.placeholder.com/30x1/ffffff/ffffff" width="30" height="1" />
  <img src="docs/repoPic/NS_SHAFT.gif" alt="NS SHAFT" width="120"/>
</div>

Our game, Up Up Angel, is inspired by the classic mobile game Doodle Jump, but we adapted it for desktop platforms by changing the auto-jumping mechanic into manual jumping. This gives players more control and creates a deeper sense of focus and challenge.

Originally, our concept was similar to NS SHAFT, a game where players go downward step by step like descending stairs. However, to better fit the theme of angels and heaven, we decided to reverse the direction and create an upward-jumping experience instead.

To give the game a unique atmosphere, we introduced the theme of heaven and hell. The player controls a small angel who jumps upward through floating clouds, avoiding ghosts and hellfire while collecting candies that restore health. These elements represent both the obstacles and moments of support we encounter in life. At the top of the game, the angel can collect a glowing halo, symbolizing their final transformation into a true angel. This moment not only marks the player’s success but also represents a deeper message: with persistence and effort, people can reach their goals and ideals.

Our goal was to design a game that feels positive and healing, yet still challenging. By combining symbolic visuals with simple but engaging mechanics, Up Up Angel offers players an experience that is both uplifting and meaningful.
  
# 3. Requirements 

## Ideation process
In the early stages of our project, our team came together to discuss and decide on the direction of the game. We observed that many people today lead busy lives, juggling work, studies, and personal commitments. With this in mind, our goal was to create a game that not only offers a simple and engaging experience but also provides relaxation and a sense of accomplishment, allowing players to enjoy satisfying challenges in a short time.Right from the start, we agreed that the game should strike a balance between being soothing and providing a bit of challenge—giving players a brief but fulfilling escape from the stresses of daily life. We decided on two core design principles: a cute, comforting visual style paired with soft pastel colors to evoke a calming emotional atmosphere.

At first, we considered creating a lighthearted game inspired by the classic "NS-Shaft" mechanics—something simple and fun. However, when we decided that the main character would be a small angel, we rethought the gameplay. We realized that having the angel jump upward rather than downward made much more sense thematically, symbolizing the ascent to heaven—a concept associated with peace and healing. This shift also led us to choose a sky-themed backdrop for the game. At the end of the game, players are rewarded with a final scene resembling "heaven," providing a sense of emotional closure and fully realizing our design vision. To ensure the game appeals to a wide audience, we designed three difficulty levels, offering players a chance to experience both relaxation and a sense of challenge. We also included different obstacles and environments tailored to each difficulty level, making sure that players remain engaged and immersed, even as the challenges grow.

## Game Selection List

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

## Early Stages Design

Before implementing our game, we started with a physical prototype to explore basic movement mechanics and gameplay structure. 
This hands-on process helped us quickly iterate on ideas and communicate them with the team.

The following animation shows our early concept using hand-drawn elements and paper cutouts:

###  1. Frogger-like Road Crossing 🐸
Inspired by Frogger, players guide a frog safely through traffic and rivers while dodging obstacles with precision timing.

[![Watch Frogger Demo](https://img.youtube.com/vi/M9n7DXvjcw8/0.jpg)](https://youtu.be/M9n7DXvjcw8)
> ▶️ Click the image above to watch the prototype video.


###  2. Up Up Angel 😇
A vertical platformer inspired by Doodle Jump, but with a manual jumping mechanic that adds depth and challenge.

[![Watch Up Up Angel](https://img.youtube.com/vi/dFYu5HwDuT4/0.jpg)](https://youtube.com/shorts/dFYu5HwDuT4)
> ▶️ Click the image above to watch the prototype video.




## Stakeholder

<img src="docs/repoPic/Onion.jpg" alt="Onion Diagram" width="60%"/>

The main stakeholders for Up Up Angel were:
- The product: Up Up Angel
- Game Developers: Implement game mechanics, logic, and assets. Address technical challenges to bring the design vision to life.
- Game Designer: Oversees the project's creative direction, makes core design decisions, and manages tasks to ensure progress aligns with overall goals.
- Users(Player): Play the game to experience its mechanics and provide feedback on gameplay, bugs, usability, and overall user experience to support iterative improvements.
- Public: Wider groups who may view, discuss, or be inspired by the project. Their engagement enhances the game’s visibility and extends its impact beyond direct testers.

## Epics & User Stories & Acceptance Criteria
<table border="1">
  <tr>
    <th>User Type</th>
    <th>Epics</th>
    <th>User Stories</th>
    <th>Acceptance Criteria</th>
  </tr>
  
  <!-- First User Type: Streamer -->
  <tr>
    <td>Streamer</td>
    <td rowspan="2">Improve player engagement through challenging mechanics</td>
    <td>As a streamer, I want the game to be both challenging and entertaining, so that my viewers remain engaged and enjoy watching my gameplay.</td>
    <td><b>Given</b> I am in a game, <b>when</b> I progress through the levels and encounter increasing difficulty, <b>then</b> I should face an increasing number of progressively more threatening obstacles (e.g., hellfire, ghosts) that provide me with an entertaining and challenging experience.</td>
  </tr>
  <!-- Second User Type: Challenge-Seeking Player -->
  <tr>
    <td>Challenge-Seeking Player</td>
    <td>As a challenge-seeking player, I want the game to include many mechanics that can make me lose lives, so that I can gain a sense of achievement by overcoming them.</td>
    <td><b>Given</b> I am in the game, <b>when</b> I am playing the game, <b>then</b> I should face challenges such as moving clouds and attacking hellfire, which require quick reactions and precise decisions to avoid failure, so that I can feel a sense of achievement when I overcome the challenges.</td>
  </tr>
  
  <!-- Third User Type: Busy Professional -->
  <tr>
    <td>Busy Professional</td>
    <td rowspan="2">Enhance happiness for player</td>
    <td>As a busy professional, I want to experience simple yet meaningful achievements so that I can feel happy and fulfilled, even during short breaks.</td>
    <td><b>Given</b> I am playing the game, <b>when</b> I engage with the game’s mechanics, <b>then</b> I should face simple and enjoyable challenges that I can complete in a short amount of time, leaving me with a sense of accomplishment and happiness.</td>
  </tr>
  <!-- Fourth User Type: Busy Professional -->
  <tr>
    <td>Casual Player</td>
    <td>As a Casual Player, I want the game to offer different difficulty levels, so I can choose the right one that suits my mood and how much time I have to play.</td>
    <td><b>Given</b> I am starting a new game or level, <b>when</b> I select the difficulty level, <b>then</b> I should be able to choose from different difficulty settings (e.g., Easy, Medium, Hard) that give me a variety of experiences and challenges, so I can pick the one that best fits how I like to play.</td>
  </tr>
</table>

## Use case diagrams

<img src="docs/repoPic/UseCase.jpg" alt="Use Case Diagram" width="80%"/>

## Use-case Specification

### Description:
The player starts the game with the goal of jumping upward through clouds, avoiding dangers like ghosts and hellfire. The ultimate aim is to collect the halo, which gives the angel the power to fly to heaven and means the player has won the game.

### Basic Flow:
 1. The player selects “Play Game” from the main menu.
 2. The game displays the instructions for the player to read.
 3. The player selects a difficulty level.
 4. The angel appears on the starting platform and gameplay begins.
 5. The player manually jumps from cloud to cloud.
 6. The player avoids ghosts and hellfire while jumping upward.
 7. Gaining the Halo triggers the win screen.
 8. Falling or losing all lives triggers the game over screen.
 9. After the game ends, the system displays options: Play Again, Settings, or Exit Game.

### Alternative Flows:
Gain Extra Life: If the player collects three candies, they gain one extra life. This gives them another chance to survive falling or hitting a hazard.

# 4. Design
Based on our initial user stories and the use case diagram, we collaboratively designed the system architecture of our game by creating a detailed class diagram and sequence diagram. This process was essential to ensuring a solid understanding of the structure and flow of the game before moving into implementation. By working as a team and discussing every design decision, we were able to align our expectations and divide responsibilities more effectively.

### Class Diagram
The class diagram represents a high-level overview of our object-oriented design and depicts the core classes used in the game, their attributes, methods, and relationships. At the center of our game logic is the Sketch class, which is responsible for controlling the flow of the game. It manages setup, draw cycles, user interactions, and oversees the initialization of other key classes.
One of the most important classes is the Player class, which encapsulates all player-related behaviors such as jumping, moving left or right, checking collisions, and handling life count. It interacts with a number of other classes throughout the game loop.
Clouds are also a critical component in the game, serving as platforms for the player to land on and move between. We implemented two types of clouds — static ones and moving ones— both inheriting from a common Cloud class. The MovingCloud class introduces horizontal motion logic and carries with it any object placed on top, ensuring consistent interaction.
Another important hierarchy in our game is the Objects class, which serves as a superclass for all interactable items within the game world. Subclasses include Monster, Danger, Halo, and Candy. Each of these subclasses defines its own behavior upon collision with the player. For instance, Danger and Monster can reduce the player's life if touched, whereas Candy can restore life. If player interacts with Halo, while player still has enough life, user will win the game.
All Objects instances are randomly generated on top of clouds. The game difficulty level determines the proportion and frequency of different objects (e.g., higher difficulty increases the number of moving clouds and dangerous objects). This structure makes the game dynamic and easily extensible.
The LifeHeart class is a utility class that visually represents the player’s remaining lives on the heads-up display. It is updated in real time as the player interacts with various objects.  

***Class Diagram***  
![Class Diagram](https://github.com/UoB-COMSM0166/2025-group-10/blob/main/docs/assets/readme/Updated%20Class%20Diagram.png)  

### Sequence Diagram
After finalizing the class structure, we developed a sequence diagram to visualize the temporal interactions between these classes during game execution. This diagram begins with the display of the game’s starting interface, followed by the difficulty selection screen. Once a difficulty is selected, the Sketch class initializes instances of Player, Cloud, and Object classes according to the difficulty level settings.  
During the game loop, Player listens for user inputs to jump or move. As the player moves, the system checks for collisions with clouds and objects. If a collision occurs, the Player class calls the respective Object subclass method to handle the event (e.g., reducing life when hitting a Monster, or increasing score when collecting a Candy).
Meanwhile, the Sketch class continuously redraws the game scene using p5.js’s draw() function, updating the positions of all game elements. The LifeHeart class is called every frame to update the life display based on the player’s current state.  
Whenever the player reaches new heights, the shiftScreen() method in Sketch ensures that the player remains centered vertically by moving all clouds and objects downward, simulating an upward motion. This method also handles the recycling or removal of off-screen elements.  
***Sequence Diagram***  
![Sequence Diagram](https://github.com/UoB-COMSM0166/2025-group-10/blob/main/docs/assets/readme/Updated%20Sequence%20Diagram.png)  

### Design Iteration and Agile Process
As we followed an agile development approach, our class and sequence diagrams were not static. Instead, we continuously revised and improved them as the game evolved. Early versions of the diagrams served as rough guides and allowed us to identify design issues early. As we added new features or refined gameplay mechanics, we updated the diagrams to reflect the current structure and ensure everyone on the team had a shared understanding of the system.  
The diagrams proved especially helpful when debugging or integrating features developed by different team members. They served not only as documentation but also as a communication tool within the team, allowing for clearer discussion on logic, flow, and potential improvements.  
Overall, our collaborative design approach — grounded in object-oriented principles and supported by UML diagrams — greatly contributed to the clarity, flexibility, and maintainability of our codebase.  

# 5. Implementation

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


---

# 6. Evaluation

### One Qualitative Evaluation (Your Choice)

### Evaluation Report

---

### Think Aloud Evaluation

**Method**  
We conducted a Think Aloud session to observe players' real-time thoughts and actions.  
A facilitator explained the task, and participants were encouraged to verbalize their thoughts while playing. Two observers recorded player behaviors and comments.

**Observations**  
Participants made the following comments during the playtest:
1. The ball bounces too fast.
2. I hope the interface can be more refined.
3. The stationary platforms could be longer.


**Insights**  
Players hesitated and made trial-and-error movements at the start, indicating insufficient feedback and unclear physical mechanics.  
The fast bounce and rough interface design disrupted immersion, while short platforms increased difficulty unnecessarily.

---

### Heuristic Evaluation

**Method**  
We invited a member from another team to act as an evaluator.  
They were asked to play the game independently and record usability issues based on Nielsen’s 10 heuristic principles. No instructions or help were provided during the session.

**Observations**  
The evaluator identified the following issues:
1. The character movement in our game isn’t smooth enough. (We hadn’t noticed many of these issues before.)
2. Without guidance, players are unable to play the game.

**Insights**  
These findings suggest violations of multiple usability heuristics, including:
- **Visibility of system status**
- **Help and documentation**
- **Consistency and standards**

The lack of clear instructions and feedback led to confusion during gameplay.

---

### Summary and Action Plan

Our playtesters helped us notice many issues we had previously overlooked:

- They revealed that the character movement in our game isn’t smooth enough, which aligns with the results from our Think Aloud sessions.
- Without guidance, players had many questions and struggled to understand the game mechanics.
- This shows that our game’s guidance and object functionalities are not clear enough.

**Moving forward, we will:**
- Add an instruction page at the beginning of the game
- Use icons to indicate character abilities and object functions
- Refine visual design and level layout to improve clarity and usability

These improvements aim to reduce the learning curve and enhance the overall player experience.

- One quantitative evaluation (of your choice)

### NASA

| User | Easy | Medium |
|-----:|-----:|-------:|
| 1    | 16.7 | 17.5   |
| 2    | 35   | 35.8   |
| 3    | 25   | 29.2   |
| 4    | 26.7 | 29.2   |
| 5    | 18.3 | 25     |
| 6    | 16.7 | 25     |
| 7    | 10   | 15.8   |
| 8    | 20   | 25     |
| 9    | 18.3 | 21.7   |
| 10   | 20   | 20.8   |



<p align="center"><strong>NASA TLX Workload Score Distribution Chart</strong></p>

<img width="936" alt="NASA" src="https://github.com/user-attachments/assets/a3f0d7ec-31ab-462e-8c6f-abc455ed38b8" />




Overall, task load scores were relatively low, indicating that both the Easy and Medium versions of the task were manageable.
Medium difficulty scores were slightly higher than Easy, suggesting a modest increase in perceived workload, but overall the system maintained a reasonable level of user comfort.

### SUS

| User | Easy Rating | Easy Score | Medium Rating | Medium Score |
|-----:|:------------|-----------:|:--------------|-------------:|
| 1    | OK          | 57.5       | OK            | 65           |
| 2    | Good        | 77.5       | OK            | 67.5         |
| 3    | Good        | 80         | Good          | 80           |
| 4    | Good        | 72.5       | Good          | 77.5         |
| 5    | Good        | 75         | Good          | 75           |
| 6    | Good        | 80         | Good          | 75           |
| 7    | Good        | 82.5       | Good          | 85           |
| 8    | Good        | 67.5       | Good          | 82.5         |
| 9    | OK          | 52.5       | OK            | 70           |
| 10   | OK          | 80         | Good          | 82.5         |

<p align="center"><strong>SUS Score Distribution Chart</strong></p>
<img width="1141" alt="SUS" src="https://github.com/user-attachments/assets/9b962504-640f-4575-ae4a-c36a8cd66705" />




Overall, the SUS results indicate good usability.
Most participants rated the system as "Good" with scores generally above 75, although a few users rated it "OK" with lower scores, suggesting minor usability improvements are still needed.

- Description of how code was tested.
 
The code was tested through a combination of manual and exploratory testing.
We manually executed the application and verified core functionalities, including user input handling, system feedback, and error management.
Test cases were designed to cover both typical use scenarios and edge cases, ensuring that the system behaves as expected under various conditions.
Additionally, peer reviews and informal user testing sessions were conducted to identify usability issues and unforeseen bugs.


# 7. Process 

In our team, effective collaboration and consistent communication were essential to ensuring a smooth and successful development process. Early on, we decided to divide our team into two sub-groups based on skillsets: three members focused on programming—covering areas such as game logic, functionality, and system integration—while the other three specialized in visual design, including character art, environment graphics, animations, and user interface elements. This division of labor allowed each sub-group to concentrate on what they did best, while still maintaining frequent contact and discussion to make sure all parts of the game fit together cohesively.

## Tools

### 1. Kanban board
<img src="docs/repoPic/KanBan.png" alt="Kanban" width="60%"/>

To manage our workflow, we used a Kanban board to organize tasks and track progress. This board included columns like "Backlog", "In Progress", and "Done", which gave us a clear and up-to-date overview of our project’s status. Each team member updated their tasks regularly, which helped everyone stay aligned, avoid duplicate efforts, and maintain momentum throughout the development cycle. The Kanban approach was especially helpful when juggling multiple components at once, from writing scripts and coding game mechanics to designing character assets and animations.

### 2. Online meetings/In-Person Discussions and Whatsapp group


<p align="center">
  <img src="docs/repoPic/Meeting.jpg" alt="Team Meeting" width="420">
  <img src="docs/repoPic/whatsapp.png" alt="Design Chat" width="460">
</p>

<p align="center">
  <strong><em>Figure 1:</em></strong> <em>Our team during a group discussion meeting.</em><br/>
  <strong><em>Figure 2:</em></strong> <em>Design brainstorming through WhatsApp conversation.</em>
</p>


Communication was primarily handled through WhatsApp, which proved to be a reliable and flexible platform for coordinating schedules, sharing quick updates, and discussing issues as they came up. Since we all had different personal and academic commitments, scheduling could have been a challenge—but WhatsApp allowed us to quickly reach consensus on meeting times and maintain a steady flow of informal check-ins. We also used it to post reminders, ask for feedback, and brainstorm creative ideas during quieter development periods.

### 3. Github
Our GitHub repository served as the central hub for all project-related files. Developers pushed code regularly and used pull requests to propose changes, which were reviewed by at least one other team member to maintain code quality and catch bugs early. On the design side, completed visual assets were uploaded in an organized folder structure, ready for integration. This system enabled parallel development: while the artists finalized sprite sheets or interface components, the coders could simultaneously implement gameplay features or fix bugs without waiting. We also made use of GitHub Issues to document and assign bugs, feature requests, or tasks that required collaboration between teams.

## Strengths vs Challenges
One of the key strengths of our team was our willingness to communicate across roles. Even though we had designated responsibilities, there was constant feedback exchanged between designers and developers. For example, the design team would often suggest UI improvements based on how game mechanics looked in action, and the coders would adapt certain features to better showcase visual assets. These iterative loops helped us refine the game's look and feel and avoid the disconnect that sometimes happens between programming and art.

Despite having a well-structured workflow, we encountered several challenges along the way. One of the main difficulties was synchronizing the work between the coding and art teams. At times, assets were not delivered in the format or resolution the developers expected, leading to delays and last-minute adjustments. Another challenge was coordinating schedules, especially during exam periods or when members had overlapping deadlines for other coursework. There were also moments where miscommunication caused duplicated work or unclear task ownership. To address this, we gradually improved our documentation practices and began leaving clearer notes on the Kanban board and GitHub commits, which significantly reduced confusion over time.

Looking back, our process was not perfect, but it was highly collaborative, flexible, and built on a strong foundation of mutual respect and shared responsibility. Every member contributed to both the execution and the creative direction of the game. This experience has deepened our understanding of team dynamics and taught us the importance of proactive communication, task visibility, and adaptability in software projects.


# 8. Sustainability, Ethics, and Accessibility
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

<div align="center">
  <img src="docs/repoPic/sus.jpg" alt="Sustainability Awareness Framework" width="1000"/>
  <p><em><strong>Figure:</strong> Sustainability Awareness Framework of our game <strong>Up Up Angel</strong></em></p>
</div>

# 9. Conclusion


### Reflect on Project as a Whole
- The development of Up Up Angel took our team through the full journey of building a game from scratch, including brainstorming ideas, assessing requirements, writing code, and testing with real users. We came to see that a project is like a puzzle: each small task is a piece, and only by carefully putting them together can we complete the bigger picture we initially envisioned.
- We also came to appreciate just how important users are in the development process. Knowing what players need gave us clearer direction when designing the interface, gameplay, and features. Meanwhile, the feedback we received pointed out things we might have missed ourselves. It wasn’t criticism, it was an opportunity to refine and improve. We realized that design isn’t just about creating something new; it’s also about listening, adjusting, and making it better through every iteration.

### Lessons Learned
- One of the most important lessons we learned from this project is that clear and continuous communication is essential. From the initial brainstorming phase to task allocation and execution, many elements are interdependent. Without regular and transparent communication, it's easy for team members to fall out of sync. By consistently sharing updates and clarifying expectations, we were able to better understand the overall progress and support each other more effectively.
- Another key takeaway was the importance of defining and prioritizing tasks. A project breaks down into many smaller parts, but not all of them carry the same weight. We learned that identifying which tasks are both urgent and important is crucial. Having a clear sense of priorities helped us work through the project more efficiently, and without it, there's a real risk of spending too much time on low-priority work.

### Reflect on Challenges
- One of the main challenges we faced early in the project was translating abstract ideas into practical, implementable features. During the brainstorming phase, our team came up with many creative concepts. However, when we moved into development, we realized that some of those ideas were beyond our technical capabilities. This taught us that while creativity is valuable, it needs to be grounded in feasibility, only ideas that can be executed truly benefit the project.
- Another challenge emerged during the middle phase of the project, when we noticed that our progress was falling behind. We traced the issue back to unclear task prioritization. Some team members were spending too much time on lower-priority tasks, which delayed key components. Fortunately, after a few team discussions, we were able to redefine the priorities, clarify responsibilities, and get the project back on track. This also helped us better understand the importance of clearly defining task priorities from the beginning. 
- In the later stages of development, we faced another challenge related to gameplay design and user experience. To enhance the richness of the game, we added interactive elements like hellfire, which attacks the Angel. While these features added complexity, user testing revealed that they sometimes made the game feel confusing. This clearly showed us the importance of user testing, as it helped uncover issues that the development team might not have noticed on their own. Thankfully, because we had already implemented three levels of difficulty, we were able to adjust the presence of such features based on the difficulty mode. This gave players more options and helped us maintain both game depth and accessibility.

### Future work
- In the future, we plan to add more features to enhance both gameplay depth and user engagement. One direction is the introduction of a scoring system, which could provide players with clear objectives and a stronger sense of achievement. We also hope to implement character customization to make the gameplay feel more personalized and interactive. These additions aim to improve the overall player experience, making the game not only more engaging, but also relaxing and enjoyable.
- We also plan to improve cross-platform compatibility. Currently, the game runs only on desktop, but we aim to optimize it for tablets and smartphones in future updates.

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent.

| Name              | Score | Contribution  |
|-------------------|-------|---------------|
| Bryant Lin        | 1.00  | - Game feature implementation and coding  <br> - Code optimisation  <br> - Debugged the program  <br> - Created the presentation slides (PPT)  <br> - Recorded the game video narration  <br> - Wrote the report |
| Naiwen Tsui       | 1.00  | - Game feature implementation and coding<br>- Code optimisation<br>- Wrote the report<br>- Designed and wrote the final presentation slides<br>- Edited and produced the demo video for the game<br>- Co-developed the game concept |
| Zhu Xuefei        | 1.00  | - Game feature implementation and coding <br>- Debugged the program<br>- Code optimisation<br>- Wrote the report<br>- Conducted game playtesting |
| Pinchun Shen      | 1.00  | - Designed the game concept and story background<br>- Visual design of the main character, game background, and objects<br>- Coded the instruction and ending pages (Win & Game Over)<br>- Wrote the report<br>- Made the video |
| Chih Hsien Ho     | 1.00  | - Designed the game concept and story background<br>- Visual design of the main character, game background, and objects<br>- Coded the start screen and difficulty selection interface<br>- Wrote the report<br>- Made the video |
| Cyunwun Lin       | 1.00  | - Conducted SUS and NASA-TLX surveys<br>- Analysed survey results and created visualisations<br>- Organised user feedback and assisted with UX testing<br>- Created illustrations<br>- Wrote the report<br>- Edited the video<br>- Helped with video production and subtitles |


### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
