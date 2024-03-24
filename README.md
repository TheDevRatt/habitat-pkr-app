<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TheDevRatt/habitat-pkr-app">
    <img src="/assets/images/PKRIcon.png" alt="Logo" width="150" height="150">
  </a>

<h3 align="center">PKRides</h3>

  <p align="center">
  An innovative car-sharing platform designed to support Habitat for Humanity Peterborough & Kawartha Region homeowners!
    <br />
    <a href="https://github.com/TheDevRatt/habitat-pkr-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TheDevRatt/habitat-pkr-app">View Demo</a>
    ·
    <a href="https://github.com/TheDevRatt/habitat-pkr-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/TheDevRatt/habitat-pkr-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <img src="assets/images/startingScreen.png" alt="Product Screenshot">
</p>

Connectivity and Sustainability are the cornerstones of any successful initiative and PKRides aims to foster both along with a driven community among Habitat for Humanity Peterborough & Kawartha Region homeowners. This project, born from a collaboration with Trent University's COIS-4000Y capstone course, introduces a novel car-sharing solution aimed at alleviating transportation costs, optimizing space for housing development, and promoting environmental stewardship. It embodies our commitment in working with Habitat for Humanity in not just building homes, but also nurturing a supportive and resource-efficient community, reinforcing the mission ensuring everyone has a decent place to live.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Expo][Expo.dev]][Expo-url]
- [![React][React.js]][React-url]
- [![TypeScript][TypeScript.org]][TypeScript-url]
- [![JavaScript][javascript.com]][JavaScript-url]
- [![Firebase][firebase.com]][Firebase-url]
- [![GitHub][github.com]][GitHub-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Ensure you have the required tools installed:

#### For Windows/Android:

- [Android Studio](https://developer.android.com/studio)
- [Expo Go](https://expo.dev/client)

#### For IOS/Mac:

- Built in iOS Simulator.
- [Expo Go](https://expo.dev/client)

### Prerequisites

No prerequisites required other than the above tools and a decent computer capable of compiling and building the project.

### Installation

1. Clone the repo into a folder of your choosing
   ```sh
   git clone https://github.com/TheDevRatt/habitat-pkr-app.git
   ```
2. Open a command prompt within the working folder by click on the address bar and typing `CMD` then `Enter` on windows.

3. Install the required Node Modules by running the following command:
   ```sh
   npm ci
   ```
4. Navigate to the functions folder after Step 3 finishes by typing:
   ```sh
   cd functions
   ```
5. Install the required firebase node-modules by running the following command:
   ```sh
   npm ci
   ```
6. Navigate back out to the working folder by typing in the command line:
   ```sh
   cd ..
   ```
7. You should finally be able to start the project by running the following:
   ```sh
   npx expo start -c
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Home page
  - [x] Apple/Google sign up functionality
  - [x] Create Account Page
  - [x] Login Page
  - [x] Add information Page
  - [x] Select Membership Page
  - [x] Add payment information page
  - [x] Notifiaction of Signup page
  - [x] Forgot Password page
- [x] Database Functionality
- [x] Profile Page
  - [ ] Ride History Page
  - [x] License and Insurance Page
  - [x] Terms and Conditions Page
  - [ ] Payment History Page (Dependant on Payment Service)
  - [x] FAQ Page
  - [x] Settings Page
  - [x] My Info Page
  - [x] Change Password Page
  - [ ] Sub Account Page (Shelved Feature)
  - [ ] Add Sub Account Page (Shelved Feature)
- [x] Reservation Page
  - [x] Detailed car view page
  - [x] Select booking date page
  - [x] My Reservations page
  - [x] Booking Details Page
  - [x] Choose Payment Page
- [x] Pick up and Drop off Page
  - [x] Active Reservation pages
  - [x] Accident Report Pages
  - [x] Reservation Warning page
- [x] Key Holder Page
  - [x] Reservations History page
  - [x] Active reservations page
  - [x] Damage report page
- [x] Admin Page
  - [x] Signed up users page
  - [ ] Blocked users page
  - [ ] Keyholders page
  - [x] Add user page
  - [ ] Add admin page
  - [ ] Manage user page
  - [ ] Add car page
  - [ ] Manage car page
- [ ] Payment Service (Shelved Feature)

See the [open issues](https://github.com/TheDevRatt/habitat-pkr-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions will be accepted till **March 25th, 2024**, after which this project will be abandoned.

If you or someone else wishes to take the concepts used in this project for your own future mobile ride-sharing app or simply want to use what was built here as a framework, feel free to fork this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Please contact **Habitat for Humanity - Peterborough & Kawartha Region** for licensing.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Matthew Makary - [@LinkedIn](https://www.linkedin.com/in/matthew-makary-52b093249/) - Matthew_Makary@outlook.com

Brady Gibson -

Emma Villas - [@LinkedIn](https://www.linkedin.com/in/emmavillas/) - emmavillas@trentu.ca

Rishit Arora -

Project Link: [https://github.com/TheDevRatt/habitat-pkr-app](https://github.com/TheDevRatt/habitat-pkr-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Trent University]()
- [Habitat for Humanity - Peterborough & Kawartha Region]()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/TheDevRatt/habitat-pkr-app.svg?style=for-the-badge
[contributors-url]: https://github.com/TheDevRatt/habitat-pkr-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TheDevRatt/habitat-pkr-app.svg?style=for-the-badge
[forks-url]: https://github.com/TheDevRatt/habitat-pkr-app/network/members
[stars-shield]: https://img.shields.io/github/stars/TheDevRatt/habitat-pkr-app.svg?style=for-the-badge
[stars-url]: https://github.com/TheDevRatt/habitat-pkr-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/TheDevRatt/habitat-pkr-app.svg?style=for-the-badge
[issues-url]: https://github.com/TheDevRatt/habitat-pkr-app/issues
[license-shield]: https://img.shields.io/github/license/TheDevRatt/habitat-pkr-app.svg?style=for-the-badge
[license-url]: https://github.com/TheDevRatt/habitat-pkr-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: assets/images/startingScreen.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React-url]: https://reactjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Expo-url]: https://expo.dev/
[Expo.dev]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo
[TypeScript-url]: https://www.typescriptlang.org/
[TypeScript.org]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Firebase-url]: https://firebase.google.com/
[firebase.com]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white
[Square-url]: https://squareup.com/
[squareup.com]: https://img.shields.io/badge/Square-3E4348?style=for-the-badge&logo=square&logoColor=white
[JavaScript-url]: https://www.javascript.com/
[javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[GitHub-url]: https://github.com/
[github.com]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
