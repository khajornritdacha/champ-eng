import { ApplicationChecklist } from "../components/checklist/application-checklist";
import { PageShell } from "../components/layout/page-shell";

export default function ChecklistPage(): React.JSX.Element {
  return (
    <PageShell>
      <ApplicationChecklist id="application-checklist" />
    </PageShell>
  );
}
