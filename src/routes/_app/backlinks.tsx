import { createFileRoute } from "@tanstack/react-router";
import { DefaultProjectRedirect } from "@/client/components/DefaultProjectRedirect";

export const Route = createFileRoute("/_app/backlinks")({
  component: BacklinksRedirect,
});

function BacklinksRedirect() {
  return <DefaultProjectRedirect destination="backlinks" />;
}
