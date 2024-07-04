import React, { useContext, useState } from 'react';
import { ThemeContext } from '../feature/ChangeColor/ChangeColor';
import FormAddNewTask from '../widget/FormAddNewTask';
import { addNewTask } from '../feature/AddNewTask/addNewTask';
import NewTask from '../widget/NewTask';

function Main() {
    const { theme } = useContext(ThemeContext);
    const [tasks, setTasks] = useState(addNewTask());

    const handleAddTask = (newTask) => {
        const updatedTasks = addNewTask(newTask);
        setTasks([...updatedTasks]);
    };

    return (
        <main className='_conteiner' style={{ background: theme.background, color: theme.color }}>
            <section className='_conteiner'>
                <div className='container py-5 h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col col-lg-9 col-xl-7 castom'>
                            <div className='card rounded-3'>
                                <div className='card-body p-4'>

                                    <h4 className='text-center my-3 pb-3'>To Do App</h4>

                                    <FormAddNewTask onAddTask={handleAddTask} />

                                    <table className='table mb-4'>
                                        <thead>
                                            <tr>
                                                <th scope='col'>No.</th>
                                                <th scope='col'>Todo item</th>
                                                <th scope='col'>Status</th>
                                                <th scope='col'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tasks.map((task, index) => (
                                                <NewTask key={index}>{task}</NewTask>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
