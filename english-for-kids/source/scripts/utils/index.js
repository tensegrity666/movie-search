const parser = new DOMParser();

export const parseHtmlFromString = (htmlString) => {
  return parser.parseFromString(htmlString, 'text/html').documentElement;
};

export { parseHtmlFromString as default};
