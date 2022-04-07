const mockUsersData = [
  {
    userId: 1,
    username: "James",
    email: "james@remotr.com",
    password: "james123",
    admin: true,
    img: "",
    position: "Manager",
    status: "",
    interactionCount: 0,
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
        title: "Punctuality",
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
    email: "singhian@remotr.com",
    password: "singhian123",
    admin: false,
    img: "",
    position: "Junior Executive",
    status: "",
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
            comment: "Yay!",
          },
          {
            username: "Sharlyn",
            date: "6/4/2022",
            time: "2102",
            comment: "Yay!",
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
  // {...}, {...} ...
];

// whiteFlagsData = [];

export default mockUsersData;
