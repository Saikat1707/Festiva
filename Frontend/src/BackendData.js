
export const getEventInfo = ()=>{
    const eventInfo = [
        {
          id: 1,
          url: "https://plus.unsplash.com/premium_photo-1710522706751-c2f0c76cc5fd?w=900&auto=format&fit=crop&q=60",
          title: "Festiva Opening Night",
          description:
            "Join us for the spectacular Festiva Opening Night at the Grand Hall, City Center! Kick off the festivities with an evening filled with dazzling lights, world-class music performances, and a grand celebration attended by celebrities, influencers, and culture enthusiasts. Enjoy gourmet refreshments, interactive art installations, and exclusive meet-and-greet sessions. Don't miss the perfect opportunity to network, relax, and dive into the festive spirit. Limited early bird passes available – book now and be part of this unforgettable experience!",
          location: "Grand Hall, City Center",
          date: "2025-10-05",
          time: "7:00 PM - 11:00 PM",
          organizer: "Festiva Events Co.",
          contact: "contact@festivaevents.com"
        },
        {
          id: 2,
          url: "https://plus.unsplash.com/premium_photo-1667425092311-80658bb0c05f?w=900&auto=format&fit=crop&q=60",
          title: "Food & Fun",
          description:
            "Experience the ultimate culinary extravaganza at Food & Fun in the Open Park Arena! This event is a paradise for food lovers, families, and friends. From street food to gourmet delicacies, explore over 50 stalls offering flavors from around the world. Join celebrity chefs for live cooking sessions and indulge in mouth-watering dishes. Fun games, live performances, and interactive zones make this event perfect for all ages. Connect with fellow foodies and create memories. Secure your spot now before tickets run out!",
          location: "Open Park Arena",
          date: "2025-10-06",
          time: "12:00 PM - 8:00 PM",
          organizer: "City Food Festival",
          contact: "info@cityfoodfest.com"
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&auto=format&fit=crop&q=60",
          title: "Grand Finale",
          description:
            "Cap off the festival in style at the Grand Finale in the Riverside Grounds! Watch as the sky lights up with breathtaking fireworks, complemented by electrifying live music performances by top bands and DJs. Dance along with thousands of festival-goers, witness stunning visual effects, and enjoy gourmet food trucks and beverage lounges. This event is a celebration of life, music, and togetherness, perfect for couples, friends, and families. Experience the energy and thrill of the season’s most awaited event – book your tickets now and make memories that last a lifetime!",
          location: "Riverside Grounds",
          date: "2025-10-07",
          time: "8:00 PM - 11:30 PM",
          organizer: "Riverside Cultural Board",
          contact: "events@riversideboard.org"
        },
        {
          id: 4,
          url: "https://plus.unsplash.com/premium_photo-1685094987286-fa4ce5edd55c?w=900&auto=format&fit=crop&q=60",
          title: "Cultural Performances",
          description:
            "Dive into a world of art, tradition, and culture at the Cultural Performances evening in the Heritage Theatre! Watch enthralling performances from renowned dance troupes, musicians, and theater groups representing diverse cultures. Meet artists, participate in workshops, and explore handcrafted exhibits. Whether you're an art enthusiast, a cultural explorer, or simply looking for a relaxing yet engaging experience, this event offers something for everyone. Attend with family or friends and celebrate the beauty of heritage, creativity, and expression. Book your tickets today and step into a cultural wonderland!",
          location: "Heritage Theatre",
          date: "2025-10-06",
          time: "5:00 PM - 9:00 PM",
          organizer: "Global Arts Collective",
          contact: "performances@globalarts.com"
        }
      ];
    return eventInfo
}


export const getFeaturedEventInfo = ()=>{
    const featuredEvents = [
        {
        id: 1,
        title: "Tech Conference 2023",
        date: "Oct 15, 2023",
        time: "9:00 AM - 6:00 PM",
        location: "San Francisco, CA",
        image: "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
        category: "Conference",
        price: "$149"
        },
        {
        id: 2,
        title: "Summer Music Festival",
        date: "Aug 20, 2023",
        time: "2:00 PM - 11:00 PM",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
        category: "Music",
        price: "$79"
        },
        {
        id: 3,
        title: "Food & Wine Expo",
        date: "Sep 5, 2023",
        time: "11:00 AM - 8:00 PM",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
        category: "Food",
        price: "$95"
        }
    ];
    return featuredEvents
}

export const getTestimonialsInfo = ()=>{
    const testimonials = [
    {
      id:1,
      name: "Saikat Bera",
      role: "Event Organizer",
      image: "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
      review: "This platform made organizing my event seamless. Everything from bookings to attendee management worked like magic!"
    },
    {
      id:2,
      name: "Ananya Gupta",
      role: "Event Enthusiast",
      image: "https://i.pinimg.com/736x/d6/7a/4a/d67a4aa9749dba2a18f4f8797f230c71.jpg",
      review: "I discovered amazing events in my city that I wouldn’t have known about otherwise. Love the clean design and smooth experience!"
    },
    {
      id:3,
      name: "Rahul Sharma",
      role: "Conference Speaker",
      image: "https://i.pinimg.com/736x/45/5a/46/455a46b3e051d8f5c80be1e7459a9455.jpg",
      review: "The ticketing process was super smooth for my session. Attendees appreciated the easy booking system. Highly recommended!"
    },
    {
      id:4,
      name: "Sneha Roy",
      role: "Music Festival Attendee",
      image: "https://i.pinimg.com/736x/96/23/a7/9623a7a85020710bd5ca33b608ff0c5d.jpg",
      review: "I booked tickets for a concert in just a few clicks. The reminders and event updates were very helpful!"
    }
  ];
  return testimonials
}

export const getEventTypes = ()=>{
    const eventTypes = [
        'Conference', 'Workshop', 'Seminar', 'Networking', 'Concert',
        'Festival', 'Party', 'Sports', 'Webinar', 'Exhibition'
    ];

    return eventTypes
}

export const getCategories = ()=>{
    const categories = [
        'Business', 'Technology', 'Music', 'Food & Drink', 'Health',
        'Arts', 'Education', 'Community', 'Sports & Fitness', 'Other'
    ];
    return categories
}

export const getTimeZones = ()=>{
    const timezones = [
        'UTC', 'EST', 'PST', 'CST', 'MST', 
        'GMT', 'CET', 'AEST', 'IST', 'JST'
    ];
    return timezones
}




export const getContactMethod = ()=>{
    const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'support@festiva.com',
      description: 'Send us an email anytime',
      action: 'mailto:support@festiva.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      action: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: '123 Celebration Lane, Party City, CA 90001',
      description: 'Come visit our office',
      action: 'https://maps.google.com'
    },
    {
      icon: 'fas fa-comments',
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant help',
      action: '#chat'
    }
  ];
  return contactMethods
}

export const getFaqs  =()=>{
    const faqs = [
    {
      question: "Do you provide services for both small and large events?",
      answer: "Absolutely! Whether it's an intimate gathering or a large celebration, we offer tailored solutions for every scale."
    },
    {
      question: "Are your services available nationwide?",
      answer: "Currently, we operate in select cities across the country. Check our website or contact support for availability in your area."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for your convenience."
    },
    {
      question: "Is there a cancellation policy?",
      answer: "Yes, cancellations made at least 72 hours prior to the event are eligible for a full refund. Please refer to our policy for more details."
    },
    {
      question: "Do you offer eco-friendly decoration options?",
      answer: "Yes, we provide sustainable and environmentally-friendly decorations. Ask our team for green event options."
    },
    {
      question: "How do I track my order or event status?",
      answer: "Once your event is confirmed, you will receive a tracking link and updates via email and SMS."
    }
];
  return faqs
}



export const getHostEvents = ()=>{
  const hostedEvents = [
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "Oct 15, 2023",
      status: "Verified",
      attendees: 250,
      revenue: "$5,240"
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "Nov 22, 2023",
      status: "Pending",
      attendees: 45,
      revenue: "$1,350"
    }
  ];
  return hostedEvents
}



export const getUserData = ()=>{
  const userData = {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      joinDate: "January 2022",
      isHost: true,
      eventsCreated: 0
    };
  return userData
}


export const getReviewsEvent = ()=>{
  const events = [
    {
      id: 'all',
      name: 'All Events',
      description: 'See reviews from all Festiva events'
    },
    {
      id: 'music-fest-2023',
      name: 'Summer Music Festival 2023',
      description: 'Annual music festival featuring top artists',
      date: 'July 15-17, 2023',
      location: 'Central Park, New York'
    },
    {
      id: 'food-fair-2023',
      name: 'International Food Fair',
      description: 'Culinary experience with global cuisines',
      date: 'August 5-6, 2023',
      location: 'Downtown Plaza, Chicago'
    },
    {
      id: 'tech-summit-2023',
      name: 'Tech Innovation Summit',
      description: 'Showcasing the latest in technology',
      date: 'September 12-14, 2023',
      location: 'Convention Center, San Francisco'
    },
    {
      id: 'art-exhibition-2023',
      name: 'Modern Art Exhibition',
      description: 'Contemporary artworks from emerging artists',
      date: 'October 1-31, 2023',
      location: 'Metropolitan Museum, Boston'
    },
    {
      id: 'sports-championship-2023',
      name: 'National Sports Championship',
      description: 'Competition featuring various sports',
      date: 'November 10-12, 2023',
      location: 'City Stadium, Los Angeles'
    },
    {
      id: 'winter-gala-2023',
      name: 'Winter Charity Gala',
      description: 'Elegant evening for a good cause',
      date: 'December 2, 2023',
      location: 'Grand Hotel, Miami'
    }
  ];
  return events
}

export const getReviews = ()=>{
  const reviews = [
    {
      id: 1,
      name: "Alex Rivera",
      rating: 5,
      date: "2023-11-15",
      title: "Unforgettable music experience!",
      content: "The Summer Music Festival was absolutely incredible. The sound quality, artist lineup, and overall organization were top-notch. Can't wait for next year!",
      event: "music-fest-2023",
      verified: true
    },
    {
      id: 2,
      name: "Sophie Williams",
      rating: 4,
      date: "2023-11-10",
      title: "Amazing culinary journey",
      content: "The International Food Fair was a delight. So many diverse cuisines to try. The Mexican and Thai food stalls were my favorites!",
      event: "food-fair-2023",
      verified: true
    },
    {
      id: 3,
      name: "Marcus Johnson",
      rating: 5,
      date: "2023-11-05",
      title: "Tech that will change the world",
      content: "The Tech Innovation Summit showcased some mind-blowing innovations. The VR experiences and AI demonstrations were particularly impressive.",
      event: "tech-summit-2023",
      verified: true
    },
    {
      id: 4,
      name: "Lisa Chen",
      rating: 4,
      date: "2023-10-28",
      title: "Inspiring art collection",
      content: "The Modern Art Exhibition featured some truly thought-provoking pieces. The curation was excellent and the artists were very talented.",
      event: "art-exhibition-2023",
      verified: false
    },
    {
      id: 5,
      name: "David Miller",
      rating: 5,
      date: "2023-10-20",
      title: "Thrilling sports competition",
      content: "The National Sports Championship was packed with excitement. The athletes were incredible and the atmosphere was electric throughout.",
      event: "sports-championship-2023",
      verified: true
    },
    {
      id: 6,
      name: "Emma Thompson",
      rating: 3,
      date: "2023-10-15",
      title: "Good but crowded",
      content: "The Winter Charity Gala was beautiful but extremely crowded. It was hard to move around and enjoy the exhibits properly.",
      event: "winter-gala-2023",
      verified: true
    },
    {
      id: 7,
      name: "Ryan Park",
      rating: 5,
      date: "2023-10-10",
      title: "Best music festival ever!",
      content: "The lineup at the Summer Music Festival was incredible. The headliners put on an amazing show and the food vendors were great too.",
      event: "music-fest-2023",
      verified: true
    },
    {
      id: 8,
      name: "Nina Patel",
      rating: 4,
      date: "2023-10-05",
      title: "Delicious food experience",
      content: "The International Food Fair had so many options. I particularly enjoyed the Italian and Japanese sections. Will definitely come back next year.",
      event: "food-fair-2023",
      verified: true
    }
  ];
  return reviews
}


export const getTicketdata = ()=>{
  const ticketData = {
  upcoming: [
    {
      id: 1,
      event: "Coldplay: Music of the Spheres World Tour",
      date: "June 15, 2023",
      time: "7:30 PM",
      venue: "Madison Square Garden, New York",
      orderNumber: "TH-7582943",
      ticketHolder: "John Doe (johndoe@example.com)",
      seats: "Section 102, Row E, Seats 12-13",
      ticketType: "Standard Admission",
      quantity: 2,
      price: 249.98,
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=TH-7582943&size=150x150"
    },
    {
      id: 2,
      event: "Hamilton - Broadway Musical",
      date: "July 22, 2023",
      time: "2:00 PM",
      venue: "Richard Rodgers Theatre, New York",
      orderNumber: "TH-7625489",
      ticketHolder: "John Doe (johndoe@example.com)",
      seats: "Orchestra, Row C, Seat 105",
      ticketType: "Premium",
      quantity: 1,
      price: 199.00,
      status: "Confirmed",
      image: "https://images.unsplash.com/photo-1501281667305-0d4e0ab15754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=TH-7625489&size=150x150"
    }
  ],
  past: [
    {
      id: 3,
      event: "Local Art Festival",
      date: "August 5, 2022",
      time: "10:00 AM",
      venue: "City Park, Central Area",
      orderNumber: "TH-7698321",
      ticketHolder: "John Doe (johndoe@example.com)",
      seats: "General Admission",
      ticketType: "Weekend Pass",
      quantity: 4,
      price: 120.00,
      status: "Completed",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?data=TH-7698321&size=150x150"
    }
  ]
};

  return ticketData
}