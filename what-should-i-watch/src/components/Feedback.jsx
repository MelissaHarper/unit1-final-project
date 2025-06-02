import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitAlert = () => {
    alert("Your form has been submitted");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Let us know what you'd like to see from this site in the future</h1>
      <form classname="Feedback">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Feedback:
          <br />
          <textarea
            type="textarea"
            name="feedback"
            rows="5"
            cols="30"
            value={formData.feedback}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <button
          onClick={submitAlert}
          className={
            formData.feedback.length === 0
              ? "disabled-button"
              : "enabled-button"
          }
          disabled={formData.feedback.length === 0}
        >
          Submit
        </button>
      </form>

      <section>
        <h2>Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
        <p>Feedback Character Count: {formData.feedback.length}</p>
      </section>
    </div>
  );
}

export default UserForm;
