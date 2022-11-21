export interface InMessage {
  id: string;
  message: string;

  /** 댓글 */
  reply?: string;
  createAt: string;
  replyAt?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
}
