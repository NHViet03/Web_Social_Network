import React from "react";

const CusCard = ({ card }) => {
  return (
    <div>
      <h6 className="fw-medium mb-2">{card.title}</h6>
      <h4
        style={{
          fontSize: "24px",
        }}
      >
        {card.value}
        {card.icon && (
          <i
            className={`${card.icon} ms-2`}
            style={{
              color: `var(--${card.color}-color)`,
              fontSize:'24px'
            }}
          />
        )}
      </h4>
      <span>{card.subTitle}</span>
    </div>
  );
};

export default CusCard;
