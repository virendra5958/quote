import Quote from './Quote';
import quotesData from './quotesData.json';

const QuotePage = () => {
  return (
    <div className="quote-page">
      <h1>Geek Food Quotes</h1>
      {quotesData.map((quoteObj, index) => (
        <Quote key={index} quote={quoteObj.quote} writer={quoteObj.writer} />
      ))}
    </div>
  );
};

export default QuotePage;
