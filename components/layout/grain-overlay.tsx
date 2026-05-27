export function GrainOverlay() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.045] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.72'/%3E%3C/svg%3E\")"
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 bg-[linear-gradient(90deg,rgba(216,201,165,0.035),transparent_24%,transparent_78%,rgba(159,183,196,0.032)),radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_78%,rgba(0,0,0,0.72)_100%)]"
      />
    </>
  );
}
