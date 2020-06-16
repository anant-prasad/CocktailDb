import React from "react";
import {Link } from 'react-router-dom'

export default function Error() {
  return <section className="error-page section">
    <div className="error-container">
      <h1>OOPS! IT's A DEAD END</h1>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  </section>;
}
