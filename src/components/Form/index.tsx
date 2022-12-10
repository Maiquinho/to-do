import { useState, KeyboardEvent } from 'react';
import { StyledForm } from './styles';


interface FormProps {
    onEnter: (taskName: string) => void
}

export function Form({ onEnter }: FormProps){
    const [inputText, setinputText] = useState('');

    function handleKeyUp (event: KeyboardEvent){
        
        // o bug está aqui provavelmente
        if(event.code === 'Enter'){
            // event.preventDefault();
            onEnter(inputText);
            // console.log(inputText);
        }

    }

    return(
        <StyledForm>
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