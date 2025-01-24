const TagList = () => {
  const tags = [
    { color: "rgba(255, 130, 130, 0.13)", text: "Great Interface" },
    { color: "rgba(73, 230, 213, 0.13)", text: "Experienced" },
    { color: "rgba(73, 179, 230, 0.13)", text: "Low Price" },
    { color: "rgba(251, 208, 80, 0.15)", text: "Customizable" },
    { color: "rgba(213, 126, 255, 0.15)", text: "Trusted" },
    { color: "rgba(189, 231, 122, 0.15)", text: "Great Support" },
    { color: "rgba(255, 152, 152, 0.15)", text: "Safe" },
  ];

  return (
    <div className="tag-list-container">
      <ul style={{marginBottom:"50px"}}className="tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="tag-item">
            <a href="#" className="tag-link" style={{ backgroundColor: tag.color }}>
              {tag.text}
            </a>
          </li>
        ))}
        <li style={{color:"white"}}className="tag-item more-tag">&amp; more…</li>
      </ul>
      <style jsx>{`
        .tag-list-container {
          margin-top: 20px;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tag-item {
          display: inline-block;
        }

        .tag-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 15px;
          border-radius: 20px;
          background-color: #f0f0f0;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .tag-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .tag-link:active {
          transform: scale(0.98);
        }

        .more-tag {
          font-size: 14px;
          font-weight: bold;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default TagList;
