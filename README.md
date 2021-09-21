# MERN+GraphQL Boilerplate  
_Highly scalable MERN+GraphQL boilerplate packaged with Lerna_. 

### Development Setup
_Configure Environment Variables_  
`cp .env.local .env`  

_Install Dependencies_  
`npm install`  
`npx lerna bootstrap`  

_Migrate and Seed Database_  
`npm run db:migrate`  
`npm run db:seed`  

_Run Application_  
`npm run dev:backend`  
`npm run dev:frontend`  

_Test Application_  
`npm run lint` or `npm run lint:fix`  
`npm run test` or `npm run test:coverage`  
