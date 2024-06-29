export interface TodoItem {
    id: string;
    userId: string;
    title: string;
    content: string;
    createdAt: Date;
    updateAt: Date;
    endDate: Date;
    startDate: Date;
    isCompleted: boolean;
}
