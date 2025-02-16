# 2025-group-10
2025 COMSM0166 group 10

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
During this requirements workshop, our team deeply explored Epics, User Stories, and Acceptance Criteria and applied these concepts to the requirements planning for our game, "Angels Going Down the Clouds."

First, we learned that Epics are high-level requirements that group related user stories. For example, "making the game challenging" is one of our Epics, which includes mechanics like character movement, jumping, and dodging. This structure helps us organize requirements and keep the development direction clear.

Next, User Stories allow us to think from the player's perspective when defining game features. For instance, "As a player, I want a leaderboard system so that I can compete with my friends." This approach helps us focus on the user experience and ensures the game meets the needs of different types of players, such as streamers, working professionals, and students.

Finally, Acceptance Criteria define when a requirement is considered "done." For example, "Given that a player finishes a game session, when the score is calculated, then the leaderboard should update and display the player's rank." This clear criterion makes it easier for the development team to test and validate features.

Through this workshop, we not only gained a solid understanding of requirements analysis but also learned how to apply these concepts in the development process, ensuring that our game design is well-structured and aligned with player expectations.

---

## Your Game

Link to your game [PLAY HERE](https://peteinfo.github.io/COMSM0166-project-template/)

Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Your Group

![Description](IMG_5257%202.heic)


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

### Requirements 

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop?
- Our game is called "Up up Angels", originally inspired by NS-Shaft, which focuses on jumping down. However, while working on our game demo, we noticed a small angel illustration on a ruler and felt it would be a perfect fit for our main character. This led us to redesign the concept—since our protagonist is an angel, we decided to have him jump upwards instead. Only upon successfully completing the game does the angel grow wings and ascend to heaven, reinforcing the sense of achievement and aligning with the overall theme of the game.

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams.
- ![class diagram](https://github.com/user-attachments/assets/5ffad842-9d05-45fe-99f5-88d1f67b08cd)
  
- ![Diagram 2025-02-12 22-13-42](https://github.com/user-attachments/assets/5d2c7397-e042-4b1b-aa70-9846d49dff14)

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

### Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice) 

- One quantitative evaluation (of your choice) 

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
