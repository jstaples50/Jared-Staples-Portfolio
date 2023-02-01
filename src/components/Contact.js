import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <form>
        <label for="name">Name</label>
        <input type="text" placeholder="John Doe" name="name"></input>
        <label for="email">Email</label>
        <input type="text" placeholder="johndoe@mail.com" name="email"></input>
        <label id="message-label" for="message">
          Send me a message!
        </label>
        <input
          id="message-box"
          type="text"
          placeholder="Hire Me!"
          name="message"
        ></input>
      </form>
    </div>
  );
}
