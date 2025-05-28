import React from 'react'

const Testimonial = () => {

const reviews = [
  {
    text: "I can actually see progress in my mental health which is something I haven't been able to say in 15 years and it's thanks to her.",
    author: "Written by S.A. for Virginia Truglio (LCSW)",
    image: "/review1.jpg",
  },
  {
    text: "Therapy helped me feel heard for the first time. I'm finally making progress.",
    author: "Written by T.M. for Sarah Lopez (PhD)",
    image: "/review2.jpg",
  },
  {
    text: "I never thought I'd feel normal again. This has changed my life.",
    author: "Written by R.L. for David Kim (LPC)",
    image: "/review3.jpg",
  },
  {
    text: "Working with her made a big difference in how I cope with stress.",
    author: "Written by J.B. for Emily Wong (LCSW)",
    image: "/review4.jpg",
  },
  {
    text: `Arya is amazing in her insights and conversational approach. I am so glad and blessed to have found her and started healing with her guidance.`,
    author: "Written by M.C. for Dr. James Hill (PhD)",
    image: "/review5.jpg",
  },
  ];

  return (
    <div>
        <h2 style={{fontSize : 30}}>Client Reviews</h2>

        {reviews.length === 0 ? (<p>No Content Available</p>) : (

        reviews.map((item) => {
        <div>
           <p style={{fontSize : 16}}>{item.author}</p>
        </div>
        })
        
        )}        
    </div>
    
  )
}

export default Testimonial;