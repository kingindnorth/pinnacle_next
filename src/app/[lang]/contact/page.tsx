import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <section className="container mx-auto py-12 px-4">
      <PageHeader heading="Contact Us" text="We'd love to hear from you!" />
      <form className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100"
            id="message"
            name="message"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}