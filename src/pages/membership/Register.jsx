import React, { useState } from "react";
import FormSection from "@/components/FormSection";
import SelectField from "@/components/SelectField";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import CheckboxField from "@/components/CheckboxField";
import MultiSelectField from "@/components/MultiSelectField";
import FileUploadField from "@/components/FileUploadField";
import TextareaField from "@/components/TextareaField";
import { Link } from "react-router";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  // Membership type state
  const [membershipType, setMembershipType] = useState("");
  const isMembershipChecked =
    membershipType === "individual" || membershipType === "family";
  const [agreeTerms, setAgreeTerms] = useState(false);

  const insuranceOptions = [
    {
      id: "enterpriseA",
      label: "Enterprise Insurance Category A",
      company: "enterprise",
    },
    {
      id: "enterpriseB",
      label: "Enterprise Insurance Category B",
      company: "enterprise",
    },
    { id: "starA", label: "Star Assurance Category A", company: "star" },
    { id: "starB", label: "Star Assurance Category B", company: "star" },
  ];

  // State for showing insurance options
  const [personalInsurance, setPersonalInsurance] = useState(false);
  const [parentGuardianInsurance, setParentGuardianInsurance] = useState(false);
  // State for selected insurance (one per company per group)
  const [personalSelection, setPersonalSelection] = useState({
    enterprise: "",
    star: "",
  });
  const [parentSelection, setParentSelection] = useState({
    enterprise: "",
    star: "",
  });

  const handleInsuranceChange = (group, company, value) => {
    if (group === "personal") {
      setPersonalSelection((prev) => ({
        ...prev,
        [company]: prev[company] === value ? "" : value,
      }));
    } else {
      setParentSelection((prev) => ({
        ...prev,
        [company]: prev[company] === value ? "" : value,
      }));
    }
  };

  // Clear child selections when parent is unchecked
  const handlePersonalInsuranceChange = (checked) => {
    setPersonalInsurance(checked);
    if (!checked) {
      setPersonalSelection({ enterprise: "", star: "" });
    }
  };
  const handleParentGuardianInsuranceChange = (checked) => {
    setParentGuardianInsurance(checked);
    if (!checked) {
      setParentSelection({ enterprise: "", star: "" });
    }
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
              <InputField id="nickName" label="Nick Name" />
              <div />
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
              <InputField id="courseStudied" label="Courses Studied" />
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
              <MultiSelectField
                id="languagesSpoken"
                label="Languages Spoken"
                options={["TWI", "GA", "EWE", "ENGLISH", "HAUSA"]}
              />
              <FileUploadField id="picture" label="Picture" accept="image/*" />

              {/* <TextareaField
                id="products"
                label="Products"
                placeholder="List products here..."
              /> */}
            </FormSection>

            {/* Insurance Payment */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-6">
                Insurance
              </h2>
              {/* Personal Insurance */}
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    id="personalInsurance"
                    type="checkbox"
                    checked={personalInsurance}
                    onChange={(e) =>
                      handlePersonalInsuranceChange(e.target.checked)
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">
                    I would like to purchase personal insurance through LECA
                  </span>
                </label>
                {personalInsurance && (
                  <div className="ml-8 mt-2 space-y-2">
                    {/* Enterprise */}
                    <div className="font-medium text-gray-600 text-xs mb-1">
                      Enterprise Insurance
                    </div>
                    <div className="flex flex-col gap-1">
                      {insuranceOptions
                        .filter((opt) => opt.company === "enterprise")
                        .map((opt) => (
                          <label
                            key={opt.id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={personalSelection.enterprise === opt.id}
                              onChange={() =>
                                handleInsuranceChange(
                                  "personal",
                                  "enterprise",
                                  opt.id
                                )
                              }
                              className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                    </div>
                    {/* Star Assurance */}
                    <div className="font-medium text-gray-600 text-xs mt-3 mb-1">
                      Star Assurance
                    </div>
                    <div className="flex flex-col gap-1">
                      {insuranceOptions
                        .filter((opt) => opt.company === "star")
                        .map((opt) => (
                          <label
                            key={opt.id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={personalSelection.star === opt.id}
                              onChange={() =>
                                handleInsuranceChange(
                                  "personal",
                                  "star",
                                  opt.id
                                )
                              }
                              className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="my-5" />
              {/* Parent/Guardian Insurance */}
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    id="parentGuardianInsurance"
                    type="checkbox"
                    checked={parentGuardianInsurance}
                    onChange={(e) =>
                      handleParentGuardianInsuranceChange(e.target.checked)
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">
                    I would like to purchase insurance for my parent(s)/guardian
                    through LECA
                  </span>
                </label>
                {parentGuardianInsurance && (
                  <div className="ml-8 mt-2 space-y-2">
                    {/* Enterprise */}
                    <div className="font-medium text-gray-600 text-xs mb-1">
                      Enterprise Insurance
                    </div>
                    <div className="flex flex-col gap-1">
                      {insuranceOptions
                        .filter((opt) => opt.company === "enterprise")
                        .map((opt) => (
                          <label
                            key={opt.id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={parentSelection.enterprise === opt.id}
                              onChange={() =>
                                handleInsuranceChange(
                                  "parent",
                                  "enterprise",
                                  opt.id
                                )
                              }
                              className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                    </div>
                    {/* Star Assurance */}
                    <div className="font-medium text-gray-600 text-xs mt-3 mb-1">
                      Star Assurance
                    </div>
                    <div className="flex flex-col gap-1">
                      {insuranceOptions
                        .filter((opt) => opt.company === "star")
                        .map((opt) => (
                          <label
                            key={opt.id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={parentSelection.star === opt.id}
                              onChange={() =>
                                handleInsuranceChange("parent", "star", opt.id)
                              }
                              className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Membership Type */}
            <div>
              <FormSection
                title="Membership Type"
                description="Choose one of these if you wish to register as a member of the association."
              >
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={membershipType === "individual"}
                    onChange={() =>
                      setMembershipType(
                        membershipType === "individual" ? "" : "individual"
                      )
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">
                    Individual Membership
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={membershipType === "family"}
                    onChange={() =>
                      setMembershipType(
                        membershipType === "family" ? "" : "family"
                      )
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">
                    Family Membership (Includes parent/guardian)
                  </span>
                </label>
              </FormSection>

              <label className="flex space-x-2 -mt-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  disabled={!isMembershipChecked}
                  className="h-4 w-4"
                />
                <span
                  className={`text-sm flex-1 -mt-0.5 ${
                    !isMembershipChecked ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  By ticking, I wish to apply for membership of this association
                  and agree to be bound by its by-laws. I also agree to attend
                  meetings and pay my dues promptly.
                </span>
              </label>
            </div>

            <CheckboxField
              id="generalTerms"
              className="mt-10"
              label={
                <div>
                  By ticking, I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    terms and conditions
                  </Link>{" "}
                  of this association.
                </div>
              }
            />

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
