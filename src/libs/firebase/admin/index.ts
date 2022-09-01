import { credential } from 'firebase-admin';
import { AppOptions, getApp, getApps, initializeApp } from 'firebase-admin/app';

const firebaseAdminConfig: AppOptions = {
  credential: credential.cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  }),
};

const app = getApps().length ? getApp() : initializeApp(firebaseAdminConfig);

export default app;
