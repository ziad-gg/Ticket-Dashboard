import Autocomplete from '@mui/joy/Autocomplete';

export default function Check(Props: CheckProps) {
    return (<div className="flex flex-col h-[230px] w-[330px] bg-main rounded-2xl p-4 gap-5">
        <div className="text-xl">{Props.title}</div>
        <div className="">
            <Autocomplete
                className='bg-main text-white'
                placeholder={Props.placeholder}
                options={Props.options}
                sx={{ width: 300 }}
            />
        </div>
        <div className=' opacity-40'>{Props.description}</div>
    </div>)
}