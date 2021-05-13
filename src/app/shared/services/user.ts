import { NodeStringDecoder } from 'string_decoder';

export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
  
   emailVerified: boolean;
}