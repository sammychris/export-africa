


const Signup = () => {
    return (
        <div className="container mx-auto">
            <header> </header> {/* Your existing header, if applicable */}

            {/* Sign Up Form */}
            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-medium mb-4">Sign Up</h2> 
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                        <input type="text" placeholder="First Name" className="border border-gray-300 p-2 rounded" />
                        <input type="text" placeholder="Last Name" className="border border-gray-300 p-2 rounded" />
                        </div>
                        {/* ... Other fields: Email, Password, Account Type (Buyer/Dealer) ... */}
                        <div className="grid grid-cols-2 gap-4 mb-3">
                        {/* ... First Name, Last Name ... */}
                        <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
                        <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
                        <select className="col-span-2 border border-gray-300 p-2 rounded">
                            <option value="">Select Account Type</option>
                            <option value="buyer">Buyer</option>
                            <option value="dealer">Dealer</option>
                        </select>
                    </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Create Account</button>
                </form>
            </section>

            {/* Login Form - Similar structure */} 

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-medium mb-4">Login</h2> 
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-3"> 
                    <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
                    <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
                </form>

                {/* Potential "Forgot Password?" link */}
                <div className="mt-3 text-sm text-center">
                    <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
                </div>
            </section>

        </div>

    )
}

export default Signup;
