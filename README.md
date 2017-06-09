# DoctorIQ

### Submission for Javascript Coding Challenge
Received on 6/7/2017, to be completed by 6/13/2017

### Startup
To run the server, ensure port 3000 is free on localhost and
```
cd server
npm install
npm run start
```

To run the client, ensure port 3001 is free on localhost and
```
cd client
npm install
npm run start
```

*If your browser does not open to localhost:3001 automagically then you may have to do so manually*

### Features
Patient  
![](https://media.giphy.com/media/3o7btLEb0OY31tUccU/giphy.gif)

Doctor  
![](https://media.giphy.com/media/3o7bu9uizaL9XHtSBa/giphy.gif)

### Overview
Two primary code bases

_Client_  
- React for modular, reusable view logic
  - Smart/Dumb pattern to tie together pure components and Redux functionality
- Redux with immutable state assignment for unidirectional data flow (Flux-ish)
- Routing to encapsuate SPA principles in PatientDetail and PatientSearch
- Reactive X (RxJs) to simplify async logic and blend results into redux architecture
- Webpack to bundle assets and thin out memory footprint of deployment
- Babel to transpile newer javascript functionality for cross-browser compat
- Unit tests with Jest, Enzyme

_Server_  
- Token based endpoint to serve consumable JWT
  - Grant-based token to differentiate b/w doctor and patient
- RESTful endpoints with query params to support naive search model
- Unit tests with Mocha, Chai, Supertest and coverage with Istanbul

### Assumptions
1. Given the nature of patient data and the desire to avoid search collisions, the search functionality should be more robust than, say, a google-esque dropdown that shows you nearby pizza joints. Therefore, a table with sorting and pageable funtionality was implemented, but was then scaled back due to time constraints.
2. Given assumption 1, separating the search from the patient SPA is desirable as it declutters the screen while still providing a quick, intuitive transition.
3. The most desiriable way to manage scheduling appoints would be through a calendar widget that supports scanning through time frames at different grains. Would base this decision on user feedback in true dev scenario.
4. Cross-browser compat can be evaluated at a later time when granted better access to test environment simulation and tooling.

### Remaining
_Client_  
- Use private routing to ensure grant enforces which pages are accessible
- Include auth token in common interceptor/middleware
- Implement file upload functionality
  - Create epic to retrieve file list, possibly infinite scroller/paged
- Implement schedule edit functionality
  - Create modal to view appointment details and cancel requests
  - Create modal to post new appointment
- Finish unit testing endpoint logic

_Server_  
- Flesh out remaining JWT auth architecture (protected endpoints)
- Implement file upload/download endpoint
  - Use multi-part form data to attach the file stream
- Implement schedule POST endpoint to update/request appointments
- Tie together with data-layer (ORM?)
- Endpoint validation schema
- Finish unit testing endpoint logic
