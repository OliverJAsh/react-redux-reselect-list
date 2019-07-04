import { State } from "./state-type";
import { TagsListType, TagType } from "./types";

export const getTags = (state: State): TagsListType =>
  state.people.map(
    (person): TagType =>
      // Bad! We're creating a new object reference each time. No memoization.
      ({
        title: person.name,
        link: person.portfolioUrl
      })
  );
