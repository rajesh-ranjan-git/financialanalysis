import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const data = [
  {
    question: "Income Statement (₹ Cr.)",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
  {
    question: "Balance Sheet (₹ Cr.)",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
  {
    question: "Cash Flow  (₹ Cr.)",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor dolore neque obcaecati repudiandae porro? Labore, quasi quisquam natus fugit possimus quia sit perferendis! Nemo, repudiandae dolorum. Sit, quas saepe? Ea voluptate, dolore laborum veritatis vitae illo blanditiis fuga at, aspernatur a ut quaerat consequatur esse? Iure illum porro, magnam accusamus aperiam iusto omnis cumque assumenda, earum non voluptate labore.",
  },
];

const Accordion = () => {
  const [acc, setAcc] = useState(null);

  const handleAccordion = (index) => {
    if (acc === index) {
      setAcc(null);
    } else {
      setAcc(index);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 rounded-md w-full">
      {data.map((ques, index) => {
        return (
          <div className="rounded-md rounded-b-none w-[90%]" key={index}>
            <div
              className={`flex justify-between border border-neutral-300 rounded-md p-2 ${
                acc === index && "rounded-b-none border-b-0"
              } font-semibold text-xl cursor-pointer`}
              onClick={() => handleAccordion(index)}
            >
              <span>{ques.question}</span>
              {acc === index ? <Minus /> : <Plus />}
            </div>
            {acc === index && (
              <div className="flex justify-between p-2 border border-neutral-300 rounded-md rounded-t-none">
                <span>{ques.answer}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
