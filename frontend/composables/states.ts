export const useDrawer = () =>
  useState<{ drawer: boolean }>('drawer', () => {
    return {
      drawer: true,
    };
  });
