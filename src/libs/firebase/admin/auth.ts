import { getAuth } from 'firebase-admin/auth';
import app from '.';

const auth = getAuth(app);

export default auth;
