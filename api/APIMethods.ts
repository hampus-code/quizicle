import { TriviaAPIResponse } from "../types/TriviaAPIResponse";
import { TriviaQuestion } from "../types/TriviaQuestion";
import { APIConfig } from "./APIConfig";
import { Get } from "./APIUtils";

export async function fetchTriviaQuestions(): Promise<TriviaQuestion | null> {
  try {
    const response = await Get<TriviaAPIResponse>(APIConfig.questions.fetch);
    const questions = response.data.results;

    if (questions.length > 0) {
      console.log(questions[0]);

      return questions[0];
    }

    return null;
  } catch (error) {
    console.log("Error fetching trivia question: ", error);
    return null;
  }
}
