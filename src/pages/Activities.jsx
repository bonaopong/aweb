 
import Banner from "../components/Banner"
import Statistics from "../components/Statistics"
import CoreActivities from "../components/CoreActivities"
import OurImpact from "./OurImpact"


const Activities = () =>{
    return(
        <>
        <Banner title="Activities" message="Discover the various programs and initiatives that make our community stronger" />
           

           <Statistics />
           <CoreActivities />
           
           <OurImpact />

           <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get Involved
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
          Join us in making a difference. Whether as a volunteer, participant, or 
          supporter, there's a place for you in our community activities.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
            Become a Volunteer
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
            Join Our Programs
          </button>
        </div>
      </div>
    </div>

        </>
       
    )
}

export default Activities