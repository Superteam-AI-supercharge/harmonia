// src/types/tweet.ts

export type TweetStatus = "draft" | "scheduled" | "published";

export interface Tweet {
  id: string;
  content: string;
  mediaIds?: string[];
  createdAt: Date;
  status: TweetStatus;
  scheduledFor?: Date;
  threadId?: string;
  position?: number;
  lastSaved?: string;
  tags?: string[];
}

export interface Thread {
  id: string;
  tweetIds: string[];
  createdAt: Date;
  status: TweetStatus;
  scheduledFor?: Date;
  tags?: string[];
}

export interface ThreadWithTweets extends Thread {
  tweets: Tweet[];
}
export interface UnifiedTweetComposerProps {
  draftId: string | null;
  draftType: "tweet" | "thread" | null;
}
// Types for media storage
export interface StoredMedia {
  id: string;
  data: string; // base64 encoded file data
  type: string; // mime type
  lastModified: string;
}
