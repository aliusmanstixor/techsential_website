export default function separateNumberAndLabel(input: string) {
  const num: number = parseFloat(input); // Extract numeric part
  const label = input.replace(num.toString(), "").trim() as string; // Extract alphabetical part
  return { num, label };
}
