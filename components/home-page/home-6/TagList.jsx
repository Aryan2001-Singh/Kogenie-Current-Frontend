const TagList = () => {
  const tags = [
    { color: "rgb(249, 189, 233)", text: "Great Interface" },
    { color: "rgba(173, 241, 234, 0.99)", text: "Experienced" },
    { color: "rgb(162, 212, 235)", text: "Low Price" },
    { color: "rgba(246, 228, 177, 0.8)", text: "Customizable" },
    { color: "rgba(225, 183, 246, 0.94)", text: "Trusted" },
    { color: "rgb(219, 241, 183)", text: "Great Support" },
    { color: "rgb(249, 185, 185)", text: "Safe" },
  ];

  return (
    <div style={{borderRadius:"0px",}}className="tag-list-container">
      <ul style={{marginBottom:"50px",
      }}className="tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="tag-item">
            <a href="#" className="tag-link" style={{ backgroundColor: tag.color,
              borderRadius:"0px", fontFamily:"Inter, sans-serif",
             }}>
              {tag.text}
            </a>
          </li>
        ))}
        <li style={{color:"grey",
          marginTop:"30px",
          fontFamily:"Inter, sans-serif",
          fontWeight:"regular",
        }}className="tag-item more-tag">&amp; more…</li>
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
