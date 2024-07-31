function NewTask(props) {
    const { children } = props;

    return (
        <tr>
            <th scope='row'>1</th>
            <td>{children}</td>
            <td>In progress</td>
            <td>
                <button type='submit' className='btn btn-danger'>Delete</button>
                <button type='submit' className='btn btn-success ms-1'>Finished</button>
            </td>
        </tr>
    );
}

export default NewTask;
