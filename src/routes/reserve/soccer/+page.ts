import type { PageLoad } from './$types';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '$lib/firebase';


export const load = (async () => {
  const querySnapshot = await getDocs(collection(db, 'soccer'));
  
  // Convert Firestore documents to an array
  const dataArray = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  console.log(dataArray);
  return {dataArray}; // Now you have an array of all documents


}) satisfies PageLoad;