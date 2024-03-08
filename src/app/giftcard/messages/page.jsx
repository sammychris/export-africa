import Link from 'next/link';


const conversations = [
    {
      id: 1,
      dealerId: 27, // Links to a dealer profile
      dealerName: 'Trusted Gift Card Exchange',
      latestMessage: 'Are you still interested in the iTunes card?',
      hasUnread: true,
    },
    {
      id: 2,
      dealerId: 31,
      dealerName: 'Quick Card Deals',
      latestMessage: 'Thanks for reaching out! What can I help you with?',
      hasUnread: false,
    },
    // ... Add 2-3 more conversations 
  ];

  

  const activeConversation = {
    dealerId: 27,
    dealerName: 'Trusted Gift Card Exchange',
    messages: [
      { id: 1, content: 'Hi, is this card still available?', isFromBuyer: true },
      { id: 2, content: 'Yes, it is! Are you interested?', isFromBuyer: false },
      // ... Add a few more messages to create a short conversation
    ],
  };

  

const Messages = () => {
    return (
        <div className="container mx-auto">
  {/* ... (Header, Sidebar, etc.) ... */}

  <main>
    <h1 className="text-2xl font-medium mb-4">Messages</h1>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Conversations List */}
      <aside className="md:col-span-1 bg-white rounded-lg shadow-md p-4">
  <ul> 
    {conversations.map((conversation) => (
      <li key={conversation.id} className="border-b border-gray-200 py-3 hover:bg-gray-100">
        {/* <Link href={`/messages/${conversation.dealerId}`}>  */}
          <a> 
            <div className="flex items-center">
              <div className="text-lg font-medium">{conversation.dealerName}</div>
              {conversation.hasUnread && ( 
                <span className="ml-2 inline-block bg-blue-500 text-white text-xs px-2 rounded-full">New</span>
              )}
            </div>
            <p className="text-gray-600 truncate">{conversation.latestMessage}</p>
          </a>
        {/* </Link> */}
      </li>
    ))}
  </ul>
</aside>

      {/* Chat Area */}
      <div className="md:col-span-4 bg-white rounded-lg shadow-md p-4">
  {/* Header (Dealer Name, etc.) */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-medium">{activeConversation?.dealerName}</h2> 
    {/* Potential actions: Mark as read, etc. */}
  </div>

  {/* Message Display */}
  <div className="chat-messages-container h-64 overflow-y-scroll"> 
    {activeConversation?.messages.map((message) => (
      <div key={message.id} className={`flex my-2 ${message.isFromBuyer ? 'justify-start': 'justify-end'}`}>
        <div className="bg-gray-100 p-3 rounded-lg max-w-xs break-words">
          <p className="text-sm">{message.content}</p>
        </div>
      </div> 
    ))}
  </div>

  {/* Message Input */}
  <form className="mt-4"> 
    <textarea rows="3" className="w-full border border-gray-300 rounded-md p-2" placeholder="Type your message..."></textarea>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Send</button>
  </form>
</div>

      
    </div>

  </main>
</div>

    )
}

export default Messages;