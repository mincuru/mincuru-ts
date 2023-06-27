export function usePowerTrain() {
  function toLabel(powerTrain: string): string {
    switch (powerTrain) {
      case 'ICE':
        return 'エンジン';
      case 'StrHV':
        return 'ストロングハイブリッド';
      case 'MldHV':
        return 'マイルドハイブリッド';
      case 'SerHV':
        return 'シリーズハイブリッド';
      case 'PHEV':
        return 'プラグインハイブリッド';
      case 'BEV':
        return 'バッテリーEV';
      case 'RexEV':
        return 'レンジエクステンダーEV';
      case 'FCEV':
        return '燃料電池車';
      default:
        return powerTrain;
    }
  }
  return { toLabel };
}
