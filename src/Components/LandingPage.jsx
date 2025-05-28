import React, { useState } from "react";
import MainText from './MainText';
import "../utils/Dashboard.css"
import DashboardBg from '../assets/Dashboard.jpg';
import Testimonial from './Testimonial';

const reviews = [
  {
    text: "I can actually see progress in my mental health which is something I haven't been able to say in 15 years and it's thanks to her.",
    author: "Written by S.A. for John Ramsey (LCSW)",
    image: "/review1.jpg",
  },
  {
    text: "Therapy helped me feel heard for the first time. I'm finally making progress.",
    author: "Written by T.M. for Ankit Sharma(PhD)",
    image: "/review2.jpg",
  },
  {
    text: "I never thought I'd feel normal again. This has changed my life.",
    author: "Written by R.L. for David Kim (LPC)",
    image: "/review3.jpg",
  },
  {
    text: "Arya is amazing in her insights and conversational approach. I am so glad and blessed to have found her and started healing with her guidance.",
    author: "Written by J.B. for Arya Raj (LCSW)",
    image: "/review4.jpg",
  },
  {
    text: "This is the support I didn’t know I needed. Thank you for everything.",
    author: "Written by M.C. for Dr. Vijay (PhD)",
    image: "/review5.jpg",
  },
];

const Dashboard = () => {

  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);


  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="hero-background h-[600px] w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `../assets/Dashboard.jpg` }} >
        <div className="overlay absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm" />
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Unfiltered Voice
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Your story and struggles deserves to be heard. <br />
            Share them Unfiltered
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#00C28C] text-white px-6 py-2 rounded-md font-semibold">
              Get Started
            </button>
            <button className="bg-white text-gray-800 border border-gray-300 px-6 py-2 rounded-md font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Explore Therapy Options Section */}
      <div className="py-16 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Choose the therapy type  to your needs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Individual Therapy",
              desc: "One-on-one sessions to address personal challenges.",
              img: "/therapy1.jpg"
            },
            {
              title: "Couples Counseling",
              desc: "Work on communication and relationship dynamics.",
              img: "/therapy2.jpg"
            },
            {
              title: "Teen Therapy",
              desc: "Support for teens dealing with emotional challenges.",
              img: "/therapy3.jpg"
            },
            {
              title: "Family Therapy",
              desc: "Improve family dynamics and resolve conflicts.",
              img: "/therapy4.jpg"
            },
            {
              title: "Psychiatry and Medication",
              desc: "Professional medical support for mental health.",
              img: "/therapy5.jpg"
            },
          ].map((therapy, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={therapy.img} alt={therapy.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{therapy.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{therapy.desc}</p>
                <button className="text-[#00C28C] border border-[#00C28C] rounded-md px-4 py-1 text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#F9F9F9] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Making a Difference, Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-[#00C28C] text-2xl font-bold mb-1">100k+</h3>
            <p className="text-gray-600">Lives touched globally</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-[#00C28C] text-2xl font-bold mb-1">500+</h3>
            <p className="text-gray-600">Certified Therapists Available</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-[#00C28C] text-2xl font-bold mb-1">98%</h3>
            <p className="text-gray-600">Positive User Feedback Score</p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#F9F9F9] py-16 px-4 text-center relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* <div className="text-green-700 text-5xl font-serif mb-4">“</div> */}
        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
          {reviews[current].text}
        </p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src={reviews[current].image}
            alt={reviews[current].author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <p className="text-sm text-gray-700">{reviews[current].author}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {reviews.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-green-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button className="px-6 py-2 border border-green-700 text-green-800 font-medium rounded-full hover:bg-green-50 transition">
          More success stories
        </button>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-700 text-3xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-700 text-3xl"
      >
        ›
      </button>
    </div>

      {/* What We Offer Section */}
      <div className="py-16 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          What Unfiltered Offers You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-[#00C28C] mb-3">
              <i className="fas fa-user-friends text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-1">Personalized Matching</h3>
            <p className="text-gray-600 text-sm mb-4">
              Find the right therapist based on your needs and preferences.
            </p>
            <button className="text-[#00C28C] font-medium text-sm">
              Match with a therapist →
            </button>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-[#00C28C] mb-3">
              <i className="fas fa-lock text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-1">Secure & Private Sessions</h3>
            <p className="text-gray-600 text-sm mb-4">
              Your privacy is our top priority. Sessions are confidential and secure.
            </p>
            <button className="text-[#00C28C] font-medium text-sm">
              Learn about security →
            </button>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-[#00C28C] mb-3">
              <i className="fas fa-comment-dots text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-1">Flexible Session Options</h3>
            <p className="text-gray-600 text-sm mb-4">
              Choose from video, phone, or chat sessions that fit your schedule.
            </p>
            <button className="text-[#00C28C] font-medium text-sm">
              Explore options →
            </button>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-[#00C28C] mb-3">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-1">Supportive Community</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with others on similar journeys in our moderated forums.
            </p>
            <button className="text-[#00C28C] font-medium text-sm">
              Join the community →
            </button>
          </div>
        </div>
      </div>

      {/* Therapists Section */}
      <div className="bg-[#F9F9F9] py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Our Experienced Therapists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/therapist1.jpg"
              alt="Dr. Anya Sharma"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Dr. Anya Sharma</h3>
              <p className="text-sm text-gray-600">Clinical Psychologist</p>
              <p className="text-sm text-gray-600 mb-3">Sessions Conducted: 345</p>
              <button className="bg-[#00C28C] text-white px-4 py-2 text-sm rounded-md">
                Schedule Session
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/therapist2.jpg"
              alt="Dr. Ben Carter"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Dr. Ben Carter</h3>
              <p className="text-sm text-gray-600">Licensed Therapist</p>
              <p className="text-sm text-gray-600 mb-3">Sessions Conducted: 520</p>
              <button className="bg-[#00C28C] text-white px-4 py-2 text-sm rounded-md">
                Schedule Session
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/therapist3.jpg"
              alt="Dr. Chloe Davis"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Dr. Chloe Davis</h3>
              <p className="text-sm text-gray-600">Counseling Psychologist</p>
              <p className="text-sm text-gray-600 mb-3">Sessions Conducted: 480</p>
              <button className="bg-[#00C28C] text-white px-4 py-2 text-sm rounded-md">
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Diverse Support Services Section */}
      <div className="bg-[#F9F9F9] py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Diverse Support Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{
            title: "Individual Therapy",
            desc: "One-on-one sessions tailored to your unique challenges and goals.",
            img: "/support1.jpg",
            button: "Find an Individual Therapist"
          }, {
            title: "Group Sessions",
            desc: "Join supportive groups for shared experiences and collective healing.",
            img: "/support2.jpg",
            button: "Explore Group Sessions"
          }, {
            title: "Crisis Support",
            desc: "Immediate access to trained professionals for urgent support.",
            img: "/support3.jpg",
            button: "Get Crisis Help Now"
          }].map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={service.img} alt={service.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <button className="text-[#00C28C] border border-[#00C28C] rounded-md px-4 py-1 text-sm font-medium">
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard ;






    

