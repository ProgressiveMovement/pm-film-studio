// DECISION (Studio 2.0): label colours come from the Dossier palette: ink, muted,
// faint, and the three tones (ok, warn, bad) each in a plain and a deeper mix.
// The stored values (gray, teal, red, ...) and the names stay, so nothing migrates.
const labelColors = [
  { value: "gray", label: "Stone", color: "var(--color-faint)" },
  { value: "dark-gray", label: "Slate", color: "var(--muted-foreground)" },
  { value: "purple", label: "Lavender", color: "var(--foreground)" },
  { value: "teal", label: "Sage", color: "var(--success)" },
  {
    value: "green",
    label: "Forest",
    color: "color-mix(in srgb, var(--success) 70%, var(--foreground))",
  },
  { value: "yellow", label: "Amber", color: "var(--warning)" },
  {
    value: "orange",
    label: "Terracotta",
    color: "color-mix(in srgb, var(--warning) 70%, var(--foreground))",
  },
  {
    value: "pink",
    label: "Rose",
    color: "color-mix(in srgb, var(--destructive) 70%, var(--foreground))",
  },
  { value: "red", label: "Crimson", color: "var(--destructive)" },
];

export default labelColors;
