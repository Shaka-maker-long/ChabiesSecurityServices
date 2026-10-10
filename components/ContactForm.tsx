"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      `This form is not connected to a mailbox, so nothing was sent. Call ${site.phoneDisplay} or email ${site.email}.`,
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <p className="form-note">
        The form is for layout only. It does not send a message. Call or email and Second Plate can reply directly.
      </p>
      <div className="form-grid">
        <label>
          First name
          <input name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label>
          Last name
          <input name="lastName" type="text" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} />
      </label>
      <button type="submit" className="btn btn-fill">
        Submit
      </button>
      {notice ? (
        <p className="form-status" role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
