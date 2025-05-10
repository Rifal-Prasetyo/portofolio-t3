export interface SpotifyNowPlaying {
  item: {
    id: string;
    name: string;
    artists: {
      name: string;
    }[];
    album: {
      images: {
        url: string;
        height: number;
        width: number;
      }[];
    };
    duration_ms: number;
  };
  currently_playing_type?: 'track' | 'episode' | 'ad' 
  progress_ms: number;
  is_playing: boolean;
}

export interface SpotifyAccessTokenResponse {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number; // in seconds, usually 3600
  scope?: string;
}
export interface SpotifyAPIToken {
    refresh_token: string;
    access_token: string;
    expires_in: number;
}