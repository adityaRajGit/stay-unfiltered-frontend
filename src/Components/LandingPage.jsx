import React, { useState } from "react";
import MainText from './MainText';
import Testimonial from './Testimonial';
import DashboardBg from '../assets/Dashboard.jpg';
import TherapyImg1 from '../assets/Support (2).jpg';
import TherapyImg2 from '../assets/Support.jpg';
import TherapyImg3 from '../assets/Therapy.jpg';
import TherapyImg4 from '../assets/Blame.jpg';
import TherapyImg5 from '../assets/Distressed.jpg';

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
    <div className="relative w-full bg-teal-200">
      {/* Hero Section */}
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        </div>
      </header>

      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Find Your Unfiltered Voice
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Your story and struggles deserve to be heard.<br />
                  Share them Unfiltered.
                </p>
              </div>
              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">100k+</p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">Lives<br />Touched</p>
                </div>
                <div className="hidden sm:block">
                  <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.72" y1="10.58" x2="15.72" y2="0.58"></line>
                    <line x1="0.72" y1="17.58" x2="15.72" y2="7.58"></line>
                    <line x1="0.72" y1="24.58" x2="15.72" y2="14.58"></line>
                    <line x1="0.72" y1="31.58" x2="15.72" y2="21.58"></line>
                    <line x1="0.72" y1="38.58" x2="15.72" y2="28.58"></line>
                  </svg>
                </div>
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">98%</p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">Positive<br />Feedback</p>
                </div>
              </div>
            </div>
            <div>
              <img className="w-full rounded-xl shadow-lg" src={DashboardBg} alt="Dashboard" />
            </div>
          </div>
        </div>
      </section>

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
              img: TherapyImg1
            },
            {
              title: "Couples Counseling",
              desc: "Work on communication and relationship dynamics.",
              img: TherapyImg2
            },
            {
              title: "Teen Therapy",
              desc: "Support for teens dealing with emotional challenges.",
              img: TherapyImg3
            },
            {
              title: "Family Therapy",
              desc: "Improve family dynamics and resolve conflicts.",
              img: TherapyImg4
            },
            {
              title: "Psychiatry and Medication",
              desc: "Professional medical support for mental health.",
              img: TherapyImg5
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








