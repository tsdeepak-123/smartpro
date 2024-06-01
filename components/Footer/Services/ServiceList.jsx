const ServiceList = ({ title, items }) => {
  return (
    <section>
      <h4 className="font-semibold text-TextColor mb-1 text-[16px] font-inter">
        {title}
      </h4>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="mb-1 text-[16px] text-TextColor font-inter"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceList;
