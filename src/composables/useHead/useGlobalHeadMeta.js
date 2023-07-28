import { useHead, useServerHead, useServerSeoMeta, useSeoMeta } from "unhead";

export function useGlobalHeadMeta(title, description, keywords) {
  const globalHead = useHead({
    title: title,
    meta: [
      // {
      //   name: "description",
      //   content: description,
      // },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: title,
      },
            {
        name: "author",
        content: title,
      },
      {
        property: "og:Image",
        content:  "https://abanoubgeorge.info/img/profile.png",
      },
    ],
  });
  const globalServerHead = useServerHead({
    title: title,
    meta: [
      // {
      //   name: "description",
      //   content: description,
      // },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: title,
      },
      {
        property: "og:Image",
        content:  "https://abanoubgeorge.info/img/profile.png",
      },
    ],
  });
  const globalSeoHead = useSeoMeta({
    title: title,
    description: description,
    ogDescription: description,
    ogTitle: title,
    ogImage: "https://abanoubgeorge.info/img/profile.png",
  });

  const globalServerSeoHead = useServerSeoMeta({
    title: title,
    // description: description,
    // ogDescription: description,
    ogTitle: title,
    ogImage: "https://abanoubgeorge.info/img/profile.png",
  });

  return {
    globalHead,
    globalServerHead,
    globalSeoHead,
    globalServerSeoHead,
  };
}
