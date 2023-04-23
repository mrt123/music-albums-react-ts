const fakeFetch = (rawData: any) => {
  console.log("---- executing fake fetch -----");
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(rawData);
    }, 1000);
  });
};

export default fakeFetch;

export const addDelay = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};
