export const measureMemory = async (code: () => any) => {
  let fullTime = 0;
  let fullMemory = 0;

  // setInterval(() => {
  //   console.log(`⏰ Miliseconds: ${averageTime}`);
  //   console.log(`💾 Bytes: ${averageMemory}`);
  // }, 1000);

  const startTime = performance.now();
  const startMemory = process.memoryUsage().heapUsed;
  console.log("🚦measuring...");

  code();

  const endMemory = process.memoryUsage().heapUsed;
  const endTime = performance.now();

  fullTime = endTime - startTime;
  fullMemory = endMemory - startMemory;

  console.log(`⏰ Miliseconds: ${fullTime.toFixed(5)}`);
  console.log(`💾 Bytes: ${fullMemory.toFixed(2)}`);
};
