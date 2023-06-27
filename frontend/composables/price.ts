export function usePrice() {
  function toTenThousandYen(price: number): string {
    return `${Math.floor(price / 10000)}万円`;
  }
  return { toTenThousandYen };
}
