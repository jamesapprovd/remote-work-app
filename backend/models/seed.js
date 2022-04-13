const seedUsersData = [
  {
    userId: 1,
    username: "James",
    password: "james123",
    email: "james@remotr.com",
    position: "Chief Executive Officer",
    isManager: true,
    employees: [
      "Sing Hian",
      "Sharlyn",
      "Worker1",
      "Worker2",
      "MinionA",
      "MinionB",
    ],
    img: "https://imgur.com/sFFHUjo.png",
    status: "online",
    interactionCount: 5,
    workJournal: [
      {
        author: "James",
        journalId: "1",
        date: "06/04/2022",
        time: "20:45:32",
        title: "Logos Creation",
        content: "I created a few awesome logos for the company!",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "06/04/2022",
            time: "20:46:21",
            comment: "Nicely done, boss!",
          },
          {
            username: "Sharlyn",
            date: "06/04/2022",
            time: "20:47:22",
            comment: "Awesome, boss!",
          },
        ],
      },
      {
        author: "James",
        journalId: "2",
        date: "07/04/2022",
        time: "09:30:00",
        title: "Punctuality",
        content: "Reached campus on time and got my coffee!",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "07/04/2022",
            time: "09:35:12",
            comment: "Great work, boss!",
          },
          {
            username: "Sharlyn",
            date: "07/04/2022",
            time: "09:38:53",
            comment: "Yay, boss!",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "06/04/2022",
        time: "19:01:09",
        title: "Need help with day 7 homework!",
        content: "Why doesn't my create work in postman?",
        isSolved: false,
        comments: [
          {
            username: "Sing Hian",
            date: "06/04/2022",
            time: "19:33:38",
            comment: "You didn't connect properly",
          },
        ],
      },
    ],
  },
  {
    userId: 2,
    username: "Sing Hian",
    password: "singhian123",
    email: "singhian@remotr.com",
    position: "Chief Technology Officer",
    isManager: true,
    employees: ["Worker1", "Worker2"],
    img: "https://imgur.com/vrIXJfV.png",
    status: "online",
    interactionCount: 0,
    workJournal: [
      {
        author: "Sing Hian",
        journalId: "3",
        date: "06/04/2022",
        time: "20:56:40",
        title: "React",
        content: "I created routes and pages!",
        private: true,
        comments: [
          {
            username: "James",
            date: "06/04/2022",
            time: "21:00:29",
            comment: "Yay! Nicely done, Sing Hian",
          },
          {
            username: "Sharlyn",
            date: "06/04/2022",
            time: "21:02:30",
            comment: "Yay! It fits the theme",
          },
        ],
      },
      {
        author: "Sing Hian",
        journalId: "4",
        date: "07/04/2022",
        time: "10:00:01",
        title: "Lunch",
        content: "What are we eating for lunch today?",
        private: false,
        comments: [
          {
            username: "James",
            date: "07/04/2022",
            time: "10:02:05",
            comment: "It's still early, do your work!",
          },
          {
            username: "Sharlyn",
            date: "07/04/2022",
            time: "10:05:10",
            comment: "Do your work!",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "06/04/2022",
        time: "19:01:03",
        title: "Help!",
        content: "Redux is so confusing!",
        isSolved: false,
        comments: [
          {
            username: "Sharlyn",
            date: "06/04/2022",
            time: "19:39:50",
            comment: "Watch some youtube videos",
          },
        ],
      },
    ],
  },

  {
    userId: 3,
    username: "Sharlyn",
    password: "sharlyn123",
    email: "sharlyn@remotr.com",
    position: "Chief Design Officer",
    isManager: true,
    employees: ["MinionA", "MinionB"],
    img: "https://imgur.com/PMV7iX3.png",
    status: "online",
    interactionCount: 0,
    workJournal: [
      {
        author: "Sharlyn",
        journalId: "5",
        date: "06/04/2022",
        time: "20:45:59",
        title: "Userflow wireframes",
        content: "Wireframes done and presented to GA",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "07/04/2022",
            time: "11:46:44",
            comment: "That looks really good!",
          },
          {
            username: "James",
            date: "07/04/2022",
            time: "12:55:35",
            comment: "It seems like Desmond and gang likes the design too",
          },
        ],
      },
      {
        author: "Sharlyn",
        journalId: "6",
        date: "07/04/2022",
        time: "15:30:10",
        title: "Efficiency",
        content: "Finished the main page component",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "07/04/2022",
            time: "15:35:02",
            comment: "I have something to add",
          },
          {
            username: "James",
            date: "07/04/2022",
            time: "15:46:19",
            comment: "Wow, that's fast. Let me sync up the backend",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "07/04/2022",
        time: "18:00:04",
        title: "Laptop monitor too small",
        content: "How can I increase my work productivity?",
        isSolved: false,
        comments: [
          {
            username: "James",
            date: "07/04/2022",
            time: "20:46:56",
            comment: "I've ordered a new wide screen monitor for you",
          },
        ],
      },
    ],
  },

  {
    userId: 4,
    username: "Worker1",
    password: "worker123",
    email: "worker1@remotr.com",
    position: "Software Developer",
    isManager: false,
    employees: [],
    img: "https://imgur.com/tcsgEWd.png",
    status: "offline",
    interactionCount: 2,
    workJournal: [
      {
        author: "Worker1",
        journalId: "7",
        date: "07/04/2022",
        time: "12:00:20",
        title: "Coded component A",
        content: "Component A coded for CTO",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "07/04/2022",
            time: "12:02:41",
            comment: "Nicely done, Worker1",
          },
        ],
      },
      {
        author: "Worker1",
        journalId: "8",
        date: "07/04/2022",
        time: "16:59:06",
        title: "Coded component B",
        content: "Component B coded per CTO's request",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "07/04/2022",
            time: "17:35:54",
            comment: "The code looks weird, lets discuss tomorrow",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "07/04/2022",
        time: "18:00:13",
        title: "Component C",
        content: "How to prop chicken from component B to component C?",
        isSolved: false,
        comments: [
          {
            username: "Sin Hian",
            date: "07/04/2022",
            time: "18:05:57",
            comment:
              "Look carefully, component B is not the parent of component C",
          },
        ],
      },
    ],
  },

  {
    userId: 5,
    username: "Worker2",
    password: "worker123",
    email: "worker2@remotr.com",
    position: "Software Engineer",
    isManager: false,
    employees: [],
    img: "https://imgur.com/2t8EuSI.png",
    status: "away",
    interactionCount: 3,
    workJournal: [
      {
        author: "Worker2",
        journalId: "9",
        date: "08/04/2022",
        time: "12:00:37",
        title: "Coded component D",
        content: "Component D coded for CTO",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "08/04/2022",
            time: "12:02:44",
            comment: "Nicely done, Worker2",
          },
        ],
      },
      {
        author: "Worker2",
        journalId: "10",
        date: "08/04/2022",
        time: "16:59:11",
        title: "Coded component E",
        content: "Component E coded per CTO's request",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "08/04/2022",
            time: "17:35:00",
            comment: "Looks good, but can you align this with Worker 1?",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "08/04/2022",
        time: "18:00:04",
        title: "Component F",
        content: "Where do I change my state?",
        isSolved: false,
        comments: [
          {
            username: "Sin Hian",
            date: "08/04/2022",
            time: "18:05:50",
            comment: "You can do it in either component D or E",
          },
        ],
      },
    ],
  },
  {
    userId: 6,
    username: "MinionA",
    password: "minion123",
    email: "minion1@remotr.com",
    position: "UX Designer",
    isManager: false,
    employees: [],
    img: "https://imgur.com/uWkrgVJ.png",
    status: "offline",
    interactionCount: 2,
    workJournal: [
      {
        author: "MinionA",
        date: "07/04/2022",
        time: "11:00:30",
        title: "Graphic User Interface",
        content: "GUI colour research",
        private: true,
        comments: [
          {
            username: "Sharlyn",
            date: "07/04/2022",
            time: "12:02:31",
            comment: "Nicely done, MinionA",
          },
        ],
      },
      {
        author: "MinionA",
        date: "07/04/2022",
        time: "16:55:20",
        title: "Button A design",
        content: "Changed location of button A on main page",
        private: false,
        comments: [
          {
            username: "Sharlyn",
            date: "07/04/2022",
            time: "17:36:10",
            comment: "Nicely done, MinionA",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "07/04/2022",
        time: "18:00:39",
        title: "Design Theme",
        content: "What would be the best design theme for the website?",
        isSolved: false,
        comments: [
          {
            username: "Sharlyn",
            date: "07/04/2022",
            time: "18:05:29",
            comment: "You may follow the wireframes that I presented earlier",
          },
        ],
      },
    ],
  },

  {
    userId: 7,
    username: "MinionB",
    password: "minion123",
    email: "minion2@remotr.com",
    position: "Marketing Manager",
    isManager: false,
    employees: [],
    img: "https://imgur.com/FOCoolK.png",
    status: "offline",
    interactionCount: 2,
    workJournal: [
      {
        author: "MinionB",
        date: "08/04/2022",
        time: "11:01:23",
        title: "Marketing Plans 2022",
        content: "Drafted marketing plans for 2022",
        private: true,
        comments: [
          {
            username: "Sharlyn",
            date: "08/04/2022",
            time: "12:12:48",
            comment: "Nicely done, MinionB",
          },
        ],
      },
      {
        author: "MinionB",
        date: "08/04/2022",
        time: "15:55:01",
        title: "Market Research Survey",
        content: "Completed Market Research for Singapore market",
        private: false,
        comments: [
          {
            username: "Sharlyn",
            date: "08/04/2022",
            time: "17:08:05",
            comment: "Could we start on the Thai market next week?",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "08/04/2022",
        time: "00:59:06",
        title: "Marketing strategy",
        content:
          "How can we ensure that the marketing strategy takes into account market conditions due to the Ukraine war?",
        isSolved: false,
        comments: [
          {
            username: "Sharlyn",
            date: "08/04/2022",
            time: "09:05:51",
            comment: "This will be discussed during the upcoming team meeting",
          },
        ],
      },
    ],
  },
];

module.exports = seedUsersData;
