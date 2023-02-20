import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { faq } from "./data";

const Faq = () => {
  return (
    <section className="faq ">
      <h1>FAQ</h1>
      <Accordion>
        {faq.map((item) => {
          return (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>{item.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "faqs"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Faq;
