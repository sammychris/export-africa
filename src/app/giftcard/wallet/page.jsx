'use client'
import React, { useState, useEffect } from 'react';

const userTransactions = [
    {
      id: 1,
      date: '2024-02-22', 
      type: 'Sale',
      amount: 85.0, 
      isPositive: true,
    },
    {
      id: 2,
      date: '2024-02-19', 
      type: 'Purchase',
      amount: 20.0, 
      isPositive: false,
    },
    {
      id: 3,
      date: '2024-02-15',
      type: 'Sale',
      amount: 50.0, 
      isPositive: true,
    },
    // ... you could add more transactions here.
  ];

  

const Wallet = () => {
    // const { userRole } = useUserData();
    const userCanAddFunds = 'userRole' === 'userRole'; 
    const userCanWithdraw = 'userRole' === 'userRole'; // Assuming dealers can also withdraw 
  
    const [userWalletBalance, setUserWalletBalance] = useState(null);


    const getSimulatedBalance = () => { 
        // Replace this with your actual balance-fetching logic later
        return 150.0; // A sample balance 
      }; 

    useEffect(() => {
      // Simulating an API call
      const fetchBalance = async () => {
        const fetchedBalance = getSimulatedBalance() /* Your simulated API call here */ 
        setUserWalletBalance(fetchedBalance); 
      };
  
      fetchBalance();
    }, []);
    
    return (
        <div className="container mx-auto">
  {/* ... (Header, Sidebar, etc.) ... */}

  <main>
    <h1 className="text-2xl font-medium mb-4">My Wallet</h1> 

    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Primary Balance */}
      <div className="text-3xl font-medium mb-2">
        <span className="text-blue-600">$</span>{userWalletBalance} 
      </div>

      {/* Transactions Tab */} 
      <nav>
            <ul className="flex space-x-4">
                <li>
                <a
                    href="#"
                    className="border-b-2 border-blue-600 pb-2 text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Transactions
                </a>
                </li>
                {userCanAddFunds && (
                    <li>
                        <a
                            href="#"
                            className="pb-2 text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                        Add Funds
                        </a>
                    </li>
                )}
                {userCanWithdraw && (
                <li>
                    {/* Similar to 'Add Funds', conditional rendering */}
                    <a
                        href="#"
                        className="pb-2 text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Refund
                    </a>
                </li>
                )}
            </ul>
        </nav>


      {/* Transactions List */}
      <div className="mt-4">
            <table className="w-full border-collapse"> {/* Adjusted for table styling */}
                <thead>
                <tr>
                    <th className="text-left p-3 border border-gray-300">Date</th>
                    <th className="text-left p-3 border border-gray-300">Type</th>
                    <th className="text-right p-3 border border-gray-300">Amount</th>
                    {/* ... Add more headers as needed */}
                </tr>
                </thead>
                <tbody>
                {userTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-100">
                    <td className="p-3 border border-gray-300">{transaction.date}</td>
                    <td className="p-3 border border-gray-300">{transaction.type}</td>
                    <td className="p-3 border border-gray-300 text-right">
                        {transaction.isPositive ? '+' : '-'} ${transaction.amount}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Handle case when there are no transactions */}
            {!userTransactions.length && (
                <div className="mt-3 text-center">No transactions yet.</div>
            )}
        </div>

    </div>
  </main>
</div>

    )
}

export default Wallet;
