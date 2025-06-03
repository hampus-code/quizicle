import { TriviaQuestion } from "./TriviaQuestion";

export interface TriviaAPIResponse {
  response_code: number;
  results: TriviaQuestion[];
}
