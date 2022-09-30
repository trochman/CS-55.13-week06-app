import adminAccess from "firebase-admin";

const serviceAccountKey = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY
);

try {
  adminAccess.initializeApp({
    credential: adminAccess.credential.cert(serviceAccountKey),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATA_URL,
  });
} catch(error) {
  if ( error.message.indexOf("already exists") === -1 ) {
    console.log("firebase error:", error.stack);
  }
}

export default adminAccess.firestore();