import { StyledList } from './styles';
import { Item } from '../../types/Item';


export function List({ name }: Item){

    return(
        <StyledList>
            <input type="checkbox" />
            <label>{name}</label>
        </StyledList>
    );
}