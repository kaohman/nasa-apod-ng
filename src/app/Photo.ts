import { MediaType } from './enums/MediaType';

export class Photo {
  id: string;
  date: string;
  explanation: string;
  media_type: MediaType;
  title: string;
  url: string;
}