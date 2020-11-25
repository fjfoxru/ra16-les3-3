function Response (props) {
    return (
        <>
            {props.render(props.item)}
        </>
        );
    
    }
    export default Response;