export function useBody() {
  // type BodyType = (typeof BodyType)[keyof typeof BodyType];
  // const BodyType = {
  //   SEDAN: 'SEDAN',
  //   HATCHBACK: 'HATCHBACK',
  //   CROSS_COUNTRY: 'CROSS_COUNTRY',
  //   K: 'K',
  //   COUPE: 'COUPE',
  //   STATION_WAGON: 'STATION_WAGON',
  //   SUV: 'SUV',
  //   ONEBOX: 'ONEBOX',
  //   K_OPEN: 'K_OPEN',
  //   K_ONEBOX: 'K_ONEBOX',
  //   OPEN: 'OPEN',
  //   PICKUP_TRUCK: 'PICKUP_TRUCK',
  // } as const;

  function toTypeLabel(type: string): string {
    switch (type) {
      case 'SEDAN':
        return 'セダン';
      case 'HATCHBACK':
        return 'ハッチバック';
      case 'CROSS_COUNTRY':
        return 'クロスカントリー';
      case 'K':
        return '軽自動車';
      case 'COUPE':
        return 'クーペ';
      case 'STATION_WAGON':
        return 'ステーションワゴン';
      case 'SUV':
        return 'SUV';
      case 'ONEBOX':
        return 'ワンボックス';
      case 'K_OPEN':
        return '軽オープン';
      case 'K_ONEBOX':
        return '軽ワンボックス';
      case 'OPEN':
        return 'オープン';
      case 'PICKUP_TRUCK':
        return 'ピックアップトラック';
      default:
        return type;
    }
  }
  return { toTypeLabel };
}
