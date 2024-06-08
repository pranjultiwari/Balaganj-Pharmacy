import React from "react";
import MedicineCard from "../../components/MedicineCard";
import data from "../../data/medicines/Lifestyle.json";
const Lifestyle = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    const filtered = data.filter((medicine) =>
      medicine.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <SearchBar placeholder="Search Lifestyle products..." onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center">
        {filteredData.map((medicine, index) => (
          <MedicineCard
            key={index}
            name={medicine.name}
            price={medicine.price}
            description={medicine.description}
            image={medicine.image}
          />
        ))}
      </div>
    </div>
  );  
};

export default Lifestyle;
