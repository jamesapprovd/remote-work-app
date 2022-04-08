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
    img: "",
    status: "",
    interactionCount: 5,
    workJournal: [
      {
        date: "6/4/2022",
        time: "2045",
        title: "Logos Creation",
        content: "I created a few awesome logos for the company!",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "6/4/2022",
            time: "2046",
            comment: "Nicely done, boss!",
          },
          {
            username: "Sharlyn",
            date: "6/4/2022",
            time: "2047",
            comment: "Awesome, boss!",
          },
        ],
      },
      {
        date: "7/4/2022",
        time: "930",
        title: "Puntuality",
        content: "Reached campus on time and got my coffee!",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "7/4/2022",
            time: "935",
            comment: "Great work, boss!",
          },
          {
            username: "Sharlyn",
            date: "7/4/2022",
            time: "938",
            comment: "Yay, boss!",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "6/4/2022",
        time: "1901",
        title: "Need help with day 7 homework!",
        content: "Why doesn't my create work in postman?",
        isSolved: false,
        comments: [
          {
            username: "Sing Hian",
            date: "6/4/2022",
            time: "1933",
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
    img: "",
    status: "online",
    interactionCount: 0,
    workJournal: [
      {
        date: "6/4/2022",
        time: "2056",
        title: "React",
        content: "I created routes and pages!",
        private: true,
        comments: [
          {
            username: "James",
            date: "6/4/2022",
            time: "2100",
            comment: "Yay! Nicely done, Sing Hian",
          },
          {
            username: "Sharlyn",
            date: "6/4/2022",
            time: "2102",
            comment: "Yay! It fits the theme",
          },
        ],
      },
      {
        date: "7/4/2022",
        time: "1000",
        title: "Lunch",
        content: "What are we eating for lunch today?",
        private: false,
        comments: [
          {
            username: "James",
            date: "7/4/2022",
            time: 1002,
            comment: "It's still early, do your work!",
          },
          {
            username: "Sharlyn",
            date: "7/4/2022",
            time: "1005",
            comment: "Do your work!",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "6/4/2022",
        time: "1901",
        title: "Help!",
        content: "Redux is so confusing!",
        isSolved: false,
        comments: [
          {
            username: "Sharlyn",
            date: "6/4/2022",
            time: "1939",
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
    img: "",
    status: "online",
    interactionCount: 0,
    workJournal: [
      {
        date: "6/4/2022",
        time: "2045",
        title: "Userflow wireframes",
        content: "Wireframes done and presented to GA",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "7/4/2022",
            time: "1146",
            comment: "That looks really good!",
          },
          {
            username: "James",
            date: "7/4/2022",
            time: "1255",
            comment: "It seems like Desmond and gang likes the design too",
          },
        ],
      },
      {
        date: "7/4/2022",
        time: "1530",
        title: "Efficiency",
        content: "Finished the main page component",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "7/4/2022",
            time: "1535",
            comment: "I have something to add",
          },
          {
            username: "James",
            date: "7/4/2022",
            time: "1546",
            comment: "Wow, that's fast. Let me sync up the backend",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "7/4/2022",
        time: "1800",
        title: "Laptop monitor too small",
        content: "How can I increase my work productivity?",
        isSolved: false,
        comments: [
          {
            username: "James",
            date: "7/4/2022",
            time: "2046",
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
    img: "",
    status: "offline",
    interactionCount: 2,
    workJournal: [
      {
        date: "7/4/2022",
        time: "1200",
        title: "Coded component A",
        content: "Component A coded for CTO",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "7/4/2022",
            time: "1202",
            comment: "Nicely done, Worker1",
          },
        ],
      },
      {
        date: "7/4/2022",
        time: "1659",
        title: "Coded component B",
        content: "Component B coded per CTO's request",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "7/4/2022",
            time: "1735",
            comment: "The code looks weird, lets discuss tomorrow",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "7/4/2022",
        time: "1800",
        title: "Component C",
        content: "How to prop chicken from component B to component C?",
        isSolved: false,
        comments: [
          {
            username: "Sin Hian",
            date: "7/4/2022",
            time: "1805",
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
    img: "",
    status: "online",
    interactionCount: 3,
    workJournal: [
      {
        date: "8/4/2022",
        time: "1200",
        title: "Coded component D",
        content: "Component D coded for CTO",
        private: true,
        comments: [
          {
            username: "Sing Hian",
            date: "8/4/2022",
            time: "1202",
            comment: "Nicely done, Worker2",
          },
        ],
      },
      {
        date: "8/4/2022",
        time: "1659",
        title: "Coded component E",
        content: "Component E coded per CTO's request",
        private: false,
        comments: [
          {
            username: "Sing Hian",
            date: "8/4/2022",
            time: "1735",
            comment: "Looks good, but can you align this with Worker 1?",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "8/4/2022",
        time: "1800",
        title: "Component F",
        content: "Where do I change my state?",
        isSolved: false,
        comments: [
          {
            username: "Sin Hian",
            date: "8/4/2022",
            time: "1805",
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
    img: "",
    status: "offline",
    interactionCount: 2,
    workJournal: [
      {
        date: "7/4/2022",
        time: "1100",
        title: "Graphic User Interface",
        content: "GUI colour research",
        private: true,
        comments: [
          {
            username: "Sharlyn",
            date: "7/4/2022",
            time: "1202",
            comment: "Nicely done, MinionA",
          },
        ],
      },
      {
        date: "7/4/2022",
        time: "1655",
        title: "Button A design",
        content: "Changed location of button A on main page",
        private: false,
        comments: [
          {
            username: "Sharlyn",
            date: "7/4/2022",
            time: "1736",
            comment: "Nicely done, MinionA",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "7/4/2022",
        time: "1800",
        title: "Design Theme",
        content: "What would be the best design theme for the website?",
        isSolved: false,
        comments: [
          {
            username: "Sharlyn",
            date: "7/4/2022",
            time: "1805",
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
    img: "",
    status: "offline",
    interactionCount: 2,
    workJournal: [
      {
        date: "8/4/2022",
        time: "1101",
        title: "Marketing Plans 2022",
        content: "Drafted marketing plans for 2022",
        private: true,
        comments: [
          {
            username: "Sharlyn",
            date: "8/4/2022",
            time: "1212",
            comment: "Nicely done, MinionB",
          },
        ],
      },
      {
        date: "8/4/2022",
        time: "1555",
        title: "Market Research Survey",
        content: "Completed Market Research for Singapore market",
        private: false,
        comments: [
          {
            username: "Sharlyn",
            date: "8/4/2022",
            time: "1708",
            comment: "Could we start on the Thai market next week?",
          },
        ],
      },
    ],
    whiteFlag: [
      {
        date: "8/4/2022",
        time: "0059",
        title: "Marketing strategy",
        content:
          "How can we ensure that the marketing strategy takes into account market conditions due to the Ukraine war?",
        isSolved: false,
        comments: [
          {
            username: "Sharlyn",
            date: "8/4/2022",
            time: "0905",
            comment: "This will be discussed during the upcoming team meeting",
          },
        ],
      },
    ],
  },
];

export default seedUsersData;
