
import OpenAI from "openai";
import { GEMINI_APIKey } from "./constant";

const openai = new OpenAI({
  apiKey: GEMINI_APIKey,
  dangerouslyAllowBrowser: true,
});

export default openai;