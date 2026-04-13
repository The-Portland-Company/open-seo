import { createFileRoute } from "@tanstack/react-router";
import { DefaultProjectRedirect } from "@/client/components/DefaultProjectRedirect";

export const Route = createFileRoute("/_app/keywords")({
  component: KeywordsRedirect,
});

function KeywordsRedirect() {
  return <DefaultProjectRedirect destination="keywords" />;
}
