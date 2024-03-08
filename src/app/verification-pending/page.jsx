// Add styling imports as needed for loader

const verificationPending = () => {
  return (
        <div class="container mx-auto flex flex-col items-center py-12">
        <h1 class="text-3xl font-bold mb-4">Thank you for signing up!</h1>
        <p class="text-gray-600 mb-6">Your account is under review. This usually takes 24-48 hours.</p>

        <div class="bg-green-100 border border-green-500 text-green-700 p-4 rounded-md mb-6">
            <p>We take security seriously!  This verification helps keep our marketplace safe.</p>
        </div>

        <div class="text-center"> 
            <h2 class="text-2xl font-semibold mb-2">While you wait...</h2>
            <ul class="list-disc list-inside space-y-2">
            <li><a href="/profile" class="text-blue-600 hover:underline">Complete your profile (Optional)</a></li>
            <li><a href="/products" class="text-blue-600 hover:underline">Browse available products</a> (View-only mode)</li>
            <li><a href="/help-center" class="text-blue-600 hover:underline">Explore our Help Center</a></li>
            </ul>
        </div>

        <button class="mt-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-700">Check Status</button>
        </div>

  );
};

export default verificationPending;
