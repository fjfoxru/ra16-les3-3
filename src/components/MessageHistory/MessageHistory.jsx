import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory (props) {

    const renderMessage = function(item) {
        <li class="clearfix">
            <div class="message-data align-right">
                <span class="message-data-time">10:10</span> &nbsp; &nbsp;
                <span class="message-data-name">Ольга</span>
                <i class="fa fa-circle me"></i>
            </div>
            <div class="message other-message float-right">
                Привет, Виктор. Как дела? Как идет работа над проектом?
            </div>
        </li>
    };

    

    return (
        <ul>
            {props.list.map(item => {
                if (item.type === 'message') {
                    <Message render={item => renderMessage(item)} />
                } else if (item.type === 'Response') {
                    <Response render={item => renderMessage(item)}/>
                } else if (item.type === 'Typing') {
                    <Typing render={item => renderMessage(item)}/>
                }
            })}
        </ul>
    );

}


MessageHistory.defaultProps = {
    list: [],
}


export default MessageHistory;