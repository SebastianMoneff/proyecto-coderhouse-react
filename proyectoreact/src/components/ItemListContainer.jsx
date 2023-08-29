import { ItemCount } from "./ItemCount";

export const ItenListContainer = (props) => {
    return (
        <>
        <div>{props.greeting}</div>
        <ItemCount/>
        </>
    )
};
