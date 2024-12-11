export const extractRichText = (richText: any): string => {
  let text = "";

  const extract = (node: any) => {
    if (node?.text) {
      text += node.text;
    }
    if (node?.children) {
      node.children.forEach((child: any) => extract(child));
    }
  };

  extract(richText);

  return text;
};
