// InboxPage.jsx
import React, { useState } from 'react';

const InboxPage = () => {
  // Demo data for inbox messages
//   const inboxMessagesData = [
//     {
//       id: 1,
//       sender: {
//         type: 'buyer',
//         name: 'Buyer A',
//         logo: 'url/to/buyerALogo.jpg',
//         location: 'City A, Country A',
//       },
//       content: 'Hello, I am interested in your products. Can you provide more information?',
//       timestamp: '2022-05-15 08:30',
//       status: 'unread',
//       important: false,
//       conversation: [
//         { id: 1, sender: 'Buyer A', content: 'Sure, I would be happy to help. What specific products are you interested in?', timestamp: '2022-05-15 08:35' },
//         { id: 2, sender: 'Seller X', content: 'We have a variety of products. Could you please provide more details about your requirements?', timestamp: '2022-05-15 08:40' },
//         // Add more messages in the conversation
//       ],
//     },
//     {
//       id: 2,
//       sender: {
//         type: 'seller',
//         name: 'Seller X',
//         logo: 'url/to/sellerXLogo.jpg',
//         location: 'City X, Country X',
//       },
//       content: 'Thank you for your inquiry. We have a wide range of products. How can we assist you?',
//       timestamp: '2022-05-14 15:45',
//       status: 'replied',
//       important: true,
//       conversation: [
//         { id: 1, sender: 'Seller X', content: 'Hello, how can we assist you today?', timestamp: '2022-05-14 15:45' },
//         { id: 2, sender: 'Buyer A', content: 'I am interested in your electronics products. Can you provide more details?', timestamp: '2022-05-14 15:50' },
//         // Add more messages in the conversation
//       ],
//     },
//     // Add more messages as needed
//   ];


const inboxMessagesData = [
    // Message 1
    {
      id: 1,
      sender: {
        type: 'buyer',
        name: 'Buyer A',
        logo: 'url/to/buyerALogo.jpg',
        location: 'City A, Country A',
      },
      content: 'Hello, I am interested in your products. Can you provide more information?',
      timestamp: '2022-05-15 08:30',
      status: 'unread',
      important: false,
      conversation: [
        { id: 1, sender: 'Buyer A', content: 'Sure, I would be happy to help. What specific products are you interested in?', timestamp: '2022-05-15 08:35' },
        { id: 2, sender: 'Seller X', content: 'We have a variety of products. Could you please provide more details about your requirements?', timestamp: '2022-05-15 08:40' },
        // Add more messages in the conversation
      ],
    },
    // Message 2
    {
      id: 2,
      sender: {
        type: 'seller',
        name: 'Seller X',
        logo: 'url/to/sellerXLogo.jpg',
        location: 'City X, Country X',
      },
      content: 'Thank you for your inquiry. We have a wide range of products. How can we assist you?',
      timestamp: '2022-05-14 15:45',
      status: 'replied',
      important: true,
      conversation: [
        { id: 1, sender: 'Seller X', content: 'Hello, how can we assist you today?', timestamp: '2022-05-14 15:45' },
        { id: 2, sender: 'Buyer A', content: 'I am interested in your electronics products. Can you provide more details?', timestamp: '2022-05-14 15:50' },
        // Add more messages in the conversation
      ],
    },
    // Message 3
    {
      id: 3,
      sender: {
        type: 'buyer',
        name: 'Buyer B',
        logo: 'url/to/buyerBLogo.jpg',
        location: 'City B, Country B',
      },
      content: `Greetings! I'm looking for a reliable supplier for industrial machinery. Do you have experience in this sector?`,
      timestamp: '2022-05-12 11:20',
      status: 'unread',
      important: true,
      conversation: [
        { id: 1, sender: 'Buyer B', content: `Hello, I'm interested in your industrial machinery. Can you provide more information?`, timestamp: '2022-05-12 11:20' },
        { id: 2, sender: 'Seller Y', content: 'Certainly! We specialize in industrial machinery. What specific type of machinery are you looking for?', timestamp: '2022-05-12 11:25' },
        // Add more messages in the conversation
      ],
    },
    // Add more messages as needed
  ];

  // State for selected message
  const [selectedMessage, setSelectedMessage] = useState(null);

  // State for composing a new message
  const [composeMode, setComposeMode] = useState(false);
  const [composeFormData, setComposeFormData] = useState({
    recipient: '', // Add other form fields as needed (e.g., subject, message)
  });

  // State for starred messages
  const [starredMessages, setStarredMessages] = useState([]);

  // Handle message selection
  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  // Handle compose button click
  const handleComposeClick = () => {
    setComposeMode(true);
    setSelectedMessage(null);
  };

  // Handle star button click
  const handleStarClick = () => {
    if (selectedMessage && !starredMessages.includes(selectedMessage.id)) {
      setStarredMessages([...starredMessages, selectedMessage.id]);
    } else if (selectedMessage) {
      setStarredMessages(starredMessages.filter((id) => id !== selectedMessage.id));
    }
  };

  const handleReplyClick = () => {
    // Implement logic to set up the compose form for replying
    // For demo purposes, let's assume you set recipient and subject based on the selected message
    setComposeFormData({
      recipient: selectedMessage.sender.email,
      subject: `Re: ${selectedMessage.subject}`,
      // ... (other fields as needed)
    });
    setComposeMode(true);
  };

  // Function to handle opening the compose form
//   const handleComposeClick = () => {
//     setComposeMode(true);
//   };

  // Function to handle form field changes
  const handleComposeInputChange = (e) => {
    const { name, value } = e.target;
    setComposeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleComposeSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission (e.g., send the composed message)
    // For demo purposes, you can simply log the composeFormData
    console.log('Composed Message:', composeFormData);
    // Reset form data and close compose mode
    setComposeFormData({
      recipient: '',
    });
    setComposeMode(false);
  };

  // Render inbox messages list
  const renderInboxMessages = () => (
    <div>
        {/* Add Compose Mail button */}
        <button
          className="bg-deep-blue text-white py-2 px-4 rounded-md mb-4"
          onClick={handleComposeClick}
        >
          Compose Mail
        </button>
        <h2 className="text-2xl font-bold text-deep-blue mb-4">Inbox</h2>
        {/* Add filtering and sorting options here */}
        {inboxMessagesData.map((message) => (
            <div
            key={message.id}
            className={`bg-white p-6 shadow-md rounded-md cursor-pointer mb-4 ${
                selectedMessage && selectedMessage.id === message.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleMessageSelect(message)}
            >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                {message.sender.logo && (
                    <img src={message.sender.logo} alt={`${message.sender.name} Logo`} className="w-8 h-8 rounded-full mr-2" />
                )}
                <div>
                    <h4 className="text-md font-bold">{message.sender.name}</h4>
                    <p className="text-sm text-gray-700">{message.sender.location}</p>
                </div>
                </div>
                <p className="text-sm text-gray-500">{message.timestamp}</p>
            </div>
            <p className="text-gray-700 mb-2">{message.content}</p>
            <div className="flex justify-end">
                <span className='mr-2 cursor-pointer hover:text-gray-500' onClick={handleReplyClick}>Reply</span>
                {message.status === 'unread' && <span className="text-blue-500 font-bold mr-2">Unread</span>}
                {message.important && <span className="text-orange-500 font-bold mr-2">Important</span>}
                {starredMessages.includes(message.id) ? (
                <button className="text-yellow-500 hover:underline ml-2" onClick={handleStarClick}>
                    Unstar
                </button>
                ) : (
                <button className="text-gray-500 hover:underline ml-2" onClick={handleStarClick}>
                    Star
                </button>
                )}
                {/* Add other action buttons (Read Message, Reply, Delete, Archive) here */}
            </div>
            </div>
        ))}
    </div>
  );

  // Render selected message details
  const renderSelectedMessage = () => (
    <div className='relative'>
        {/* Add cancel option at the top right */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => setSelectedMessage(null)}
        >
          Cancel
        </button>
      <h2 className="text-2xl font-bold text-deep-blue mb-4">Message Details</h2>
      <div className="bg-white p-6 shadow-md rounded-md">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {selectedMessage.sender.logo && (
              <img src={selectedMessage.sender.logo} alt={`${selectedMessage.sender.name} Logo`} className="w-8 h-8 rounded-full mr-2" />
            )}
            <div>
              <h4 className="text-md font-bold">{selectedMessage.sender.name}</h4>
              <p className="text-sm text-gray-700">{selectedMessage.sender.location}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{selectedMessage.timestamp}</p>
        </div>
        <p className="text-gray-700 mb-2">{selectedMessage.content}</p>
        {/* Render conversation view here */}
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h3 className="text-lg font-bold mb-2">Conversation with {selectedMessage.sender.name}</h3>
          {selectedMessage.conversation.map((message) => (
            <div key={message.id} className="mb-2">
              <p className="text-gray-700">{message.content}</p>
              <p className="text-sm text-gray-500">{message.timestamp}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
            <span className='mr-2 cursor-pointer hover:text-gray-500' onClick={handleReplyClick}>Reply</span>
        </div>
        {/* Add compose functionality here */}
      </div>
      {/* Add "Reply" button */}
        {/* <button
          className="bg-deep-blue text-white py-2 px-4 rounded-md mt-4"
          onClick={handleReplyClick}
        >
          Reply
        </button> */}
    </div>
  );

  // Render compose message form
//   const renderComposeForm = () => (
//     <div>
//       <h2 className="text-2xl font-bold text-deep-blue mb-4">Compose Message</h2>
//       {/* Add compose form elements and functionality here */}
//     </div>
//   );

    // Render compose form elements
    // const renderComposeForm = () => {
    //     return (
    //       <form className="bg-white p-6 shadow-md rounded-md mb-4">
    //         <h2 className="text-2xl font-bold text-deep-blue mb-4">Compose Mail</h2>
    //         {/* Add form fields */}
    //         <div className="mb-4">
    //           <label htmlFor="recipient" className="block text-sm font-bold text-gray-700 mb-2">
    //             Recipient:
    //           </label>
    //           <input
    //             type="text"
    //             id="recipient"
    //             name="recipient"
    //             value={composeFormData.recipient}
    //             onChange={handleComposeInputChange}
    //             className="w-full p-2 border border-gray-300 rounded-md"
    //           />
    //         </div>
    //         {/* Add other form fields as needed (e.g., subject, message) */}
    //         <div className="mb-4">
    //           {/* Add other form fields */}
    //         </div>
    //         {/* Add form submission button */}
    //         <button
    //           type="submit"
    //           className="bg-deep-blue text-white py-2 px-4 rounded-md"
    //           onClick={handleComposeSubmit}
    //         >
    //           Send
    //         </button>
    //       </form>
    //     );
    //   };

    // ... (previous code)

// Render compose form elements
const renderComposeForm = () => {
    return (
        <div className='relative'>
                    {/* Add cancel option at the top right */}
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setComposeMode(false)}
            >
            close
            </button>
            <form className="bg-white p-6 shadow-md rounded-md mb-4">
                <h2 className="text-2xl font-bold text-deep-blue mb-4">Compose Mail</h2>
                {/* Recipient field */}
                <div className="mb-4">
                <label htmlFor="recipient" className="block text-sm font-bold text-gray-700 mb-2">
                    Recipient:
                </label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={composeFormData.recipient}
                    onChange={handleComposeInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                </div>
                {/* Subject field */}
                <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject:
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={composeFormData.subject}
                    onChange={handleComposeInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                </div>
                {/* Message field */}
                <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={composeFormData.message}
                    onChange={handleComposeInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows="4"
                ></textarea>
                </div>
                {/* Form submission button */}
                <button
                type="submit"
                className="bg-deep-blue text-white py-2 px-4 rounded-md"
                onClick={handleComposeSubmit}
                >
                Send
                </button>
            </form>
        </div>
     
    );
  };
  
  // ... (previous code)
  

  return (
    <div className="container mx-auto mt-8 max-w-[1128px]">
      {/* Render compose form if in compose mode */}
      {composeMode && renderComposeForm()}

      {/* Render inbox messages */}
      {!composeMode && !selectedMessage && renderInboxMessages()}

      {/* Render selected message details if a message is selected */}
      {!composeMode && selectedMessage && renderSelectedMessage()}

      {/* Add other components and features as needed */}
    </div>
  );
};

export default InboxPage;
