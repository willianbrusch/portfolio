import "./cardExperience.css";

import { motion } from "framer-motion";
import { useState } from "react";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";

type Company = {
  companyName: string;
  companyImage: string;
  position: string;
  employmentPeriod: string;
  description: string[];
};

type CardExperienceProps = {
  company: Company;
};

function CardExperience({ company }: CardExperienceProps) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="card-experience">
      <div className="job-description">
        <img
          src={`./../../assets/${company.companyImage}`}
          className="item company-img"
        />
        <div>
          <div className="job-info">
            <>
              <h4>{company.companyName}</h4> <span>{company.position}</span>
            </>
            <p onClick={() => setShowText(!showText)}>
              {showText == false ? (
                <VscTriangleRight size={12} className="icon" />
              ) : (
                <VscTriangleDown size={12} className="icon" />
              )}
            </p>
          </div>
          <p className="job-position">{company.employmentPeriod}</p>
        </div>
      </div>

      {showText == true ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="job-description-text"
          onClick={() => setShowText(!showText)}
        >
          {company.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardExperience;
