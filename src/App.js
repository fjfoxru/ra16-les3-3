import logo from './logo.svg';
import messagesList from './data/messages';
import MessageHistory from './components/MessageHistory/MessageHistory';
import './App.css';

function App() {
  const messages = messagesList;
  return (
    <div className="App">
        <div className="clearfix container">
          <div className="chat">
            <div className="chat-history">
              {messages.length > 0 && <MessageHistory list={messages}/>}
            </div>
          </div>
        </div>  
    </div>
  );
}
export default App;
