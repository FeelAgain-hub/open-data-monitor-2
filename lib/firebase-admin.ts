import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = !getApps().length ? initializeApp({
  projectId: firebaseConfig.projectId,
}) : getApp();

export const adminDb = getFirestore(app, firebaseConfig.firestoreDatabaseId);


