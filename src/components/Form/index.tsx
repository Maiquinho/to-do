import { ChangeEvent, FormEvent, useState } from 'react';
import { StyledForm } from './styles';


function handleTask(event: FormEvent){

    event.preventDefault();

}

export function Form(){
    const [taskName, setTaskName] = useState('');

    return(
        <StyledForm onSubmit={handleTask}>
            <label>+</label>
            <input type="text" placeholder="Nova tarefa" value={ taskName } onChange={ e => setTaskName(e.target.value) } />
        </StyledForm>
    );
}