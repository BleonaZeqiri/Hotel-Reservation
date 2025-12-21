export interface IFaq {
  id: number;
  title: string;
  target: string;
  content: string;
  isExpanded?: boolean;
  parentId?: string;
}
