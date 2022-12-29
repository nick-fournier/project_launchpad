import {FC, memo} from 'react';

import {default_subcontent} from '../../../data/data';
import {TimelineItem, TimelineSubItem} from '../../../data/dataDef';

const TimelineSub: FC<{subitem: TimelineSubItem}> = memo(({subitem}) => {
  const {title, content} = subitem;

  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      {/* <div className="flex flex-col pb-4"> */}
      <div className="flex items-center justify-center gap-x-2 md:justify-start">
        <span className="flex-1 text-sm font-medium italic sm:flex-none">{title}</span>
      </div>
      {/* </div> */}
      {content}
    </div>
  );
});

const Timeline: FC<{item: TimelineItem}> = memo(({item}) => {
  function validateSubItem(subItem: TimelineSubItem[]) {
    return subItem.map((subitem, index) => <TimelineSub key={`${subitem.title}-${index}`} subitem={subitem} />);
  }

  const {title, date, location, content} = item;
  // console.log(item)
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{location}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{title}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {/* {subcontent} */}
      {validateSubItem(content || default_subcontent)}
    </div>
  );
});

Timeline.displayName = 'Timeline';
export default Timeline;
