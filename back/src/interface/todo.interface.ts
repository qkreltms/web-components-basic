export interface TodoItem {
    id: string;
    userId: string;
    text: string;
    createdAt: Date;
    updateAt: Date;
    completed: boolean;
}
