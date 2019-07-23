# ded-data-backend

# Startup

If you don't have ts-node, prisma CLI & npx installed:

```
npm install -g ts-node prisma npx 
```

Then run the following:

```
docker-compose up # Starts the prisma 1.31 server along with a postgres database
cd prisma-reporting
prisma deploy # deploys the reporting datamodel
cd ../prisma-mapping
prisma deploy # deploys the mapping datamodel
cd ..
ts-node ./src/index # runs the apollo server
```