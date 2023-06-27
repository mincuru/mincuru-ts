export function useFuel() {
  function toLabel(fuelType: string): string {
    switch (fuelType) {
      case 'DIESEL':
        return '軽油';
      case 'REGULAR':
        return '無鉛レギュラーガソリン';
      case 'PREMIUM':
        return '無鉛プレミアムガソリン';
      case 'LPG':
        return 'LPG';
      case 'BIO':
        return 'バイオ燃料';
      case 'HYDROGEN':
        return '水素';
      default:
        return fuelType;
    }
  }
  return { toLabel };
}
