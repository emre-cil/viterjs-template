/* eslint-disable no-promise-executor-return */
// A mock function to mimic making an async request for data
export default function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  );
}
