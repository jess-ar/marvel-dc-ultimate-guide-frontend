# 🦸‍♂️ Marvel & DC: Ultimate Guide

## 📑 Table of Contents
- [🎯 Project Description](#-project-description)
- [📑 Project Documentation](#-project-documentation)
- [🌟 Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [🚀 Installation and Configuration](#-installation-and-configuration)
- [📦 Dependencies](#-dependencies)
- [💻 Usage](#-usage)
- [🔗 API Integration](#-api-integration)
- [🧪 Testing](#-testing)
- [🤝 Contributions](#-contributions)
- [📧 Contact](#-contact)

## 🎯 Project Description
**Marvel & DC: Ultimate Guide** is an interactive platform where users can explore popular characters and teams from the Marvel and DC universes. The project offers features such as advanced character search and the ability to perform CRUD actions to manage the characters. It is built with React on the frontend and Django on the backend.

**Note**: This project is continuously evolving. Suggestions and contributions are welcome!

## 📑 Project Documentation

You can find the detailed project briefing, which includes the objectives, technical requirements, and planning phase, in the following PDF:

- **[Download Briefing - Español](./Briefing_Marvel_DC_Ultimate_guide_español.pdf)**
- **[Download Briefing - English](./Briefing_Marvel_DC_Ultimate_guide_english.pdf.pdf)**

## 🌟 Features
- **🔍 Character Search**: Allows users to search for Marvel and DC characters through an interactive search bar.
- **📑 CRUD for Characters, Users, and Teams**: Administrators can create, read, update, and delete characters, users, and teams.
- **🦸‍♂️ Team Management**: Characters are divided between Marvel and DC, with teams like The Avengers for Marvel and The Justice League for DC, along with additional teams.
- **📝 User Management**: Implementation of authentication and user management with JWT.


## 🛠 Technologies Used
- **Frontend**:
  - React: v18.3.1
  - React Router Dom: v6.26.1
  - Tailwind CSS: v3.4.10
  
- **Backend** ([GitHub Repository](https://github.com/jess-ar/marvel-dc-ultimate-guide-backend)):
  - Django (v5.1.1)
  - Django Rest Framework (v3.15.2)
  - JWT (SimpleJWT): for authentication.
  - PostgreSQL: for database management.

- **Tools**:
  - Git & GitHub
  - Jira (Task management)
  - DrawSQL (for database diagrams)

## 🚀 Installation and Configuration

1. **Clone the frontend repository**:

```bash
git clone https://github.com/jess-ar/marvel-dc-ultimate-guide-frontend.git
cd marvel-dc-ultimate-guide-frontend
```

2. **Install dependencies**:

```bash
npm install
```

## 📦 Dependencies
The following dependencies are essential if you are not cloning the repository directly. Ensure these are installed and properly configured to run the project:

### Production
- **@fortawesome/free-solid-svg-icons**: v6.6.0
- **@fortawesome/react-fontawesome**: v0.2.2
- **Axios**: v1.7.7 for making HTTP requests.
- **JWT Decode**: v4.0.0 for decoding JWT tokens.
- **React Router DOM**: v6.26.1 for routing management in the application.

### Development
- **@vitejs/plugin-react-swc**: v3.5.0 for using SWC with React.
- **Autoprefixer**: v10.4.20 to automatically add CSS prefixes.
- **eslint-plugin-react**: v7.35.0.
- **eslint-plugin-react-hooks**: v5.1.0-rc.0.
- **eslint-plugin-react-refresh**: v0.4.9.
- **PostCSS**: v8.4.45, necessary for Tailwind.
- **Tailwind CSS**: v3.4.10 for modular styling.
- **Vite**: v5.4.1 for fast bundling and project compilation.

3. **Configure the environment**:
   - Create an `.env` file with API credentials and backend configuration:

```bash
REACT_APP_SUPERHERO_API_KEY=tu_api_key
```

4. **Start the development server:**:

```bash
npm run dev
```

## 💻 Usage

Once the project is configured, open the browser and access localhost to view the application. From the main page you can search for characters, view details, and manage the catalogue.

## 🔗 API Integration

This project uses the **Superhero API** to obtain information on popular Marvel and DC characters. The data obtained is used to populate the team and character pages.



## 🧪 Testing

To run the tests on the frontend, use the following command:

```bash
npm run test
```

## 🤝 Contributions

Contributions are welcome. If you want to add improvements or fix any problems, please open an issue or send a pull request.

## 📧 Contact
- [GitHub](https://github.com/jess-ar) - Jess
- [LinkedIn](https://www.linkedin.com/in/jessica-arroyo-lebron/) - Jessica Arroyo Lebrón

