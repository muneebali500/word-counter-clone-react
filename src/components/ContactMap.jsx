export default function ContactMap() {
  return (
    <section className="border-indigo-500 border rounded-sm w-full h-72 md:w-2/5 md:h-auto md:ml-5">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4626889497913!2d67.02528531431906!3d24.813845853236842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da36a95b2f7%3A0x8d72c1de4c93a1ff!2sPark%20Towers!5e0!3m2!1sen!2s!4v1634700958149!5m2!1sen!2s"
        frameBorder="0"
        title="map"
        allowFullScreen=""
        loading="lazy"
      />
    </section>
  );
}
