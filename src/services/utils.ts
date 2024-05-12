export const getApiPath = (segment = "") => {
  const validSegment = segment.trim().replace(/^\\/g, "");

  return `https://analytics-engine-api-dot-encouraging-art-348821.nn.r.appspot.com/${validSegment}`;
};
