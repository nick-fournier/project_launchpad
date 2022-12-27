import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const Education: FC<{item: TimelineItem}> = memo(({item}) => {
  return (
    <div className="flex flex-col pb-2 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-0">
        {item.date} – {item.title}
      </div>
      <div className="italic">{item.content}</div>
    </div>
  );
});

Education.displayName = 'Education';
export default Education;
