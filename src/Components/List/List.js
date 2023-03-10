import './List.css';


export function List(props){

    function getTaskId(){
        props.deleteTask(props.taskId)
    }

    return(
        <li className='task-list'>
            <p>{props.text}</p>
            <button 
                className='delete-btn'
                onClick={getTaskId}
            >
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>
    )
}