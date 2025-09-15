export interface Tasks {
    id?: number;
    title: string;
    description: string;
    duedate: Date;
    status?: "TODO" | "ONGOING" | "DONE" | "CANCELLED";
}
