import { PageShell } from "../components/layout/page-shell";
import { MentorsList } from "../components/mentors/mentors-list";

export default function MentorsPage(): React.JSX.Element {
  return (
    <PageShell>
      <MentorsList id="mentors-list" />
    </PageShell>
  );
}
