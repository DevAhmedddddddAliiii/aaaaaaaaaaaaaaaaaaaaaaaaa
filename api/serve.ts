import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve((req) => {
  return new Response("Lume server simulation – but static is better", {
    headers: { "content-type": "text/plain" },
  });
});
