interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
}

interface Question {
  _id: string;
  title: string;
  description: string;
  tags: Tag[];
  author: Author;
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: boolean;
}
