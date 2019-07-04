import { TagType, TagsListType } from "./types";

const Tag: React.FC<TagType> = ({ title, link }) => <div>{title}</div>;

// `TagsList` is a generic presentation component. It's not connected to the store, so it's up
// to the caller to decide what data should be used.
export const TagsList: React.FC<TagsListType> = tags => (
  <ul>
    {tags.map(tag => (
      <Tag key={tag.link} {...tag} />
    ))}
  </ul>
);
