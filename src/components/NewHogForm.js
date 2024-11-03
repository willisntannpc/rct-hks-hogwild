// src/components/NewHogForm.js
import React, { useState } from "react";

function NewHogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = { name, image, specialty, weight, greased, "highest medal": highestMedal };
    onAddHog(newHog);
    setName("");
    setImage("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setHighestMedal("");
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" type="number" />
      <label>
        Greased:
        <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
      </label>
      <input value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} placeholder="Highest Medal" />
      <button type="submit" className="ui button primary">Add Hog</button>
    </form>
  );
}

export default NewHogForm;
