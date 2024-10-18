import React from 'react';
import { FileText, Image, Folder, HelpCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import '../../../assets/css/StorageDetails.css';

const StorageDetails = () => {
  const totalStorage = 128; // Total storage in GB
  const usedStorage = 30.4; // Used storage in GB

  const categories = [
    { name: 'Documents Files', files: 1328, size: 1.3, icon: <FileText />, color: '#3498db' },
    { name: 'Media Files', files: 1328, size: 15.1, icon: <Image />, color: '#e74c3c' },
    { name: 'Other Files', files: 1328, size: 12.7, icon: <Folder />, color: '#f1c40f' },
    { name: 'Unknown', files: 428, size: 1.3, icon: <HelpCircle />, color: '#8e44ad' }
  ];

  const pieData = categories.map(cat => ({
    name: cat.name,
    value: cat.size,
    color: cat.color
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <br/>
          <p className="label">{`${data.name}: ${data.value} GB`}</p>
          <p className="percentage">{`${((data.value / totalStorage) * 100).toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="storage-details-component">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              startAngle={90}
              endAngle={-270}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-center-text">
          <h2>{usedStorage.toFixed(1)} GB</h2>
          <p>of {totalStorage} GB</p>
        </div>
      </div>

      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-icon" style={{ backgroundColor: `${category.color}20` }}>
              {React.cloneElement(category.icon, { color: category.color, size: 24 })}
            </div>
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
              <p className="category-files">{category.files.toLocaleString()} Files</p>
            </div>
            <div className="category-size">
              <p className="category-size-value">{category.size} GB</p>
              <p className="category-size-percentage">
                {((category.size / totalStorage) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageDetails;
