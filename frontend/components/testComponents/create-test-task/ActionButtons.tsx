const ActionButtons = ({ onCancel, onSave }: any) => (
    <div className="flex w-full mt-4 items-center gap-4 justify-end">
        <button
            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
            onClick={onCancel}
        >
            Відхилити
        </button>  
        <button
            className="px-8 py-3 h-full rounded-[16px] bg-[#CA193A] text-white font-semibold text-[16px] shadow-md transition"
            onClick={onSave}
        >
            Зберегти
        </button> 
    </div>
);

export default ActionButtons