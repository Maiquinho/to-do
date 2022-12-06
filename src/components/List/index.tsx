import { StyledList } from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';


type ListProps = {
    item: Item;
};


export function List({ item }: ListProps){
    const [isChecked, setIsChecked] = useState(item.taskDone);

    return(
        <StyledList done={isChecked}>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />

            <label>{item.taskName}</label>

        </StyledList>
    );
}