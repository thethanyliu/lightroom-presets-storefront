import React, { useState } from "react";
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import toast from "react-hot-toast";
import { send } from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [showRequired, setShowRequired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(name, email, message, isSelected);
    if (!name || !email || !message || !isSelected) {
      setShowRequired(true);
      setIsLoading(false);
      return;
    }

    try {
      const res = await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "PnutPresets Support",
          message: message,
          reply_to: email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    toast.success("Message sent successfully!");
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
    setIsSelected(false);

    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Send us a message</h2>
      <form
        name="contact"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          isRequired
          variant="faded"
          label="Name"
          labelPlacement="outside"
          placeholder="Your Name"
          size="lg"
          radius="lg"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onFocus={() => {
            setShowRequired(false);
          }}
          value={name}
        />
        <Input
          isRequired
          variant="faded"
          label="Email"
          labelPlacement="outside"
          placeholder="Your Email"
          size="lg"
          radius="lg"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={() => {
            setShowRequired(false);
          }}
        />
        <Textarea
          isRequired
          label="Your Message"
          labelPlacement="outside"
          variant="faded"
          placeholder="Your Message Here"
          fullWidth
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onFocus={() => {
            setShowRequired(false);
          }}
          value={message}
        />
        <Checkbox
          isRequired
          onChange={(checked) => {
            if (checked && showRequired) setShowRequired(false);
            setIsSelected(checked);
          }}
          isSelected={isSelected}
        >
          <span style={{ color: "rgb(15 23 42)", fontSize: "12px" }}>
            By checking this, you agree to our{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "rgb(51 65 85)",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "/terms-and-conditions",
                  "pop",
                  "width=600",
                  "height=600"
                )
              }
            >
              Terms
            </span>{" "}
            and acknowledge that you have read our{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "rgb(51 65 85)",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("/privacy-policy", "pop", "width=600", "height=600")
              }
            >
              Privacy Policy.
            </span>{" "}
          </span>
        </Checkbox>
        <span style={showRequired ? { display: "flex" } : { display: "none" }}>
          Please fill out all required fields marked with *.
        </span>
        <Button color="primary" radius="lg" type="submit">
          {isLoading ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
