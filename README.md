<div align="center">

# Next Top Robot

![image](https://user-images.githubusercontent.com/17935770/129827835-7649f2e6-cd28-4206-b3f7-4788e09ba53f.png)

  By the end of 2021, there will be **3,788,000** robots. This number is nearly a million more units compared to the number of robots counted in 2019. If you were to purchase a new robot every day, it would take you over **10,000** years to acquire each robot, and by then, the world would probably be owned by them. Knowing the statistics, this was not feasible for robot-loving fanatics at Mondo Robot.

  <details>
  <summary>
  Disclaimer about the project
  </summary>
  This project is a skill test designed by Mondo Robot to gauge competency in front-end development. My task was to fulfill all of the project's features by accessing the API provided and building a website within seven days. The front end also matched the wireframe, including the three media breakpoints: mobile, tablet, and desktop.
</details>

---

🤖 Vist the website from this [here](https://next-top-robot.netlify.app/)

---


## Instructions

</div>

Clone the project, install dependencies, and run.

```jsx
git clone git@github.com:andrewvallejo/next-top-robot.git
cd next-top-robot
npm install 
npm start
```

Register an account and log in. Vote on your favorite robot and see how it fairs against its competition on the results page! Change your mind? Go back to the voting page and take back your vote to vote again!

Want more?  Log in as an Admin, where you can add another robot to the poll. Don't like your competition? Delete it! 

Log in with the admin credentials.

```jsx
Email: admin@mondorobot.com
Password: R0bot4Lif3
```

## Preview

![mobile view](https://user-images.githubusercontent.com/17935770/130727289-15cac82c-8935-4aa7-b965-af1426a22236.png)

<img width="1436" alt="Screen Shot 2021-08-24 at 10 05 40 PM" src="https://user-images.githubusercontent.com/17935770/130727314-04385e17-30e7-4fce-939f-62f75de80b8e.png">

<img width="1438" alt="Screen Shot 2021-08-24 at 10 05 55 PM" src="https://user-images.githubusercontent.com/17935770/130727328-9fa08252-c3ba-4fde-97b2-ee5474b6e23b.png">


## Features

This application functionality extends to both end-users and the polling for your office's next robot.


<div align='left'>

###  User 

---

- Users can register, log in, and log out.
- Users may vote for a robot, but only once.
- Users may change their vote.
- Users may see results from the voting page.

### Admin

---

- Admins have a private page to edit the robots.
- Admins can add or remove robots from the poll
- Admins have the same access and functionality as end-user.

</div>

## <div align="center"> Technologies </div>

<div align="center">  

<img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square" alt="React Badge"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" alt="JavaScript Badge"><img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" alt="CSS3 Badge"><img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat-square" alt="Sass Badge">

</div>

### Browser and device compatability

I developed this application while exclusively using Google Chrome. The big three media breaks that were accounted for: mobile @ 375px, tablet at 768px, and desktop at 1440px. This was tested using Chrome's DevTools and my iPhone 11. 

## <div align="center"> My Story  </div>

<div align="left">  


  Hi! I am **Andrew Vallejo** and I did this project to show off my qualifications and skills to the kind people at Mondo Robots. At this time, I've been in school at Turing for five months. A month ago, I would not be able to complete this project within the allotted week. It wasn't only the foundation of knowledge but rather the ability to find solutions on my own. 

 <details>



  <summary>
 My challenges
  </summary>

  <br>

   
 <sub>

  This project presented challenges with each iteration. I had never used an API that had a key. I never heard of bearer tokens. I've never dealt with a real-like registration and authorization before. Nor worked with so many moving parts considering most elements in the App rely on communicating with the API. I also did not have project check-ins or the support of others as I would in school.

  The most complex element was understanding the API's login features and understanding what to do with bearer tokens. I'll admit much of that didn't make sense as I thought the bearer token was unique to the user; therefore, the API recognize if they were admin or not. It wasn't until I implemented an auto-login feature that I finally understood how the whole system works. 

  The most frustrating part of the project was getting the vote buttons to work correctly. The goal was when you vote for one robot; its vote button would become disabled. If you voted for another robot, it would become disabled and reenable the last one. Finding the solution was like having a house with a hundred lights, where some switches were attached to more than one lightbulb socket, and your job was to turn them all off but one. This travesty was due because I decided earlier on when I made the button components that they would rely on boolean values from state to determine their functionality. 

  </sub>

  *If you want to hear more about challenges, then read my
[pull requests](https://github.com/andrewvallejo/next-top-robot/pulls?q=is%3Apr+is%3Aclosed+sort%3Acreated-asc) 
in chronological order to find further details on the evolution of this project.*
</details>

---

<div align='center' >


Follow me on <br>
[Github](https://www.github.com/andrewvallejo) ||
[Linkedin](https://www.linkedin.com/in/andrewvallejo/) ||
[Twitter](https://twitter.com/andrewAvallejo)

</div>
