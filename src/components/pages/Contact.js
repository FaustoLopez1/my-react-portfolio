import React from "react";

export default function Contact() {
  return (
    <div className="body">
      <h1>Contact</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput2">Name:</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="Brent Liir"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address:</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
