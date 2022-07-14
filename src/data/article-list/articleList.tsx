export type ArticleDetail = {
  id: number;
  title: string;
  date: number;
  tag: string[];
}

const articleList: ArticleDetail[] = [
  {
    id: 1,
    title: 'Redux的非同步處理（Redux-thunk）',
    date: 1657521638384,
    tag: ['React', 'Redux', 'Redux-thunk']
  },
  {
    id: 2,
    title: 'JavaScript的原型繼承（Prototypical Inheritance）',
    date: 1657238538384,
    tag: ['JavaScript', 'OOP', 'class']
  },
  {
    id: 3,
    title: '演算法 - 合併排序（Merge Sort）',
    date: 1656726839485,
    tag: ['Algorithm', 'Sorting']
  }
];


export default articleList;