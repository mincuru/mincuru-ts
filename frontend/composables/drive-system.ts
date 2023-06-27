export function useDriveSystem() {
  // type DriveSystem = 'FF' | 'FR' | 'RR' | 'MR' | 'AWD';
  function toLabel(driveSystem: string): string {
    switch (driveSystem) {
      case 'FF':
        return 'FF';
      case 'FR':
        return 'FR';
      case 'RR':
        return 'RR';
      case 'MR':
        return 'MR';
      case 'AWD':
        return 'AWD';
    }
    return driveSystem;
  }
  return { toLabel };
}
