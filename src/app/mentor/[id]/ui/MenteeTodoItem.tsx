import { CiCircleMinus } from 'react-icons/ci';
import clsx from 'clsx';

type TodoItemStatus = 'open' | 'new' | 'default';

type MenteeTodoItemProps = {
  text: string;
  status?: TodoItemStatus;
  type?: string;
};

const TEXT_COLOR_BY_STATUS = {
  open: 'text-[#5078A9] font-bold',
  new: 'text-[#757575]',
  default: 'text-black',
};

const MenteeTodoItem = ({ text, status = 'default', type }: MenteeTodoItemProps) => {
  return (
    <div className="mb-[22px] flex items-center">
      <svg viewBox="0 0 12 12" width="12" height="12" className="mr-[12px] flex-shrink-0 text-[#616161]">
        <circle cx="6" cy="6" r="6" fill="currentColor" />
      </svg>

      <div className={`flex-1 p-0 text-[24px] ${TEXT_COLOR_BY_STATUS[status]}`}>
        {text} {type && `(${type})`}
      </div>

      <CiCircleMinus size={24} className="cursor-pointer text-black" />
    </div>
  );
};

export default MenteeTodoItem;
