import Link from 'next/link';

// interface Conversation {
//   id: string;
//   lastMessage: string;
//   isUnread: boolean;
//   // ...other relevant conversation data
// }

const Inbox = ({ conversations }) => {
  return (
    <div className=""> {/* Adjust width as needed */}
      <div className="p-4 font-semibold text-lg">Inbox</div>
      <div className="overflow-y-auto"> {/* Enable scrolling for conversations */}
        {conversations.map((conversation) => (
          <Link
            href={`/messages/${conversation.id}`} key={conversation.id}
            className={`block p-3 hover:bg-gray-100 ${conversation.isUnread ? 'font-bold' : ''}`}
          >
            {/* <a className={`block p-3 hover:bg-gray-100 ${conversation.isUnread ? 'font-bold' : ''}`}>  */}
              {/* Add last message preview, sender, etc. */}
            {/* </a> */}
            <div className="flex items-center">
            <div className="mr-3"> 
                {/* Consider replacing with user profile image/initials */}
                <span className="bg-gray-300 rounded-full w-8 h-8 block text-center">AJ</span>  
            </div>
            <div>
                <p className="font-semibold">{conversation.lastMessage.senderName}</p> {/* Fetched via data */}
                <p className="text-sm text-gray-500 truncate">{conversation.lastMessage.content}</p>  {/* Truncate for preview */}
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Inbox; 
