export type CollectionPhoto = {
  id: string;
  collection: "photography";
  data: {
    title: string,
    src: string,
    pubDate: Date,
    description: string
  };
  filePath?: string;
};

export type Photo = {
  id: string,
  title: string;
  src: string;
  pubDate: Date;
  description: string;

  collection: "photography";
};

export const convertPhoto = (collectionPhoto: CollectionPhoto): Photo => {
  return {
    id: collectionPhoto.id,
    title: collectionPhoto.data.title,
    src: "/images/photography/" + collectionPhoto.data.src,
    pubDate: collectionPhoto.data.pubDate,
    description: collectionPhoto.data.description,
    collection: collectionPhoto.collection,
  };
}
