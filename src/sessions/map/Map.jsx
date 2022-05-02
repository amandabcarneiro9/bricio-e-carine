export default function Map() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5483025932836!2d-45.71963168530539!3d-23.04035154844245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc507f761152a9%3A0xfd867b2f00b0a0f9!2sCh%C3%A1cara%20do%20Alaor!5e0!3m2!1sen!2snl!4v1651156090035!5m2!1sen!2snl"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
