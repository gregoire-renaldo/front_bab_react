
import { useState } from "react";
import axios from "axios";

const initialFormData = Object.freeze({
  description: "",
});

const SearchForm = () => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/search/", formData)
      // ... submit to API or something
      .then(function (response) {
        console.log(response);
        // handle response : send as props to list component
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form action="">
        <label>description || name</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="description || name"
        />

        <button onClick={handleSubmit}>Search </button>
      </form>
    </div>
  );
};

export default SearchForm;
