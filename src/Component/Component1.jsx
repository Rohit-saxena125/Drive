import Card from "./Card.jsx";
import Card1 from "./Card1.jsx";
import Card2 from "./Card2.jsx";
import Card3 from "./Card3.jsx";
import Card4 from "./Card4.jsx";
import Graph1 from "../assets/images/graph.svg";
import Graph2 from "../assets/images/graph1.svg";
import "../assets/css/component.css";
const Component1 = () => {
  return (
    <div>
      <div className="colorcard">
        <div>
          <Card
            color="#FFEFE7"
            heading="Available Positions"
            countnum="24"
            foo="4 Urgent needed"
            foocolor="#FF7F50"
          />
        </div>
        <div>
          <Card
            color="#E8F0FB"
            heading="Job Open"
            countnum="10"
            foo="4 Active hiring"
            foocolor="#3786F1"
          />
        </div>
        <div>
          <Card
            color="#FDEBF9"
            heading="New Employees"
            countnum="24"
            foo="4 Department"
            foocolor="#EE61CF"
          />
        </div>
      </div>
      <div className="colorcard1">
        <div>
          <Card1
            card1="Total Employees"
            card2="216"
            card3="120 Men"
            card4="96 Women"
            cardsvg={Graph1}
          />
        </div>
        <div>
          <Card1
            card1="Talent Request"
            card2="16"
            card3="6 Men"
            card4="10 Women"
            cardsvg={Graph2}
          />
        </div>
      </div>
      <div className="colorcard2">
        <Card2 />
      </div>
      <div className="colorcard3">
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
      </div>
    </div>
  );
};

export default Component1;
