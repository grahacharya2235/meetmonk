function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-xl text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
