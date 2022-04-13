# Project 3 - Remotr

Remotr is a web application designed for remote teams to promote accountability, transparency, and to build a culture of helping one another, wherever they are.

## Problem Statement

The future of work is remote. In the future, there will be many teams that may have to collaborate and work together without ever meeting in person. This brings a whole suite of problems:

For managers, how are they able to track whether their staff are engaged, overloaded, or have no work going on?

For dispersed team members, aside from feeling isolated and far away from help if they need it, how are they able to prove their value and impact to their managers or their team, especially if everyone is working remotely?

## Our solution

The remote working tools currently in use are not designed for:

- Remote workers to trackwork and showcase their work achievements to their team or to their bosses
- Remote workers who need help but for some reason are hesitant to ask for help directly

Remotr seeks to fill this gap by combining the productivity of a kanban board with the helpfulness of a question and answer bulletin board, made available to all team members to build a culture of helping others.

## Key features and functions

1. WorkJournal Function

Now managers can track their team members tasks remotely, via Remotr's "WorkJournal" function, and team members do not need to constantly update each other what they are working on. These will all be updated real time in the team's WorkJournal and available for view by all in the team, promoting accountability and transparency in the team. Team members will quickly be able to identify any overlapping work items, which will prevent unnecessary work and fuel collaboration without endless messaging and time consuming 1:1 check-ins.

2. "White Flags" function

With the "White Flags" function, team members who need help can obtain help discreetly or anonymously, and avail themselves to the collective knowledge of the team. Managers will be able to see who are the more helpful or knowledgeable team members that help the other team members with their white flags.

### Wireframes

The planning sketch of the project, pre-build:

![Main Page Wireframe](https://i.imgur.com/lGrPpZM.png)
![Journal and WhiteFlags Wireframes](https://i.imgur.com/oQ2uBes.png)

### User Stories

```
The user experience of Remotr is intended to be simple and easy to navigate. Upon login, users immediately see the two key functions of Remotr and on the main page, users will be able to:

- See their entire team (and team member status, colour coded)
- View all their team members WorkJournals
- Comment on any WorkJournal
- View team members White Flags
- View comments on White Flags

The navigational bar allows each user to click in to the specific function, which will allow a user to:

1.
- Create a WorkJournal
- Read / View all WorkJournals created by such user
- Update / Edit any WorkJournal title and content
- Delete any WorkJournal

2.
- Create a White Flag
- Read / View all White Flags
- Update / Edit their White Flags
- Delete any White Flag (when White Flags are marked as "Resolved")

```

In this way, managers are able to track their team's work using WorkJournal, team members are able to showcase and track their achievements throughout the year using the same WorkJournal function.

Remote team members can get the help they need anonymously or discreetly if they prefer, and active and helpful team members get the recognition they deserve from their managers and fellow team members.

---

## Planning and Development Process

Our planning and development of this project focused on the struggles of remote teams, from both the manager and the workers' viewpoints (see section titled "Problem Statement" above).

We then planned out what are the key pain points that need to be solved:

- Work tracking
- Help function

and we decided to display both functions on a single main page for users' easy viewing.

We relied on reusable component cards to render the WorkJournals and WhiteFlags, with a streamlined colour scheme to help the user quickly identify and distinguish between the two.

### Technical Usage

This project was built using the following, contributed by using standard Git flow on Github

```
- MongoDB
- Express
- React framework
- Node
- tailwindCSS
- Axios for API

```

### Future features

The following add-on features may be considered in future iterations of the Remotr app:

- Private vs Public view function for WorkJournals (for more sensitive work items)
- Separate teams function, for larger organisations
- Upvoting for most preferred White Flag answers, to allow users to choose their most preferred answers if there are multiple responses to the same question
- Archive function to store resolved White Flags, as a FAQ source for new hires or new team members who may face similar issues
- Manager mode vs Team member mode
- Team member status (online, offline, away, need Help)
- Team member help counts and interaction counts

---
