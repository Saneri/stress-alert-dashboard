export interface StressValues {
  channelName: string;
  channelId: string;
  timestamp: string;
  stressValues: {
    messageCount: number;
    stressMessages: number;
  };
}
