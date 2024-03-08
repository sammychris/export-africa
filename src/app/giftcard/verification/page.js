'use client'
// ... (Other Dashboard Code) ...
 import React, { useState } from 'react';
 import Select from 'react-select'; 
import countryList from 'react-select-country-list';
//  import Stepper from './Stepper'; 

 function DealerVerification() {
   const [currentStep, setCurrentStep] = useState(0);
   const [selectedCountry, setSelectedCountry] = useState('');
  const countryOptions = countryList().getData();
   //  ... State management for your form fields ...
 
   const steps = ['Basic Info', 'ID Verification', 'Business Info'];
 
   return (
     <section className="bg-white rounded-lg shadow-md p-6">
       <h2 className="text-2xl font-medium mb-4">Dealer Verification</h2>
 
       <Stepper steps={steps} currentStep={currentStep} />
 
       {/* Basic Info Form - Step 0 */}
       {currentStep === 0 && (
         <form> 
           <div className="grid grid-cols-2 gap-4 mb-3">
                <input type="text" placeholder="Business Name" className="border border-gray-300 p-2 rounded" />
                <input type="text" placeholder="Contact Person (Full Name)" className="border border-gray-300 p-2 rounded" />
                <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
                <input type="tel" placeholder="Phone" className="border border-gray-300 p-2 rounded" />
                <input type="url" placeholder="Website (Optional)" className="border border-gray-300 p-2 rounded" />

                {/* Address Fields */}
                <input type="text" placeholder="Street Address" className="border border-gray-300 p-2 rounded" />
                <input type="text" placeholder="City" className="border border-gray-300 p-2 rounded" />

               
                <div className="col-span-2"> 
                    <Select 
                    options={countryOptions} 
                    value={selectedCountry} // Assuming you map the value to the label 
                    onChange={setSelectedCountry}
                    // styles={customStyles} // (Optional) For Tailwind styling 
                    className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
            </div>

           <button
             type="button"
             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
             onClick={() => setCurrentStep(currentStep + 1)}
           >
             Next
           </button>
         </form>
       )} 
       {/* ID Verification Step */}
        {currentStep === 1 && (
        <form>
            <div className="mb-3">
            <label htmlFor="id-document" className="block text-sm font-medium">Upload ID Document</label> 
            <input 
                type="file" 
                id="id-document" 
                className="mt-1 border border-gray-300 p-2 rounded block w-full" 
                accept="image/jpeg, image/png" // Optional: Restrict file types
            /> 
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
            <select className="border border-gray-300 p-2 rounded" >
                <option value="">ID Type</option>
                <option value="passport">Passport</option>
                <option value="drivers-license">{`Driver's License`}</option>
                {/* ...other options */}
            </select>

            <input 
                type="text" 
                placeholder="ID Number" 
                className="border border-gray-300 p-2 rounded" 
            />

            <input 
                type="date" 
                placeholder="Expiry Date" 
                className="border border-gray-300 p-2 rounded col-span-2" 
            />
            </div>

            <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Next</button>
        </form>
        )}

        {/* Business Info Step */}
        {currentStep === 2 && (
        <form>
            <div className="grid grid-cols-2 gap-4 mb-3">
            <input 
                type="text" 
                placeholder="Business Registration Number" 
                className="border border-gray-300 p-2 rounded" 
            />

            <select className="border border-gray-300 p-2 rounded" >
                <option value="">Business Type</option>
                <option value="sole-proprietor">Sole Proprietor</option>
                <option value="partnership">Partnership</option>
                {/* ...other options */}
            </select>

            {/* You might have more fields depending on what info you need */}
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Submit Verification</button> 
        </form>
        )}


 
       {/* ... Forms for other steps would go here ... */} 
     </section>
   );
 }

 
 export default DealerVerification;




function Stepper({ steps, currentStep }) {
  return (
    <ul className="steps flex items-center justify-around mb-6"> 
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${index === currentStep ? 'step-primary text-blue-600' : 'text-gray-500'}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
}

// export default Stepper;
