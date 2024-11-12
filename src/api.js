import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"; //full for real-time data

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBYpSo4urfCwOVwbFpIjkIZA-UHV1KIXA",
  authDomain: "vanlife-e33bf.firebaseapp.com",
  projectId: "vanlife-e33bf",
  storageBucket: "vanlife-e33bf.firebasestorage.app",
  messagingSenderId: "307187518849",
  appId: "1:307187518849:web:95ecf6777bb726f67c6c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//start Refactoring the fetching functions
const vansCollectionRef = collection(db, "vans") 
const userCollectionRef = collection(db, "users")

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)
  /* also can be used
  const vanSnapshot = getDoc(docRef)
  const dataVan = (await vanSnapshot).data()
  return dataVan
  */
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "789")) //Hardcode
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  return dataArr
}

export async function loginUser(email, password) {

  const q = query(userCollectionRef, where("email","==", email))
  const userSnapshot = await getDocs(q)
  const userDoc = userSnapshot.docs[0]
  const userData = userDoc.data()

  try {
    if (password === userData.password ) {
      console.log("Succes")
    } else {
      console.log("Somethings wrong")
    } 
    } catch (error) {
      console.log(error.message)
    }
}



//make real auth with firebase

/*
export async function getVans (id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
} 


export async function getHostVans (id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
} 


export async function loginUser (creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}
*/