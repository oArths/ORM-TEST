
export const color = (color? : boolean) => {
  switch (color) {
    case true:
      return `#002366 ;`;
    case false:
      return `#6C91C2;`;
    default:
      return `#c26c6c`;
  }
};
