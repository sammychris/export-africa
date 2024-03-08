import Inbox from '@/components/Inbox';
import { useRouter } from 'next/navigation';

// interface Message {
//   senderId: string;
//   content: string; 
//   // ...other message properties
// }


const users = [
    { _id: 'new mongoose.Types.ObjectId()', name: 'Alice Johnson' },
    { _id: 'new mongoose.Types.ObjectId()', name: 'Ben Carter' },
    { _id: 'new mongoose.Types.ObjectId()', name: 'Kwame Asante' },
    // ... add more users as needed
  ];
  

const conversations = [
    {
      _id: 'new mongoose.Types.ObjectId()',
      participants: [users[0]._id, users[1]._id],
      lastMessage: {  // Embed last message here
        sender: users[1]._id,
        senderName: users[1].name, // Include sender's name directly
        content: 'Hi Alice, yes, I might be. Could you send me more details?',
      }  // Alice and Ben are conversing
    },
    {
      _id: 'new mongoose.Types.ObjectId()',
      participants: [users[0]._id, users[2]._id], // Alice and Kwame are conversing
      lastMessage: {  // Embed last message here
        sender: users[1]._id,
        senderName: users[1].name, // Include sender's name directly
        content: 'Hi Alice, yes, I might be. Could you send me more details?',
      } 
    }
    // ... add more conversations, including those with multiple participants
  ];


  const messages = [
    {
      conversationId: conversations[0]._id, // Belongs to Alice-Ben conversation
      sender: users[0]._id,  // Sent by Alice
      content: 'Hello Ben, are you interested in the textiles I have available?',
      status: 'read'
    },
    {
      conversationId: conversations[0]._id,
      sender: users[1]._id,  // Sent by Ben
      content: 'Hi Alice, yes, I might be. Could you send me more details?',
      status: 'read' 
    },
    {
      conversationId: conversations[1]._id, 
      sender: users[2]._id,  // Sent by Kwame
      content: 'Hi Alice, I heard you have some great deals on electronics.',
      status: 'new' // This one is unread
    },
    // ... add more messages with varying 'status' values
  ];
  
  
  

const Conversation = () => {
  // const router = useRouter();
//   const { conversationId } = router.query;
  // ...Fetch messages for conversationId 

  const currentUserId = 'codel'

  return (

    
    <div className="flex">
      <div className="w-1/3"> 
      <Inbox conversations={conversations} />
      </div>
      <div className="flex-grow">
        {/* {children} Main content of each page */}


<div className="flex flex-col h-screen"> {/* Your provided layout */}
      {/* ... Conversation Header  */}

      <div className="flex-1 overflow-y-auto p-4">
  {/* Loop through messages */}
  {messages.map((message) => (
    <div key={message.id} className={`my-2 ${message.sender === currentUserId ? 'self-end' : ''}`}> {/* Style based on sender */}
      <p className="p-2 rounded-lg bg-gray-200">{message.content}</p>
    </div>
  ))}
</div>
<div className="p-4 border-t">
  {/* Input, Send button */}
</div>
</div>

      </div>
    </div>

  );
};




export default Conversation;
