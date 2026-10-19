const labelColors = [
  {
    value: "gray",
    label: "Stone",
    color: "var(--color-faint, var(--muted-foreground))",
  },
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
