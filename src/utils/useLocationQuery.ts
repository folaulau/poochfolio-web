export const useLocationQuery = () => {
  const { pathname } = window.location;

  return pathname;
};
