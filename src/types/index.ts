type BookDataType = {
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
  book: BookDataType;
};
