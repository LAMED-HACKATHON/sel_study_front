import MenteeTodoItem from '@/app/mentor/[id]/ui/MenteeTodoItem';

const MenteeTodoPanel = () => {
  return (
    <div>
      <div className="mb-[45px] h-fit min-h-[402px] w-[363px] rounded-[10px] border border-black px-[28px] pt-[48px]">
        <div className="mb-[19px] border-b border-b-[#D3D3D3] pb-[12px] text-[26px] font-medium">오늘 할 일</div>
        {/* Todo list 뜨게하기 */}
        <div>
          <MenteeTodoItem text={'단어 시험'} status="open" type="숙제" />
          <MenteeTodoItem text={'모의고사'} type="루틴" />
          <MenteeTodoItem text={'순서 삽입 독해'} type="숙제" />
          <MenteeTodoItem text={'작성하기'} status="new" type="숙제" />
        </div>
      </div>
      <div className="flex justify-between">
        <button className="cursor-pointer rounded-[7px] bg-[#545766] px-[25px] py-[13px] text-[20px] text-white">숙제 등록</button>
        <button className="cursor-pointer rounded-[7px] bg-[#545766] px-[25px] py-[13px] text-[20px] text-white">루틴 등록</button>
      </div>
    </div>
  );
};

export default MenteeTodoPanel;
