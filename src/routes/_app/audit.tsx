import { createFileRoute } from "@tanstack/react-router";
import { DefaultProjectRedirect } from "@/client/components/DefaultProjectRedirect";

export const Route = createFileRoute("/_app/audit")({
  component: AuditRedirect,
});

function AuditRedirect() {
  return <DefaultProjectRedirect destination="audit" />;
}
