import { createFileRoute } from "@tanstack/react-router";
import { DefaultProjectRedirect } from "@/client/components/DefaultProjectRedirect";

export const Route = createFileRoute("/_app/domain")({
  component: DomainRedirect,
});

function DomainRedirect() {
  return <DefaultProjectRedirect destination="domain" />;
}
