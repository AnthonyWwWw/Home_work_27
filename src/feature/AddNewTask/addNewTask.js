let tasks = [];

export function addNewTask(value){

    if (value) {
        tasks.push(value);
    }
    return tasks;
}