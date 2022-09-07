export class Task {
    id: number;
    taskName: string;
    description: string;
    deleteFlag: boolean;

    constructor (id : number, taskName :  string , description : string, deleteFlag: boolean ){
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.deleteFlag = deleteFlag
    }
}