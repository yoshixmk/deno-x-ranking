// @see https://qiita.com/ttiger55/items/3f7732f19fe927d1bf0a
export const concurrentPromise = async <T>(
  promises: (() => Promise<T>)[],
  concurrency: number,
): Promise<T[]> => {
  const results: T[] = [];
  let currentIndex = 0;

  while (true) {
    const chunks = promises.slice(currentIndex, currentIndex + concurrency);
    if (chunks.length === 0) {
      break;
    }
    Array.prototype.push.apply(
      results,
      await Promise.all(chunks.map((c) => c())),
    );
    currentIndex += concurrency;
  }
  return results;
};
