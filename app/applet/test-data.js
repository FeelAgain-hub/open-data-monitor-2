import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';

const firebaseConfig = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function checkData() {
  const esozSnapshot = await getDocs(collection(db, 'esoz_declarations'));
  console.log('esoz_declarations count:', esozSnapshot.size);
  esozSnapshot.forEach(doc => console.log(doc.id, doc.data()));

  const mhpiSnapshot = await getDocs(collection(db, 'aggregated_metrics'));
  console.log('aggregated_metrics count:', mhpiSnapshot.size);
  mhpiSnapshot.forEach(doc => console.log(doc.id, doc.data()));
}

checkData().catch(console.error);
