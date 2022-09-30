import firebaseData from "./firebase_access";

export async function getDataIds() {
  let data = [];
  try {
    const snap = await firebase_access.collection("data").get();
    
    snap.forEach(
      (document) => {
        data.push(
          {
            params: {
              id:document.id
            }
          }
        );
      }
    );
  } catch(error) {
    console.error(error);
  }
  return data;
}

export async function getData(idRequested) {
  const document = await firebase_access.collection("data").doc(idRequested).get();

  let data;
  if (!document.empty) {
    data = { id:document.id, data:document.data() };
    
  } else {
    data = null;
  }

  return data;
}