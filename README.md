# SERVER
npm install
npx tsc --init
npm run dev
npx knex migrate:latest --knexfile knexfile.ts migrate:latest OR npm run knex:migrate
npx knex --knexfile knexfile.ts seed:run OR npm run knex:seed


# WEB
npm install
yarn start