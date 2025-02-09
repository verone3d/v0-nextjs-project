export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto decorative-border">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          <strong>Email:</strong>{" "}
          <a href="mailto:forms@verone.net" className="text-blue-600 hover:underline">
            your.email@example.com
          </a>
        </p>
        <p className="mb-4">
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            +1 (234) 567-890
          </a>
        </p>
        <p>
          <strong>Address:</strong>
          <br />
          123 Main Street
          <br />
          City, State 12345
          <br />
          Country
        </p>
      </div>
    </div>
  )
}

