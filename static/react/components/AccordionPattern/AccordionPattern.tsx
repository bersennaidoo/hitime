import React, { FC, useState, useEffect, useRef } from "react";
import { AccordionPatternTS } from "./AccordionPatternTS";
import $ from "jquery";

type TAccordionPatternProps = {};

const AccordionPattern: FC<TAccordionPatternProps> = (
  props: TAccordionPatternProps
) => {
    const {} = props
    const [accordionState, setAccordionState] = useState<boolean>(false)

    /*const createAccordion = () => {
        const accordions = document.querySelectorAll(".accordion h3")
        accordions.forEach((accEl) => new AccordionPatternTS(accEl as HTMLElement))
    }*/
    const createAccordion = () => {
      var $accordions = $(".accordion h3")
      var elstan1 = new AccordionPatternTS($accordions[0])
      var elstan2 = new AccordionPatternTS($accordions[1])
      var elstan3 = new AccordionPatternTS($accordions[2])

      $("#accordion1id").on("click", function() {
        elstan1.onButtonClick()
        setAccordionState(!accordionState)
      })
       
       $("#accordion2id").on("click", function() {
        elstan2.onButtonClick()
        setAccordionState(!accordionState)
      })

       $("#accordion3id").on("click", function() {
        elstan3.onButtonClick()
        setAccordionState(!accordionState)
      })
    }

    useEffect(() => {
        createAccordion()
    }, [])

  return (
    <div id="accordionGroup" className="accordion">
      <h3>
        <button
          type="button"
          aria-expanded="true"
          className="accordion-trigger"
          aria-controls="sect1"
          id="accordion1id"
        >
          <span className="accordion-title">
            Personal In Formation
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect1"
        role="region"
        aria-labelledby="accordion1id"
        className="accordion-panel"
      >
        <div>
          <fieldset>
            <p>
              <label htmlFor="cufc1">
                Name
                <span aria-hidden="true">*</span>:
              </label>
              <input
                type="text"
                value=""
                name="Name"
                id="cufc1"
                className="required"
                aria-required="true"
              />
            </p>
            <p>
              <label htmlFor="cufc2">
                Email
                <span aria-hidden="true">*</span>:
              </label>
              <input
                type="text"
                value=""
                name="Email"
                id="cufc2"
                aria-required="true"
              />
            </p>
            <p>
              <label htmlFor="cufc3">Phone:</label>
              <input type="text" value="" name="Phone" id="cufc3" />
            </p>
            <p>
              <label htmlFor="cufc4">Extension:</label>
              <input type="text" value="" name="Ext" id="cufc4" />
            </p>
            <p>
              <label htmlFor="cufc5">Country:</label>
              <input type="text" value="" name="Country" id="cufc5" />
            </p>
            <p>
              <label htmlFor="cufc6">City/Province:</label>
              <input type="text" value="" name="City_Province" id="cufc6" />
            </p>
          </fieldset>
        </div>
      </div>
      <h3>
        <button
          type="button"
          aria-expanded="false"
          className="accordion-trigger"
          aria-controls="sect2"
          id="accordion2id"
        >
          <span className="accordion-title">
            Billing Address
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect2"
        role="region"
        aria-labelledby="accordion2id"
        className="accordion-panel"
        hidden={false}
      >
        <div>
          <fieldset>
            <p>
              <label htmlFor="b-add1">Address 1:</label>
              <input type="text" name="b-add1" id="b-add1" />
            </p>
            <p>
              <label htmlFor="b-add2">Address 2:</label>
              <input type="text" name="b-add2" id="b-add2" />
            </p>
            <p>
              <label htmlFor="b-city">City:</label>
              <input type="text" name="b-city" id="b-city" />
            </p>
            <p>
              <label htmlFor="b-state">State:</label>
              <input type="text" name="b-state" id="b-state" />
            </p>
            <p>
              <label htmlFor="b-zip">Zip Code:</label>
              <input type="text" name="b-zip" id="b-zip" />
            </p>
          </fieldset>
        </div>
      </div>
      <h3>
        <button
          type="button"
          aria-expanded="false"
          className="accordion-trigger"
          aria-controls="sect3"
          id="accordion3id"
        >
          <span className="accordion-title">
            Shipping Address
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect3"
        role="region"
        aria-labelledby="accordion3id"
        className="accordion-panel"
        hidden={false}
      >
        <div>
          <fieldset>
            <p>
              <label htmlFor="m-add1">Address 1:</label>
              <input type="text" name="m-add1" id="m-add1" />
            </p>
            <p>
              <label htmlFor="m-add2">Address 2:</label>
              <input type="text" name="m-add2" id="m-add2" />
            </p>
            <p>
              <label htmlFor="m-city">City:</label>
              <input type="text" name="m-city" id="m-city" />
            </p>
            <p>
              <label htmlFor="m-state">State:</label>
              <input type="text" name="m-state" id="m-state" />
            </p>
            <p>
              <label htmlFor="m-zip">Zip Code:</label>
              <input type="text" name="m-zip" id="m-zip" />
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AccordionPattern;
