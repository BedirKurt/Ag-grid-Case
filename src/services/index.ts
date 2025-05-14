import { HttpService, RequestState } from "azax";
import { reactive } from "vue";

export const client = new HttpService({
  baseUrl: "jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  config: {
    rateLimit: 5,
    cooldown: 3,
    retries: 3,
    delay: 5000,
  },
});

export const state = reactive(new RequestState());
