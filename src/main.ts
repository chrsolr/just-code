import { run as runSimpleQueue } from "@dsa/SimpleQueue.ts";
import { run as runPriorityQueue } from "@dsa/PriorityQueue.ts";

if (import.meta.main) {
  (async () => {
    const [challenge] = Deno.args;

    console.info(`\nTerminal Argument: ${challenge} \n`);

    if (challenge === "simple-queue") {
      await runSimpleQueue();
      Deno.exit(0);
    }

    if (challenge === "priority-queue") {
      await runPriorityQueue();
      Deno.exit(0);
    }

    console.error("Challenge not found!");
    Deno.exit(1);
  })();
}
