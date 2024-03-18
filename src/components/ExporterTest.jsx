// components/ExporterCard.js
const ExporterCard = ({ exporter }) => {
    return (
      <div className="flex flex-col gap-2 shadow-md rounded-md p-4">
        <img src={exporter.logo} alt={exporter.name} className="w-20 h-20 object-cover" />
        <h3 className="text-lg font-medium">{exporter.name}</h3>
        <p className="text-gray-700">{exporter.location}</p>
        <p className="text-gray-700">{exporter.summary.substring(0, 60)}</p>
        <a href={`/exporters/${exporter.id}`} className="text-blue-500 underline">View Profile</a>
      </div>
    );
  };
  
  export default ExporterCard;
  