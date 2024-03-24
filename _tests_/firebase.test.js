import { initializeApp } from "firebase/app";
import {
  getFirestore,
  connectFirestoreEmulator,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NODE_ENV === "test") {
  connectFirestoreEmulator(db, "localhost", 8080);
}

describe("Firestore operations", () => {
  test("add and retrieve a document", async () => {
    // Add a document
    const docRef = await addDoc(collection(db, "testCollection"), {
      key: "value",
    });

    // Retrieve the document
    const docSnapshot = await docRef.get();

    // Assert that the document was correctly added
    expect(docSnapshot.exists()).toBeTruthy();
    expect(docSnapshot.data()).toEqual({ key: "value" });
  });

  test("retrieve all documents in a collection", async () => {
    // Retrieve all documents in the collection
    const querySnapshot = await getDocs(collection(db, "testCollection"));

    // Assert that the correct number of documents was retrieved
    expect(querySnapshot.size).toBe(1);
  });

  // Add more tests as needed
});
