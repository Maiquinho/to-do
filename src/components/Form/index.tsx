import { useState, KeyboardEvent } from 'react';
import { StyledForm } from './styles';


interface FormProps {
    onEnter: (taskName: string) => void
}

export function Form({ onEnter }: FormProps){
    const [inputText, setinputText] = useState('');

    function handleKeyUp (event: KeyboardEvent){

        if(event.key === 'Enter'){
            onEnter(inputText);
            setinputText('');
        }

    }

    return(
        <StyledForm onSubmit={e => e.preventDefault()}>
            <label>+</label>
            <input 
                type="text" 
                placeholder="Add new task" 
                value={inputText} 
                onChange={e => setinputText(e.target.value)} 
                onKeyUp={handleKeyUp}
            />
        </StyledForm>
    );
}