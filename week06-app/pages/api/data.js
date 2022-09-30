// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import firebase from "../../lib/firebase_access";

export default async function handler(request, response) {
  try {
    const snap = await firebase_access.collection("data").get();
    
    let data = [];
    snap.forEach(
      (document) => {
        data.push( { id:document.id, data:document.data() } );
      }
    );

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.json({ data });
  } catch(error) {
    console.error(error);
    response.status(error.status || 500).end(error.message);
  }

}