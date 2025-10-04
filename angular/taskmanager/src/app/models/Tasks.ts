export interface Tasks {
    id?: number;
    title: string;
    description: string;
    dueDate: Date;
    status?: "TODO" | "ONGOING" | "DONE" | "CANCELLED";
    priority?: "HIGH" | "LOW" | "MEDIUM"
}
