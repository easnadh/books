export type BookAPIDataType = {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors?: [];
    description: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    pageCount: number;
    publishedDate: string;
    publisher: string;
  };
};

export type BookType = {
  id: string;
  title: string;
  subtitle?: string;
  authors?: string;
  description: string;
  image?: string;
  pageCount: number;
  publishedDate: string;
  publisher: string;
};
