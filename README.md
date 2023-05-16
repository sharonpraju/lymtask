## :pushpin: Tech stack
- Node
- Express
- React
- Mongo

## :bookmark: General Instructions
- :label: By default Node server will run on port 5000 and React will run on port 3000 (In case if needed to change this behaviour please modify the `.env` file inside the `backend/app` directory)
- :sparkles: Please make sure the port 5000 and 6000 of the host machine is not used by other services since docker attaches the backend service to port 5000 and mongodb to 6000 of the host machine (To change this behaviour please modify the `.env` file inside the `backend` directory)
- :closed_lock_with_key: Demo credentials to login
  - `email: user1@gmail.com`
  - `password: password1`
- :package: Frontend is not dockerized
- :building_construction: MVC architecture has been followed

# :rocket: To run the project without docker
## Starting backend (Node server)
- Navigate to backend/app directory
- Run the command `npm install`
- Run the command `npm start`
- Seed the database with user's data by using the command `npx mongoose db:seed:all`
## Starting frontend (React)
- Navigate to frontend directory
- Run the command `npm install`
- Run the command `npm start`

# :whale: To run the project using docker
- Navigate to backend directory
- Run the code `docker-compose up`
