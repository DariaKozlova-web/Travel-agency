export const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-amber-600">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div className="p-6 bg-base-100 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-amber-950">Our Office</h2>
          <p className="mb-2 text-amber-950"><strong>Address:</strong><br/> 123 Traveler Street, London, UK</p>
          <p className="mb-2 text-amber-950"><strong>Email:</strong><br/> support@travelagency.com</p>
          <p className="mb-2 text-amber-950"><strong>Phone:</strong><br/> +44 123 456 789</p>
          <p className="mt-4 text-amber-950">
            We’re always happy to answer your questions and help you plan your next adventure!
          </p>
        </div>

        {/* Contact Form */}
        <form className="p-6 bg-base-200 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-amber-950">Send us a message</h2>

          <label className="form-control w-full mb-4 text-amber-950">
            <span className="label-text">Your Name</span>
            <input type="text" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full mb-4 text-amber-950">
            <span className="label-text">Your Email</span>
            <input type="email" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full mb-4 text-amber-950">
            <span className="label-text">Message</span>
            <textarea className="textarea textarea-bordered h-28 w-full"></textarea>
          </label>

          <button className="btn btn-primary mt-5 w-full text-amber-950 bg-amber-600 border-amber-600 hover:bg-amber-500 ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};