import { IonToggle } from "@ionic/react";
import { InsetIonItem } from "../../../../pages/profile/ProfileFeedItemsPage";
import { useAppDispatch, useAppSelector } from "../../../../store";
import {
  OCommentThreadCollapse,
  setCommentsCollapsed,
} from "../../settingsSlice";
import SettingSelector from "../../shared/SettingSelector";

export default function CollapsedByDefault() {
  const dispatch = useAppDispatch();
  const { collapseCommentThreads } = useAppSelector(
    // this needs a better naming
    (state) => state.settings.general.comments,
  );

  return (
    <SettingSelector
      title="Collapse Comment Threads"
      selected={collapseCommentThreads}
      setSelected={setCommentsCollapsed}
      options={OCommentThreadCollapse}
    />
  );
}
