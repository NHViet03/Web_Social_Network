# Social Network Website Using Link Prediction Models for Follower Suggestions

![Logo](./client/src/images/auth/logo-2.png)

## Project Introduction
We developed a social network website inspired by Instagram. The project includes a website for users and another for administrators using a NoSQL database. The user site provides all the basic features of a social network such as posting, liking, commenting on posts, as well as following, messaging, etc. between users. The admin site allows for statistical analysis and management of content such as posts, users, user reports, and more. In addition, using graph theory and link prediction algorithms, we employ four link prediction algorithms based on node similarity: Common Neighbor, Jaccard, Adamic-Adar, and Katz Index.
* This project is used to serve as a final term project for two courses in the Information Systems department at UIT: Web Application Development - IS207 (9.5) and Social Network - IS353.O21 ()

## Team Members

| ID        | Name         | Facebook                          | Contribution %  |
| :-------- | :----------- | :-------------------------------- | :-------------- |
| 21522791  | Nguyễn Hoàng Việt | [Nguyễn Hoàng Việt](https://www.facebook.com/NgyenHoangViet) | 100 |
| 21520400  | Nguyễn Hoàng Phúc | [Nguyễn Hoàng Phúc](https://www.facebook.com/hoangphucseiza) | 100 |

## Technologies Used

- **Frontend**: React, Redux, Bootstrap
- **Backend**: NodeJS, ExpressJS, FastAPI
- **Real-time**: Socket.IO
- **Database**: MongoDB
- **Graph Theory & Link Prediction**: NetworkX

## Database Schema 
![Schema](./demo/schema.png)

## Main Features of the Website
----------------
### Main Features for Users
> * Login / Register (API Token)
> * Create/Like/Comment/Report Posts
> * Follow/Search/View Other Users' Profiles
> * Real-time Notifications/Messaging/Calling
> * Manage Own Profile

### Main Features for Admins
> * Dashboard
> * Manage Posts
> * Manage Users
> * Manage Post Reports

## Demo of Some Interfaces

<details>
<summary>User Interface</summary>
  
>* Login

![SignUp](./demo/login.png)

>* Home Page

![Home](./demo/home_page.png)

>* Create Post

![Create Post](./demo/create_post.png)

>* Comment on Post

![Comment Post](./demo/comment.png)

>* Search and Explore

![Search Explore](./demo/seach_explore.png)

>* Messaging

![Message](./demo/message.png)

>* Notifications and Profile

![Notify Profile](./demo/notify_profile.png)
</details>

<details>
<summary>Admin Interface</summary>
  
>* Dashboard

![Admin Dashboard](./demo/admin_dashboard.png)

>* Manage Posts

![Admin Post](./demo/admin_post_detail.png)

>* Manage Users

![Admin User](./demo/admin_users.png)

>* User Statistics and Send Email

![Admin Send Mail](./demo/admin_sendmail.png)

>* Manage Post Reports

![Admin Report](./demo/admin_report.png)
</details>

## Installation Guide

### Prerequisites
- Node.js
- npm 
- Python 3.x (for FastAPI and NetworkX)

### Installation Steps

## References

- [MERN Stack - Build a social media app](https://github.com/devat-youtuber/MERN-Stack-Build-a-social-media-app)
