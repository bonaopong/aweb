import React from "react";
import FormSection from "@/components/FormSection";
import SelectField from "@/components/SelectField";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

// New reusable components
function CheckboxField({ id, label }) {
  return (
    <div className="flex items-center space-x-2">
      <input id={id} name={id} type="checkbox" className="h-4 w-4" />
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
}

function TextareaField({ id, label, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={3}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
      />
    </div>
  );
}

function FileUploadField({ id, label }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="file"
        className="mt-1 block w-full text-sm text-gray-700"
      />
    </div>
  );
}

function MultiSelectField({ id, label, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        name={id}
        multiple
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans py-12">
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Membership Registration Form
            </h1>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {/* Personal Information */}
            <FormSection title="Personal Information">
              <SelectField id="title" label="Title">
                <option value="">Select Title...</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Dr</option>
              </SelectField>
              <InputField id="surname" label="Surname" />
              <InputField id="firstName" label="First Name" />
              <InputField id="otherNames" label="Other Names" />
              <InputField id="dateOfBirth" label="Date of Birth" type="date" />
              <SelectField id="gender" label="Gender">
                <option value="">Select Gender...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </SelectField>
              <SelectField id="maritalStatus" label="Marital Status">
                <option value="">Select...</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </SelectField>
              <SelectField id="religion" label="Religion">
                <option value="">Select Religion...</option>
                <option>Christianity</option>
                <option>Islam</option>
                <option>Traditional</option>
                <option>Other</option>
              </SelectField>
              <InputField id="nationality" label="Nationality" />
              <SelectField id="homeRegion" label="Home Region">
                <option value="">Select Region...</option>
                <option>Greater Accra</option>
                <option>Ashanti</option>
                <option>Western</option>
                <option>Eastern</option>
              </SelectField>
              <InputField id="homeTown" label="Home Town" />
              <InputField id="placeOfBirth" label="Place of Birth" />
            </FormSection>

            {/* Identification & Contact */}
            <FormSection title="Identification & Contact">
              <InputField id="personId" label="Person ID" />
              <InputField id="nickName" label="Nick Name" />
              <InputField id="nationalId" label="National ID" />
              <InputField id="ssn" label="Social Security No." />
              <InputField id="contactNos" label="Contact Numbers" />
              <InputField id="email" label="Email Address" type="email" />
              <InputField id="postalAddress" label="Postal Address" />
              <InputField id="residentTown" label="Resident Town/Suburb" />
              <InputField id="digitalAddress" label="Digital Address" />
              <InputField id="houseNo" label="House No" />
            </FormSection>

            {/* Employment & Education */}
            <FormSection title="Employment & Education">
              <SelectField id="employmentType" label="Type of Employment">
                <option value="">Select...</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Self-Employed</option>
                <option>Unemployed</option>
              </SelectField>
              <InputField id="profession" label="Profession" />
              <InputField id="placeOfWork" label="Place of Work" />
              <SelectField id="educationLevel" label="Level of Education">
                <option value="">Select...</option>
                <option>Primary</option>
                <option>Secondary</option>
                <option>University Degree</option>
                <option>Postgraduate</option>
              </SelectField>
              <InputField id="courseStudied" label="Course Studied" />
            </FormSection>

            {/* Family & Kin */}
            <FormSection title="Spouse">
              <InputField id="spouseTitle" label="Spouse’s Title" />
              <InputField id="spouseSurname" label="Spouse’s Surname" />
              <InputField id="spouseFirstName" label="Spouse’s First Name" />
              <InputField id="spouseOtherName" label="Spouse’s Other Name" />
              <InputField id="spouseNickName" label="Spouse’s Nick Name" />
              <InputField id="spouseNationalId" label="Spouse’s National ID" />
              <InputField id="spouseSsn" label="Spouse’s Social Security No." />
              <InputField id="spouseContactNos" label="Spouse’s Contact Nos" />
            </FormSection>

            <FormSection title="Next of Kin">
              <InputField id="kinName" label="Next of Kin’s Name" />
              <InputField id="kinRelationship" label="Relationship" />
              <InputField id="kinAddress" label="Address" />
              <InputField id="kinContact" label="Contacts" />
              <InputField id="kinProfession" label="Profession" />
            </FormSection>

            <FormSection title="Emergency Contact">
              <InputField id="emergencyName" label="Name" />
              <InputField id="emergencyRelationship" label="Relationship" />
              <InputField id="emergencyAddress" label="Address" />
              <InputField id="emergencyContactNos" label="Contacts" />
            </FormSection>

            {/* Other Information */}
            <FormSection title="Other Information">
              <CheckboxField id="active" label="Active?" />
              <CheckboxField id="specialExpertise" label="Special Expertise?" />
              <MultiSelectField
                id="languagesSpoken"
                label="Languages Spoken"
                options={["TWI", "GA", "EWE", "ENGLISH", "HAUSA"]}
              />
              <FileUploadField id="picture" label="Picture" />
              <TextareaField
                id="products"
                label="Products"
                placeholder="List products here..."
              />
              <TextareaField
                id="remarks"
                label="Remarks"
                placeholder="Enter remarks here..."
              />
            </FormSection>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button isLoading={false} type="submit">
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
