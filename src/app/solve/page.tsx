import SolvePageClient from "./SolvePageClient";

// Thin server entry; the solver portal lives in SolvePageClient and ./_components.
export default function SolvePage() {
  return <SolvePageClient />;
}
