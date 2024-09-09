export function ddmmyyyySlashed(d) {
  const dAsDate = new Date(d.split("T")[0]);
  return `${dAsDate.getDate().toString().padStart(2, "0")}/${(
    dAsDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${dAsDate.getFullYear()}`;
}
