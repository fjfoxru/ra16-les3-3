function Message (props) {
return (
    <>
        {props.render(props.item)}
    </>
    );

}
export default Message;