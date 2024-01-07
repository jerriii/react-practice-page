const pricePlanning = [
  {
    id: 1,
    type: "BASIC",
    amount: "40",
    features: ["Five Website", "Five User", "100 GB Bandwidth", "2GB Storage"],
  },
  {
    id: 2,
    type: "BASIC",
    amount: "40",
    features: ["Five Website", "Five User", "100 GB Bandwidth", "2GB Storage"],
  },
  {
    id: 3,
    type: "BASIC",
    amount: "40",
    features: ["Five Website", "Five User", "100 GB Bandwidth", "2GB Storage"],
  },
];

const PricePlanning = () => {
  return (
    <div className="price-planning">
      <h1 style={{ margin: "0" }}>Price Planning</h1>
      <p
        style={{
          wordBreak: "break-word",
          width: "50%",
          textAlign: "center",
          margin: "0",
        }}
      >
        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
        zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
        bedrijfstak sinds.
      </p>
      <div className="price-planning-cards-container">
        {pricePlanning.map((plans) => (
          <div key={plans.id} className="price-planning-cards">
            <div style={{ padding: "1rem 5rem", textAlign: "center" }}>
              <h1 style={{ fontWeight: "400" }}>{plans.type}</h1>
              <p style={{ fontSize: "45px", margin: "1rem" }}>{plans.amount}</p>
              {plans?.features?.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePlanning;
