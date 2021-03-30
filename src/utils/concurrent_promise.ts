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

    await new Promise(r => setTimeout(r, 5000));

    Array.prototype.push.apply(
      results,
      await Promise.all(chunks.map((c) => c())),
    );
    currentIndex += concurrency;
  }
  return results;
};

export const concurrentPromiseWithWait = async <T>(
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

    // for Too Many Request Fail
    await new Promise(r => setTimeout(r, 5000));

    Array.prototype.push.apply(
      results,
      await Promise.all(chunks.map((c) => c())),
    );
    currentIndex += concurrency;
  }
  return results;
};
