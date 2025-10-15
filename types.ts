
export interface NewsStory {
  headline: string;
  summary: string;
}

export interface WeatherInfo {
  city: string;
  temperature: string;
  condition: string;
}

export interface KeralaUpdates {
  topStories: NewsStory[];
  weather: WeatherInfo[];
  generalUpdate: string;
}

export interface GroundingSource {
  web?: {
      uri: string;
      title: string;
  };
}
