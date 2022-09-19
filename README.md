# frontend UI for bgdestroyer.com
A frontend for https://bgdestroyer.com implemented using
NextJS and Firebase.

## Getting Started

Create a .env.local and ensure following variables are set:
```
NEXT_PUBLIC_APIURL=http://localhost:8080/remove
NEXT_PUBLIC_FIREBASE_API_KEY=replaceme
NEXT_PUBLIC_FIREBASE_PROJECT=replaceme
```

Run a local version of the backend:
```
git clone https://github.com/samos123/bgdestroyer
docker-compose up -d
```

Run the development serve to test:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production is running on Vercel and main branch is directly connected to prod.

