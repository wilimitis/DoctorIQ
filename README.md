# DoctorIQ

### Submission for Javascript Coding Challenge
Received on 6/7/2017, to be completed by 6/13/2017

### Install
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

### Features


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

_Server_  
- Token based endpoint to serve consumable JWT
  - Grant-based token to differentiate b/w doctor and patient
  
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
