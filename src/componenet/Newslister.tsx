const NewsletterSignup = () => {
  return (
    <section className="p-8 text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg hover:shadow-2xl transition-all duration-500">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-4 text-gray-700">
        Get the latest updates on new books and blog posts.
      </p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-l-lg p-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white rounded-r-lg px-4 focus:ring-2 focus:ring-yellow-500"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
cd