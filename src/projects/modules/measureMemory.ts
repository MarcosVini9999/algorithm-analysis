export const measureMemory = (code: () => any) => {
  let time = 0;
  let memory = 0;

  const startTime = performance.now();
  const startMemory = process.memoryUsage().heapUsed;
  console.log("🚦measuring...");

  code();

  const endMemory = process.memoryUsage().heapUsed;
  const endTime = performance.now();

  time = endTime - startTime;
  memory = endMemory - startMemory;

  console.log(`⏰ Miliseconds: ${time.toFixed(5)}`);
  console.log(`💾 Bytes: ${memory.toFixed(2)}`);

  return { time, memory };
};
