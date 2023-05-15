## Setup
1. Setup the database in mongodb under the database name nosql\_db
2. Name of the collections should be debt\_to\_gdps, fiscal\_balances, gdp\_growths, inflations, total\_reserves with self understand data values in them.
3. Use "mongoimport --host localhost --port 27017 --db <database> --collection <collection> --type csv --headerline --file <file>" to add data to the collections.
4. cd into backend directory and do npm install to install all node modules.
5. cd into front\_end directory and do npm install to install all node modules.

## Working
1. Start the mongodb server.
2. cd into backend directory and do npm start to start the backend.
3. cd into front\_end directory and do npm start to start the front end.
4. Open localhost:19006 to view the front end.
