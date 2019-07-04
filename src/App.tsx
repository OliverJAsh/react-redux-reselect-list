import { connect } from "react-redux";
import { State } from "./state-type";
import { getTags } from "./selectors";
import { TagsListType } from "./types";
import { TagsList } from "./TagsList";

type Props = {
  tags: TagsListType;
};
const App: React.FC<Props> = ({ tags }) => (
  // This is one particular instance of `TagsList` being used in our app. There
  // may be others, with different data.
  <TagsList {...tags} />
);

const mapStateToProps = (state: State) => ({
  tags: getTags(state)
});

const AppEnhanced = connect(mapStateToProps)(App);
