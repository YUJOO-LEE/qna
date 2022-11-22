import { firestore } from 'firebase-admin';

interface MessageBase {
  id: string;
  message: string;

  /** 댓글 */
  reply?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };

  /** 비공개 여부 */
  deny?: boolean;
}

export interface InMessage extends MessageBase {
  createAt: string;
  replyAt?: string;
}

export interface InMessageServer extends MessageBase {
  createAt: firestore.Timestamp;
  replyAt?: firestore.Timestamp;
}
