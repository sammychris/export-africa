import React, { useRef, useState } from 'react';
import CloseButton from "./CloseButton";
import TextAreaInput from "./TextAreaInput";
import SubmitButton from "./SubmitButton";
import InputField from "./InputField";
import getCertifications from "@/utils/getCertifications";
import CertificationCheckbox from "./CertificationCheckbox";
import FileInputField from './FileInputField';

const certifications = getCertifications();

const ExporterForm = ({
    showExporterForm,
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    isSubmitting,
}) => {
    const isEditMode = values && values.id;
    return (
        <div className="absolute bg-[#00000057] w-full h-screen top-0 left-0 z-20 flex items-center justify-center">
            <div className="bg-white p-10 max-w-[941px] w-full relative">
              <form onSubmit={handleSubmit}>
                  <div className="flex pb-[20px]">
                    <SubmitButton isSubmitting={isSubmitting} edited={isEditMode} />
                    <CloseButton onClick={showExporterForm}/>
                    <h1 className="text-[#2B2F30] ml-10 text-2xl font-bold">{isEditMode? 'Edit Profile' : 'Update Profile'}</h1>
                  </div>
                  <hr className="pb-[30px]" />

                  <div className="h-[500px] overflow-auto p-5">
                    <div>
                      <h2 className="font-bold pb-6">Company Information</h2>
                      <div className="flex justify-between">
                        <InputField
                          label="Name"
                          id="companyName"
                          name="companyName"
                          placeholder="Enter Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.companyName}
                          error={errors.companyName}
                          touched={touched.companyName}
                          isRequired={true}
                        />

                        <InputField
                          label="Location"
                          id="location"
                          name="location"
                          placeholder="Lagos, Nigeria"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.location}
                          error={errors.location}
                          touched={touched.location}
                          isRequired={true}
                        />
                      </div>

                      <TextAreaInput
                        label="Description"
                        id="companyDescription"
                        name="companyDescription"
                        placeholder="Enter company short description..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.companyDescription}
                        error={errors.companyDescription}
                        touched={touched.companyDescription}
                      />
                    </div>

                  <div>
                    <h2 className="font-bold pb-6">Contact Information</h2>
                    <div className="flex justify-between mb-[30px]">
                      <InputField
                        label="Email"
                        id="contact.email"
                        name="contact.email"
                        placeholder="Enter your company email..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contact.email}
                        error={errors.contact?.email}
                        touched={touched.contact?.email}
                        styleClass="w-[32%] max-w-[420px] relative"
                        isRequired={true}
                        type="email"
                      />

                      <InputField
                        label="Phone Number"
                        id="contact.phone"
                        name="contact.phone"
                        placeholder="Enter a phone number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contact.phone}
                        error={errors.contact?.phone}
                        touched={touched.contact?.phone}
                        styleClass="w-[32%] max-w-[420px] relative"
                        isRequired={true}
                        type="number"
                      />

                      <InputField
                        label="Website"
                        id="contact.website"
                        name="contact.website"
                        placeholder="Enter your website URL"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contact.website}
                        error={errors.contact?.website}
                        touched={touched.contact?.website}
                        styleClass="w-[32%] max-w-[420px] relative"
                        type="url"
                      />
                    </div>
                  </div>


                  <div>
                    <h2 className="font-bold pb-6">Social Media</h2>
                    <div className="flex justify-between mb-[30px]">
                      <InputField
                        label="Facebook"
                        id="socialMedia.facebook"
                        name="socialMedia.facebook"
                        placeholder="https//..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.socialMedia.facebook}
                        error={errors.socialMedia?.facebook}
                        touched={touched.socialMedia?.facebook}
                        styleClass="w-[32%] max-w-[420px] relative"
                      />

                      <InputField
                        label="LinkedIn"
                        id="socialMedia.linkedin"
                        name="socialMedia.linkedin"
                        placeholder="https//..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.socialMedia.linkedin}
                        error={errors.socialMedia?.linkedin}
                        touched={touched.socialMedia?.linkedin}
                        styleClass="w-[32%] max-w-[420px] relative"
                      />

                      <InputField
                        label="Twitter"
                        id="socialMedia.twitter"
                        name="socialMedia.twitter"
                        placeholder="https://"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.socialMedia.twitter}
                        error={errors.socialMedia?.twitter}
                        touched={touched.socialMedia?.twitter}
                        styleClass="w-[32%] max-w-[420px] relative"
                      />
                    </div>
                  </div>


                  <div>
                    <h2 className="font-bold pb-6">Company Files</h2>
                    <div className="flex justify-between mb-[30px]">
                      {/* Company Logo Upload */}
                      <FileInputField
                        label="Logo"
                        id="logo"
                        name="logo"
                        onChange={(event) => setFieldValue('logo', event.currentTarget.files[0])}
                        onBlur={handleBlur}
                        error={errors.logo}
                        touched={touched.logo}
                        isRequired={true}
                      />
                      <FileInputField
                        label="Downloadable Brochures or Catalogs"
                        id="brochuresCatalogs"
                        name="brochuresCatalogs"
                        onChange={(event) => setFieldValue('brochuresCatalogs', event.currentTarget.files[0])}
                        onBlur={handleBlur}
                        error={errors.brochuresCatalogs}
                        touched={touched.brochuresCatalogs}
                      />
                    </div>
                  </div>

                  {/* Checkbox Fields for Certifications */}
                  <div className="mb-[30px]">
                    <h2 className="font-bold pb-4">Certifications</h2>
                    {certifications.map(certification => (
                        <CertificationCheckbox
                          key={certification.id}
                          id={certification.id}
                          name={`certifications`}  // Remove dot notation for array
                          label={certification.label}
                          isChecked={values.certifications.includes(certification.name)}
                          handleChange={() => {
                            if (values.certifications.includes(certification.name)) {
                              // If certification is already selected, remove it
                              setFieldValue('certifications', values.certifications.filter(c => c !== certification.name));
                            } else {
                              // If certification is not selected, add it
                              setFieldValue('certifications', [...values.certifications, certification.name]);
                            }
                          }}
                        />
                    ))}
                  </div>

                </div>
              </form>
            </div>
          
        </div>
    );
  };
  
  export default ExporterForm;
  