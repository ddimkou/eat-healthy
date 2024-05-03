import React, { useState, ChangeEvent, FormEvent } from "react";
import { buttonClasses } from "../shared/constants";
const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
  };

  return (
    <section
      className="min-h-56 bg-meadow-green text-center text-base font-semibold
     flex items-center justify-center"
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-eggshell-white text-xl">
          Stay informed! Join our Newsletter!
        </label>
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
          className="p-1 m-2 text-black"
        />
        <input type="submit" value="Subscribe" className={`${buttonClasses}`} />
      </form>
    </section>
  );
};

export default NewsLetter;
