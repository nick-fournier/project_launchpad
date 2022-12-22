import {FC, memo} from "react";
import ReactHtmlParser from 'react-html-parser';
import {BibItem} from "../../../data/dataDef";

// const ReactHtmlParser = require('react-html-parser');

const BibliographyItem: FC<{item: BibItem}> = memo(({item}) => {
  const {content} = item;
  return (
      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      { ReactHtmlParser (content) }
      </div>
  );
});

BibliographyItem.displayName = 'BibliographyItem';
export default BibliographyItem;
