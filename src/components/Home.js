import React from 'react';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="desc-main">
        <h1 className="desc-font">Welcome!, to our page</h1>
        <p className="desc-font ft-sz">
          The history of mathematics can be seen as an ever-increasing
          series of abstractions. Evolutionarily speaking,
          the first abstraction to ever take place, which is shared by many
          animals, was probably that of numbers:
          the realization that a collection of two apples and a collection of
          two oranges (for example) have something in common,
          namely the quantity of their members. As evidenced by tallies
          found on bone, in addition to recognizing how to count physical objects,
          prehistoric peoples may have also recognized how to count abstract quantities,
          like time—days, seasons, or years
        </p>
        <p className="desc-font ft-sz">
          Evidence for more complex mathematics does not appear until around
          3000 BC, when the Babylonians and Egyptians began using arithmetic,
          algebra, and geometry for taxation and other financial calculations,
          for building and construction, and for astronomy.
          The oldest mathematical texts from Mesopotamia and Egypt are from 2000
          to 1800 BC. Many early texts mention Pythagorean triples and so,
          by inference, the Pythagorean theorem seems to be the most ancient and
          widespread mathematical concept after basic arithmetic and geometry.
          It is in Babylonian mathematics that elementary arithmetic (addition, subtraction,
          multiplication, and division ) first appear in the archaeological record.
          The Babylonians also possessed a place-value system and used a sexagesimal numeral
          system which is still in use today for measuring angles and time.
        </p>
      </div>
    );
  }
}
export default Home;
